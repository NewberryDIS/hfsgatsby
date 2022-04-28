import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const SearchResults = props => {
  const { query } = props
  return (
    <StaticQuery
        query={graphql`
            query {
                allMarkdownRemark(sort: { order: ASC, fields: frontmatter___id }) {
                    edges {
                        node {
                            excerpt(pruneLength: 200)
                            html
                            id
                            frontmatter {
                                title
                                slug
                                author
                            }
                        }
                    }
                }
            }
        `}
        render={data => <Results data={data} query={query} {...props} />}
    />
  )
}

export default SearchResults


const Results = (props) => {
    const content  = props.data.allMarkdownRemark.edges
    content.sort((a, b) => (a.slug > b.slug) ? -1 : 1)
    return (

        <div><h1 style={{ textAlign: `center` }}>Search Results for "{props.query}" </h1>

        {content.map(({ node }) => {
            const query = props.query
            const { title, slug } = node.frontmatter
            const { html } = node
            if(node.frontmatter.slug && node.frontmatter.slug.indexOf('text') > -1 && title.length > 0 && html.toLowerCase().indexOf(query.toLowerCase()) > -1){
                const htmlless = html.replace(/(<([^>]+)>)/gi, "");
                var foundQuery = [];
                var indexOccurence = htmlless.toLowerCase().indexOf(query.toLowerCase(), 0);
                while(indexOccurence >= 0) {
                    foundQuery.push(indexOccurence);
                    indexOccurence = htmlless.toLowerCase().indexOf(query.toLowerCase(), indexOccurence + 1);
                }
                const foundContent = foundQuery.map(i => {
                    const presubstrr = htmlless.substring(i - 100, i)
                    const breakOnFirstWord = presubstrr.substring(presubstrr.indexOf(" ") + 1)
                    const postsubstrr = htmlless.substring(i + query.length, i + query.length + 100)
                    const breakOnLastWord = postsubstrr.substring(0, postsubstrr.lastIndexOf(" "))
                    const occurance = htmlless.substring(i, i + query.length) 
                    const queryEnd = query.length + i
                    return (
                        <p key={i}>{i > 0 ? "..." : ""}<span>{breakOnFirstWord}</span><span style={{ background: `var(--textNormal)`, color: `var(--bg)` }}className="yellow">{occurance}</span><span>{breakOnLastWord}</span>{queryEnd === htmlless.length ? "" : "..."}</p>
                    ) 
                })
                return (
                    <article key={slug}>
                    <header>
                        <h2>
                        <Link to={slug}>{title}</Link>
                        </h2>

                    </header>
                    <section>
                        {/* <p
                        dangerouslySetInnerHTML={{
                            __html: foundContent,
                        }}
                        /> */}
                        {foundContent}
                    </section>
                    <hr />
                </article>
            )
        }
        })}
        </div>
        )
}
