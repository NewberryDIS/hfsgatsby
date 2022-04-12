import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Sidebar from '../components/tree'
import Helmet from 'react-helmet'
import ModeSwitch from '../components/modeswitch'
import Comments from "../components/{MarkdownRemark.frontmatter.__id}"

export default function Template({
    data, location
}) {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
    const [ darkMode, setDarkMode ] = useState(false )
    const [ showComments, setShowComments ] = useState(false)
    // const [ colorIndex, setColorIndex ] = useState(0)
    const page = pages.find(p => "/text/" + p === frontmatter.slug)
    const prev = pages[pages.indexOf(page) - 1]
    const next = pages[pages.indexOf(page) + 1]
    return (
        <PageCss className={darkMode ? "dark" : "light" } dmstate={darkMode} >
          <Helmet title="Humanism for Sale" />

          <div className="middle">
      <div className="sidebar">
      <Link to="/"><h1>Humanism for Sale</h1></Link>
        <Sidebar pageSlug={frontmatter.slug} darkMode={darkMode} main={frontmatter.slug?.indexOf('text') > -1} />
      </div>
      <div className="main">
        <div className="text-content" id="top">
          <div className="scrollable-content" >
            {frontmatter.title.length > 0 ? <h2 className="page-title">{frontmatter.title}</h2> :""}
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
          <div id="comments-section" />
              {showComments ? <Comments  id="comments-start" postid={frontmatter.postid} /> : ""}
            </div>
          </div>
      {frontmatter.slug?.length > 6 ? <div className="pager">
          {prev ? <Link className="previous-page" to={"/text/" + prev} >Previous Page </Link> : <div className="previous-page grey-text">Previous Page</div>}
          {next ? <Link className="next-page" to={"/text/" + next} >Next Page </Link> : <div className="next-page grey-text">Next Page</div>}
        </div> : ""}
        </div>
      </div>

      <ModeSwitch dmstate={darkMode} dmswitch={setDarkMode} />
      {!frontmatter.slug || frontmatter.slug.indexOf('text') === -1 ? "" : <CommentsButton darkMode={darkMode} setShowComments={setShowComments} showComments={showComments} />}
    </PageCss>
    )
}

const PageCss = styled.div`
  padding: 0;
  margin: 0;
  
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: space-between;

  height: 100%;
  min-height: 100vh;
  
  font-size: 20px;
  line-height: 32px;
  font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
  .middle {
    background: url('/bgimage3.png');
    background-size: cover;
    background-position: 50% 50%;
    background-attachment: fixed;
  }
  h1, h2 {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  &.light {
    color: #333;
    background-color: white;

    h1, h2 {
      color: black;
      border: 4px solid black;
      padding: 2px;
    }
    a {
      color: #333;
    }
    .next-page, .previous-page {
      background: rgba(255,255,255,0.5);
    }
    .mkdn-figure, .next-page, .previous-page {
      border: 1px solid black;
    }
    .mkdn-figure:hover, .next-page:hover, .previous-page:hover {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .previous-page, .next-page  {
      border: 1px solid black;
    }
  
  }
  &.dark {
    color: #e8e9ca;
    background-color: #000;
   
    a {
      color: #e8e9ca;
    }
    .next-page, .previous-page {
      background: rgba(0,0,0,0.5);
    }
    h1, h2 {

      border: 4px solid #e8e9ca;
    }
    .mkdn-figure, .next-page, .previous-page {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
      border: 1px solid #e8e9ca;
    }
    .mkdn-figure:hover, .next-page:hover, .previous-page:hover {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
    }
    .previous-page, .next-page {

      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
      // box-shadow: 0 4px 8px 0 rgba(255,255,255,0.5);
      border: 1px solid #e8e9ca;
    }
  }

  // header {
  //   display: flex;
  //   align-items: center;
  //   align-content: center;
  //   justify-content: space-between;
  //   flex-basis: 60px;
  //   height: 60px;
  //   padding: 0 2vw;
  //   position: sticky;
  //   top: 0;
  // }
  .middle {
    h1 {
      position: fixed;
      // padding-left: 2vw;
      margin: 10px 0 0 1vw;
      top: 0;

    }
    position: relative;
    height: 100vh;
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
    }
    // .scrollable-content {
    //   padding-top: 60px;
    // }
    .sidebar {
      // margin-top: 60px;
      margin: 60px 0 0 2vw;
      padding-top: 10px;
      width: 25vw;
      overflow-x: hidden;
      text-overflow: ellipsis;
      details, summary, ul, li, a {
        overflow-x: hidden;
        text-overflow: ellipsis;
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
    border: 1px solid black;
    margin: 5px;
    padding: 5px;
    transition: 0.2s;
  }
  .comments {
    border: 1px solid black;
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
      // width: 100%;
      text-align: center;
      padding: 0 1vh 1vw 1vh;
      font-size: 16px;
      line-height: 20px
  }
  a {
      text-decoration: none;
      font-weight: bold;
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
      filter: ${props=>props.dmstate ? "drop-shadow(0 0 5px rgba(232, 233, 202, 1))": "drop-shadow(0 0 5px rgba(0, 0, 0, 0.8))" };
  }
}
// .blog-post-content p img {
//   width: 20vw;
//   margin: 5vh auto;
//   transition: 0.3s;
//   width: 100%;
//   padding: 0;
// }

// .mkdn-figcaption {
//   // width: 100%;
//   text-align: center;
//   padding: 0 1vh 1vw 1vh;
//   font-size: 16px;
//   line-height: 20px
// }
  #comments-section {
    padding-top: 100px;
    margin-top: -100px;
  }
`

