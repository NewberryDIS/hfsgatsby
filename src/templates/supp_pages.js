import * as React from "react"
import { Link, graphql } from "gatsby"


const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <div >
      
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
        </header>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        slug
        title
      }
    }
  }
`