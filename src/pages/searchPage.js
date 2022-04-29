import React, { useState, useEffect } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Sidebar from '../components/tree'
import Helmet from 'react-helmet'
import ModeSwitch from '../components/modeswitch'
import Nogo from '../components/nogo'
import Search from '../components/search'
import withLocation from '../components/withLocation'


const SearchPage = (props)  => {
  const {search} = props.search
  // console.log(query  + " " + serrch)
    return (
        <PageCss id="toplevel" >
          <Helmet title="Humanism For Sale" >
            <link rel="stylesheet" href="//fast.fonts.net/cssapi/fc8f8385-7e78-4c4b-a85e-9fa8bb57a66a.css"></link>
            <script src="/extras.js"></script>
            <script src="/hfsgatsby/extras.js"></script>
          </Helmet>
          <div className="middle">
            <div className="sidebar">
              <div className="homelink-wrapper">
                <Link to="/" className="homelink" ><h1>Humanism For Sale</h1></Link>
                </div>
              <Sidebar pageSlug={''}  main={false} />
              <Search  />
              <Nogo />
            </div>
            <div className="main">
              <SearchResults query={search}  /> 
                
        </div>
      </div>

      <ModeSwitch />
    </PageCss>
    )
}


export default withLocation(SearchPage)

const PageCss = styled.div`
  padding: 0;
  margin: 0;
  
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: space-between;

  // max-height: 100vh;
  // min-height: 100vh;
  
  font-size: 20px;
  line-height: 32px;
  font-family: var(--fontNoSerif);
  color: var(--textNormal);
  background-color: var(--bg);

  h1, h2 {
    padding: 2px;
    font-family: var(--fontSerif);
  }
  h1 {
    // background: var(--bg);
  }
  h2 {
    color: var(--textNormal);
    border: 1px solid var(--textNormal);
    background: var(--bgTwo);
  }
  a {
    color: var(--textTitle);
  }
  .next-page, .previous-page {
    background: var(--bg);
  }
  .mkdn-figure, .next-page, .previous-page {
    border: 1px solid var(--textNormal);
  }
  .mkdn-figure:hover, .next-page:hover, .previous-page:hover {
    box-shadow: 0 4px 8px 0 rgba(17,26,42,0.5);
  }
  .previous-page, .next-page  {
    border: 1px solid rgba(17,26,42,0.5);
  }
  .middle {
    position: relative;
    height: 99.75vh;
    display: flex;
    flex-direction: row;
    .main {
      padding-top: 10vh;
      overflow-y: auto;
      flex: 1;
      top: 0;
      bottom: 0;
      position: relative;
      padding: 0 15vw 0 5vw;
      display: flex;
      flex-direction: column;
      .text-content {
        flex: 1;
        margin: 2vh 2vw;
        padding: 2vh 2vw;
      }
      a {

      font-weight: bold;
      }
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      height: 100%;
      // max-height: 99vh;
      width: 25vw;
      overflow-x: hidden;
      text-overflow: ellipsis;
      padding: 1px;
      border-right: 1px solid var(--textNormal);

      details, summary, ul, li, a {
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
      // a:hover {
      //   text-decoration: none;
      // }
      // a:hover {
      //   border-bottom: 1px solid var(--textNormal);
      // }
      background: var(--bgTwo);
   
      .homelink-wrapper {
        flex-basis: 4vh;

      }
      .tree-nav {
        flex: 1;
        // max-height: 84vh;
        overflow-y: auto;
      }
      .homelink h1 {

        margin: 2px;
        color: var(--fontTitle);
        border: 1px solid var(--textTitle);
        text-align: center;
        transition: 0.2s;
      }
      .homelink:hover {
        text-decoration: none;
        h1 {

          border: 1px solid var(--textNormal);
          color: var(--textNormal);
        }
      }
    }
  }
  .pager {
    display: flex;
    align-content: center;
    position: sticky;
    bottom: 0;
  }
  .previous-page, .next-page {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: 1px solid var(--textNormal);
    margin: 5px;
    padding: 5px;
    transition: 0.2s;
  }
  .comments {
    border: 1px solid var(--textNormal);
    margin: 3px 10px;
    padding: 5px;
    font-size: 0.85rem;
  }
  .grey-text {
    opacity: 50%;
    transition: 0.1s;
    &:hover {
      opacity: 20%;
    }
  }
  .pageList, .initLink {
    list-style-type: none;
  }
  .initLink {
    padding: 0;
  }
  .page-title {
    flex-basis: 50vw;

  }
  .mkdn-figure {
    width: 20vw;
    margin: 5vh auto;
    transition: 0.3s;
  }

  .mkdn-image {
      max-width: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
  }

  .mkdn-figcaption {
      text-align: center;
      padding: 0 1vh 1vw 1vh;
      font-size: 16px;
      line-height: 20px
  }
  a {
      text-decoration: none;
  }
  a:hover {
      text-decoration: underline;
  }

#comments-button {
  position: fixed;
  bottom: 19px;
  right: 70px;
  cursor: pointer;
  background: transparent;
  width:  32px;
  height: 32px;
  color: blue;
  transition: 0.2s;
  &:hover {
      filter: drop-shadow(0 0 5px var(--textNormal);
  }
}

  #comments-section {
    padding-top: 100px;
    margin-top: -100px;
  }

.main ul {
  list-style-type: none;
  padding-left: 0;
  > li {
    padding: 5px 0;
  }
}
`


const SearchResults = props => {
  let { query } = props
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


const Results = (props) => {
  const content  = props.data.allMarkdownRemark.edges
  const query = props.query ? props.query : "no search query"
  content.sort((a, b) => (a.slug > b.slug) ? -1 : 1)
  const filteredContent = content.filter(({ node }) => 
      node.frontmatter.slug && 
      node.frontmatter.slug.indexOf('text') > -1 && 
      node.frontmatter.title.length > 0 && 
      node.html.replace(/(<([^>]+)>)/gi, "").toLowerCase().indexOf(query.toLowerCase()) > -1
  )
  return (

      <div ><h1 style={{ textAlign: `center` }}>{filteredContent.length > 0 ? "Search " : "No "} Results for "{props.query }" </h1>

      {filteredContent.map(({ node }) => {
          const { title, slug } = node.frontmatter
          const { html } = node
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
                  <ResultsCss key={slug} >
                     
                      <Link to={slug} className="sr-linkbox" >
                         
                          <header>
                              <h2>
                                  {title}
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
                      </Link>
                  </ResultsCss>
              )
          }
      )}
      </div>
      )
}


const ResultsCss = styled.article`
  margin: 20px;
  padding: 10px 20px;
  border: 1px solid var(--textNormal);
  transition: 0.2s;
  cursor: pointer;
  a.sr-linkbox {
      font-weight: 400 !important;
      &:hover {
          text-decoration: none;
      }
  }
  &:hover {
      box-shadow: var(--textTitle) 0px 0px 10px;
      // box-shadow: rgb(0 42 85 / 70%) 0px 0px 10px;
  }

`