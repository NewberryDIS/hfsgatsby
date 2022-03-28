import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import TableOfContents from "../components/toc"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 99vh;
  .middle {
    flex: 1;
    display: flex;
    flex-direction: row;
    .main {
      flex: 1;
    }
    .sidebar {
      flex-basis: 200px;
    }
  }
  div {
    border: 1px solid black;
  }

`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Container className="blog-post-container" >
      <div className="header">
        <h1>Humanism for Sale</h1>
      </div>
      <div className="middle">
        <div className="sidebar">
          TableOfContents 
        </div>
        <div className="main">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </Container>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