const CommentsButton = ({darkMode, setShowComments, showComments}) => {
  const filll = darkMode ? "#e8e9ca" : "#000000" 
  const commentsAlt = <svg version="1.1" id="comments-button" xmlns="http://www.w3.org/2000/svg" fill={filll} viewBox="0 0 512 512" onClick={()=>setShowComments(!showComments)} >
    <title>Hide Comments</title>
    <g>
      <path d="M424.7,31H87.3C56.2,31,31,56.2,31,87.2v253.1c0,31,25.2,56.2,56.2,56.2h84.4v73.8c0,8.6,9.8,13.6,16.8,8.5l109.8-82.3h126.6c31,0,56.2-25.2,56.2-56.2V87.2C481,56.2,455.8,31,424.7,31z"/>
    </g>
  </svg>
  const commentsMain = <svg version="1.1" id="comments-button" xmlns="http://www.w3.org/2000/svg" fill={filll}  x="0px" y="0px" viewBox="0 0 512 512" onClick={()=>setShowComments(!showComments)} >
    <title>Show Comments</title>
    <g>
      <path d="M424.8,31H87.2C56.2,31,31,56.2,31,87.2v253.1c0,31,25.2,56.2,56.2,56.2h84.4v73.8c0,6.2,5.1,10.5,10.5,10.5
        c2.1,0,4.3-0.6,6.2-2.1l109.8-82.3h126.6c31,0,56.2-25.2,56.2-56.2V87.2C481,56.2,455.8,31,424.8,31z M438.8,340.4
        c0,7.7-6.3,14.1-14.1,14.1H284.1l-11.2,8.4l-59.1,44.3v-52.7H87.2c-7.7,0-14.1-6.3-14.1-14.1V87.2c0-7.7,6.3-14.1,14.1-14.1h337.5
        c7.7,0,14.1,6.3,14.1,14.1V340.4z"/>
    </g>
  </svg>
  return <Link to={showComments ? "#top" : "#comments-section"} >
      {showComments ? commentsAlt : commentsMain}
  </Link>
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        postid
      }
    }
  }
`
const pages = [
  "000",
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
  "011",
  "100",
  "101",
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "114",
  "115",
  "116",
  "117",
  "118",
  "119",
  "120",
  "200",
  "201",
  "202",
  "203",
  "204",
  "205",
  "206",
  "207",
  "208",
  "209",
  "210",
  "211",
  "212",
  "213",
  "214",
  "215",
  "216",
  "217",
  "218",
  "219",
  "220",
  "221",
  "300",
  "301",
  "302",
  "303",
  "304",
  "305",
  "306",
  "307",
  "308",
  "309",
  "310",
  "311",
  "312",
  "313",
  "314",
  "315",
  "316",
  "317",
  "318",
  "400",
  "401",
  "402",
  "403",
  "404",
  "405",
  "406",
  "407",
  "408",
  "409",
  "410",
  "411",
  "412",
  "413",
  "414",
  "415",
  "416",
  "417",
  "418",
  "419",
  "500",
  "501",
  "502",
  "503",
  "504",
  "505",
  "506",
  "507",
  "508",
  "509",
  "510",
  "511",
  "512",
  "513",
  "514",
  "515",
  "516",
  "517",
  "600",
  "601",
  "602",
  "603",
  "604",
  "605",
  "606",
  "607",
  "608",
  "609",
  "610",
  "611",
  "612",
  "613",
  "614",
  "615",
  "616",
  "617",
  "618",
  "619",
  "620",
  "700",
  "701",
  "702",
  "703",
  "704",
  "705",
  "706",
  "707",
  "708",
  "709",
  "710",
  "711",
  "712",
  "713",
  "714",
  "715",
  "716",
  "800",
  "801",
  "802",
  "803",
  "804"
]
