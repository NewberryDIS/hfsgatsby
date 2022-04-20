import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Comments = ({postid}) => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___id] }) {
                edges {
                    node {
                        html
                        excerpt(pruneLength: 250)
                        frontmatter {
                            id
                            slug
                            title
                            post_id
                            author
                            date
                        }
                    }
                }
            }
        }
    `)
    const commentData = data.allMarkdownRemark.edges.filter( edge => edge.node.frontmatter.post_id && edge.node.frontmatter.post_id === postid )
    // console.log(commentData)
    const comments = commentData.map(c => <CommentBox key={c.node.frontmatter.id} >
        <p className="comment-author">{c.node.frontmatter.author}</p>
        <p className="comment-date">{c.node.frontmatter.date}</p>
        <p className="comment-content" dangerouslySetInnerHTML={{ __html: c.node.html }} />
    </CommentBox>)
  return (
        <div>
            {comments}
        </div>
    )
}

export default Comments

const CommentBox = styled.div`
    border: 1px solid var(--textNormal);
    margin: 3px 10px;
    padding: 5px;
    font-size: 0.85rem;
`