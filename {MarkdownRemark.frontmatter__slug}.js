import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Sidebar from '../components/tree'
import Helmet from 'react-helmet'
import ModeSwitch from '../components/modeswitch'



export default function Template({
    data,
}) {

    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    const [ darkMode, setDarkMode ] = useState(false)
    const [ showComments, setShowComments ] = useState(false)
    return (
        <PageCss className={darkMode ? "dark" : "light" }>
            <div className="blog-post">
                <h1>{frontmatter.title}</h1>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </PageCss>
    )
}

const PageCss = styled.div`

`

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        id
        post_id
        author
        date
      }
    }
  }
`