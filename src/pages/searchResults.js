import React from "react"
import { Link, graphql } from "gatsby"

const ChapIndex = props => {
  const { data } = props
  console.log(props.location.search)
  console.log(props.location)
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <h1 style={{ textAlign: `center` }}>Writing</h1>

      {posts.map(({ node }) => {
        const { excerpt } = node
        const { slug } = node.fields

        const { title, description } = node.frontmatter
        return (
          <article key={slug}>
            <header>
              <h2>
                <Link to={slug}>{title}</Link>
              </h2>

            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: description || excerpt,
                }}
              />
            </section>
            <hr />
          </article>
        )
      })}
    </>
  )
}

export default ChapIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`