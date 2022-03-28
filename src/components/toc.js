// import React from "react"
// import { graphql } from "gatsby"
// import PostLink from "./post-link"

// const TableOfContents = ({
//   data: {
//     allMarkdownRemark: { edges },
//   },
// }) => {
//   const Posts = edges
//     .filter(edge => !!edge.node.frontmatter.title) // You can filter your posts based on some criteria
//     .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
//   return <div>{Posts}</div>
// }
// export default TableOfContents
// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
//       edges {
//         node {
//           id
//           excerpt(pruneLength: 250)
//           frontmatter {
//             slug
//             title
//           }
//         }
//       }
//     }
//   }
// `