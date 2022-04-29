// import React, { useState } from "react"
// import { Link, StaticQuery, graphql, navigate } from "gatsby"
// import styled from "@emotion/styled"
// import { css } from "@emotion/react"

// const SearchResults = props => {
//   let { query } = props
//   return (
//     <StaticQuery
//         query={graphql`
//             query {
//                 allMarkdownRemark(sort: { order: ASC, fields: frontmatter___id }) {
//                     edges {
//                         node {
//                             excerpt(pruneLength: 200)
//                             html
//                             id
//                             frontmatter {
//                                 title
//                                 slug
//                                 author
//                             }
//                         }
//                     }
//                 }
//             }
//         `}
//         render={data => <Results data={data} setQuery={props.setQuery} query={query} {...props} />}
//     />
//   )
// }

// export default SearchResults


// const Results = (props) => {
//     const url = typeof window !== 'undefined' ? window.location.pathname : '';
//     const content  = props.data.allMarkdownRemark.edges
//     const query = props.query.indexOf('?') === 0 ? props.query.replace('?search=', '') : props.query 
//     content.sort((a, b) => (a.slug > b.slug) ? -1 : 1)
//     const filteredContent = content.filter(({ node }) => 
//         node.frontmatter.slug && 
//         node.frontmatter.slug.indexOf('text') > -1 && 
//         node.frontmatter.title.length > 0 && 
//         node.html.replace(/(<([^>]+)>)/gi, "").toLowerCase().indexOf(query.toLowerCase()) > -1
//     )
//     console.log(filteredContent.length)
//     return (

//         <div><h1 style={{ textAlign: `center` }}>{filteredContent.length > 0 ? "Search " : "No "} Results for "{props.query.indexOf('?') === 0 ? props.query.substring(1) : props.query }" </h1>

//         {filteredContent.map(({ node }) => {
//             const { title, slug } = node.frontmatter
//             const { html } = node
//             const htmlless = html.replace(/(<([^>]+)>)/gi, "");
//                 var foundQuery = [];
//                 var indexOccurence = htmlless.toLowerCase().indexOf(query.toLowerCase(), 0);
//                 while(indexOccurence >= 0) {
//                     foundQuery.push(indexOccurence);
//                     indexOccurence = htmlless.toLowerCase().indexOf(query.toLowerCase(), indexOccurence + 1);
//                 }
//                 const foundContent = foundQuery.map(i => {
//                     const presubstrr = htmlless.substring(i - 100, i)
//                     const breakOnFirstWord = presubstrr.substring(presubstrr.indexOf(" ") + 1)
//                     const postsubstrr = htmlless.substring(i + query.length, i + query.length + 100)
//                     const breakOnLastWord = postsubstrr.substring(0, postsubstrr.lastIndexOf(" "))
//                     const occurance = htmlless.substring(i, i + query.length) 
//                     const queryEnd = query.length + i
//                     return (
//                         <p key={i}>{i > 0 ? "..." : ""}<span>{breakOnFirstWord}</span><span style={{ background: `var(--textNormal)`, color: `var(--bg)` }}className="yellow">{occurance}</span><span>{breakOnLastWord}</span>{queryEnd === htmlless.length ? "" : "..."}</p>
//                     ) 
//                 })

//                 return (
//                     <ResultsCss key={slug}>
                       
//                         <Link to={url === slug ? window.location.origin + slug : slug} className="sr-linkbox" >
                           
//                             <header>
//                                 <h2>
//                                     {title}
//                                 </h2>

//                             </header>
//                             <section>
//                                 {/* <p
//                                 dangerouslySetInnerHTML={{
//                                     __html: foundContent,
//                                 }}
//                             /> */}
//                                 {foundContent}
//                             </section>
//                         </Link>
//                     </ResultsCss>
//                 )
//             }
//         )}
//         </div>
//         )
// }


// const ResultsCss = styled.article`
//     margin: 20px;
//     padding: 10px 20px;
//     border: 1px solid var(--textNormal);
//     transition: 0.2s;
//     cursor: pointer;
//     a.sr-linkbox {
//         font-weight: 400 !important;
//         &:hover {
//             text-decoration: none;
//         }
//     }
//     &:hover {
//         box-shadow: var(--textTitle) 0px 0px 10px;
//         // box-shadow: rgb(0 42 85 / 70%) 0px 0px 10px;
//     }

// `