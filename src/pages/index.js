// import React, { useState } from "react"
// import { graphql } from "gatsby"
// import styled from "@emotion/styled"
// import { css } from "@emotion/react"
// import Sidebar from '../components/tree'
// import Helmet from 'react-helmet'
// import ModeSwitch from '../components/modeswitch'

// const Container = styled.div`
//   // div {
//   //   border: 1px solid black;
//   // }

//   padding: 0;
//   margin: 0;
//   // position: fixed;
//   // top: 0;
//   // bottom: 0;
//   // left: 0;
//   // right: 0;

//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-content: space-between;

//   // justify-content: center;
//   height: 100%;
//   min-height: 100vh;
  
//   font-size: 20px;
//   line-height: 32px;
//   font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
//   h1, h2 {
//     font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
//   }
//   &.light {
//     color: #333;
//     background-color: white;
//     .pager, h1 {
//       background-color: white;
//     }
//     a {
//       color: #333;
//     }
//     .mkdn-figure, .next-page, .previous-page {
//       border: 1px solid black;
//     }
//     .mkdn-figure:hover, .next-page:hover, .previous-page:hover {
//       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//     }
//     .previous-page, .next-page  {
//       border: 1px solid black;
//     }
//   }
//   &.dark {
//     color: #e8e9ca;
//     background-color: #222222;
//     .pager, h1 {
//       background-color: #222222;
//     }
//     a {
//       color: #e8e9ca;
//     }
//     .mkdn-figure, .next-page, .previous-page {
//       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
//       border: 1px solid black;
//     }
//     .mkdn-figure:hover, .next-page:hover, .previous-page:hover {
//       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.8);
//     }
//     .previous-page, .next-page {

//       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
//       // box-shadow: 0 4px 8px 0 rgba(255,255,255,0.5);
//       border: 1px solid #e8e9ca;
//     }
//   }


//   header {
//     display: flex;
//     align-items: center;
//     align-content: center;
//     justify-content: space-between;
//     flex-basis: 60px;
//     height: 60px;
//     padding: 0 2vw;
//     position: sticky;
//     top: 0;
 
//   }
//   .middle {
//     h1 {
//       position: fixed;
//       padding-left: 2vw;
//       margin: 10px 0;
//       top: 0;
//     }
//     position: relative;
//     height: 100vh;
//     display: flex;
//     flex-direction: row;
//     .main {
//       padding-top: 10vh;
//       overflow-y: auto;
//       flex: 1;
//       top: 0;
//       bottom: 0;
//       position: relative;
//       padding: 0 20vw 0 5vw;
//       display: flex;
//       flex-direction: column;
//       .text-content {
//         flex: 1;
//       }
//     }
//     .scrollable-content {
//       padding-top: 60px;
//     }
//     .sidebar {
//       margin-top: 60px;
//       padding-top: 30px;
//       width: 400px;
//       overflow-x: hidden;
//       text-overflow: ellipsis;
//       details, summary, ul, li, a {
//         overflow-x: hidden;
//         text-overflow: ellipsis;
//       }
//     }
//   }
//   .pager {
//     display: flex;
//     align-content: center;
//     position: sticky;
//     bottom: 0;
//   }
//   .previous-page, .next-page {
//     flex: 1;
//     text-align: center;
//     cursor: pointer;
//     border: 1px solid black;
//     margin: 5px;
//     padding: 5px;
//     transition: 0.2s;
//   }
//   .comments {
//     border: 1px solid black;
//     margin: 3px 10px;
//     padding: 5px;
//     font-size: 0.85rem;
//   }
//   .grey-text {
//     opacity: 50%;
//     transition: 0.1s;
//     &:hover {
//       opacity: 20%;
//     }
//   }
//   .pageList, .initLink {
//     list-style-type: none;
//   }
//   .initLink {
//     padding: 0;
//   }
//   .page-title {
//     flex-basis: 50vw;

//   }
//   .mkdn-figure {
//     width: 20vw;
//     margin: 5vh auto;
//     transition: 0.3s;
//   }

//   .mkdn-image {
//       max-width: 100%;
//       width: 100%;
//       margin: 0;
//       padding: 0;
//   }

//   .mkdn-figcaption {
//       // width: 100%;
//       text-align: center;
//       padding: 0 1vh 1vw 1vh;
//       font-size: 16px;
//       line-height: 20px
//   }
//   a {
//       text-decoration: none;
//       font-weight: bold;
//   }
//   a:hover {
//       text-decoration: underline;
//   }
//   .dark-mode-button {
//     position: fixed;
//     bottom: 0;
//     right: 0;
//   }

//   .main {
//     background-size: 200% 100%;
//     background-image: linear-gradient(to right, ${props => props.colorOne} 50%, ${props => props.colorTwo} 50%);

//     transition: background-position 1s;
//   }
//   .main:hover {
//     background-position: -100% 0;
// }
// .color-one {

// }
//   .color-two {
    
// }
// .comments-button {
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 400px;
//   height: 20px;
//   cursor: pointer;
// }
// `  
// const pages = [    
//   ["/text/1","1",    "0.00 INTRODUCTION: The Problem of School Books","0.00"],
//   ["/text/18","18",  "0.01 Humanism in Crisis","0.01"],
//   ["/text/24","24",  "0.02 Regionalisms","0.02"],
//   ["/text/26","26",  "0.03 Some Perils of Generalization","0.03"],
//   ["/text/28","28",  "0.04 Moralizing Pedagogy","0.04"],
//   ["/text/31","31",  "0.05 Seen and Not Heard","0.05"],
//   ["/text/33","33",  "0.06 Voices Nonetheless","0.06"],
//   ["/text/35","35",  "0.07 The Case of Francesco Negro","0.07"],
//   ["/text/37","37",  "0.08 Graphics Too","0.08"],
//   ["/text/39","39",  "0.09 Economics","0.09"],
//   ["/text/41","41",  "0.10 Cultural Appropriations","0.10"],
//   ["/text/43","43",  "0.11 Past and Future Histories","0.11"],
//   ["/text/79","79",  "1.00 CHAPTER ONE: From School Author to School Book: Terence in Manuscript and Print","1.00"],
//   ["/text/84","84",  "1.01 Why Terence?","1.01"],
//   ["/text/86","86",  "1.02 Terence in Mind","1.02"],
//   ["/text/88","88",  "1.03 School Authors","1.03"],
//   ["/text/90","90",  "1.04 Printing and the Canon","1.04"],
//   ["/text/92","92",  "1.05 Terence in Manuscript","1.05"],
//   ["/text/94","94",  "1.06 The Folio Terence","1.06"],
//   ["/text/96","96",  "1.07 Illustrating Terence","1.07"],
//   ["/text/98","98",  "1.08 Less Than Folio","1.08"],
//   ["/text/100","100","1.09 Octavo and Smaller Formats","1.09"],
//   ["/text/102","102","1.10 Giovanni Griffio & Co.","1.10"],
//   ["/text/104","104","1.11 Can You Sell Philology?","1.11"],
//   ["/text/106","106","1.12 Lazzaro Soardi's Mixed Messages","1.12"],
//   ["/text/108","108","1.13 More and More Advertising","1.13"],
//   ["/text/110","110","1.14 Teachers' Editions, Mid-Century and Beyond","1.14"],
//   ["/text/112","112","1.15 Design in Decline","1.15"],
//   ["/text/115","115","1.16 Vocabulary Drills and General Rules","1.16"],
//   ["/text/117","117","1.17 Giovanni Fabrini and Self-Study","1.17"],
//   ["/text/122","122","1.18 More Controversy","1.18"],
//   ["/text/124","124","1.19 Literary Joke or Careerism?","1.19"],
//   ["/text/126","126","1.20 Epilogue: On the Market","1.20"],
//   ["/text/134","134","2.00 CHAPTER TWO: Getting Started: Learning to Latinize","2.00"],
//   ["/text/138","138","2.01 Learning Reading / Learning Latin","2.01"],
//   ["/text/142","142","2.02 The Donat and the Cato","2.02"],
//   ["/text/144","144","2.03 Pseudo-Donatus","2.03"],
//   ["/text/146","146","2.04 Printing the Donat","2.04"],
//   ["/text/149","149","2.05 Red and Black","2.05"],
//   ["/text/153","153","2.06 Beyond the Donat","2.06"],
//   ["/text/155","155","2.07 Guarino Guarini of Verona","2.07"],
//   ["/text/157","157","2.08 Improving Guarino","2.08"],
//   ["/text/160","160","2.09 A Best Seller: NiccolÃ² Perotti","2.09"],
//   ["/text/163","163","2.10 Advertising an Old Standby","2.10"],
//   ["/text/166","166","2.11 Humanist Critiques of the Donat","2.11"],
//   ["/text/169","169","2.12 Replacing the Donat","2.12"],
//   ["/text/171","171","2.13 Radical Grammarians","2.13"],
//   ["/text/173","173","2.14 Catonis Disticha","2.14"],
//   ["/text/176","176","2.15 Printing the Cato","2.15"],
//   ["/text/178","178","2.16 Packaging Morals","2.16"],
//   ["/text/180","180","2.17 Desiderius Erasmus, Ad Man","2.17"],
//   ["/text/189","189","2.18 Erasmus Picking Fights","2.18"],
//   ["/text/191","191","2.19 Kaspar Schoppe, Master Anthologizer","2.19"],
//   ["/text/194","194","2.20 How and Why to Drill","2.20"],
//   ["/text/197","197","2.21 Modern Teachers","2.21"],
//   ["/text/199","199","3.00 CHAPTER THREE: Antonio Mancinelli and the Humanist Classroom","3.00"],
//   ["/text/201","201","3.01 A Teacher in Print","3.01"],
//   ["/text/204","204","3.02 Advertising Oneself","3.02"],
//   ["/text/207","207","3.03 Printer's Errors","3.03"],
//   ["/text/209","209","3.04 Teaching With Print","3.04"],
//   ["/text/211","211","3.05 Urban Schools, Urban Patrons","3.05"],
//   ["/text/213","213","3.06 Elementary Schoolbooks","3.06"],
//   ["/text/215","215","3.07 Off to Rome","3.07"],
//   ["/text/217","217","3.08 Scholarly Work","3.08"],
//   ["/text/219","219","3.09 More Basic Schoolbooks","3.09"],
//   ["/text/221","221","3.10 In the Capital of Printing","3.10"],
//   ["/text/223","223","3.11 Presenting Cicero, Fixing Lorenzo Valla","3.11"],
//   ["/text/225","225","3.12 Impressing the Printers","3.12"],
//   ["/text/227","227","3.13 Midlife","3.13"],
//   ["/text/229","229","3.14 Late Works","3.14"],
//   ["/text/231","231","3.15 Collecting Himself","3.15"],
//   ["/text/233","233","3.16 Packaging Celebrity","3.16"],
//   ["/text/235","235","3.17 A Slippery Heritage","3.17"],
//   ["/text/237","237","3.18 Grammatical Publishing at the Turn of the Century","3.18"],
//   ["/text/240","240","4.00 CHAPTER FOUR: Crossing Borders: Northern Textbooks on the Italian Market","4.00"],
//   ["/text/244","244","4.01 Transitions / Translations","4.01"],
//   ["/text/246","246","4.02 Publishing Celebrity","4.02"],
//   ["/text/248","248","4.03 Despauterian Grammar","4.03"],
//   ["/text/250","250","4.04 Ciceronianisms","4.04"],
//   ["/text/252","252","4.05 De Spauter and the Reform of Pedagogy","4.05"],
//   ["/text/254","254","4.06 Re-Formatting the Reformer","4.06"],
//   ["/text/256","256","4.07 Josse Bade, Editor and Printer","4.07"],
//   ["/text/258","258","4.08 Advertising Grammar Books","4.08"],
//   ["/text/260","260","4.09 Jean Pellisson, Company Man","4.09"],
//   ["/text/262","262","4.10 Marketing a New De Spauter","4.10"],
//   ["/text/264","264","4.11 Late-Century Readings","4.11"],
//   ["/text/266","266","4.12 Textbook Packages","4.12"],
//   ["/text/268","268","4.13 Packaging Pedagogy Too","4.13"],
//   ["/text/270","270","4.14 Geographical Fiction and Fact","4.14"],
//   ["/text/272","272","4.15 Itineraries","4.15"],
//   ["/text/274","274","4.16 Toponomy","4.16"],
//   ["/text/276","276","4.17 Imported Geographies, Italian Packages","4.17"],
//   ["/text/278","278","4.18 Geography in Italian Classrooms","4.18"],
//   ["/text/280","280","4.19 Imports from the Empire of Latin","4.19"],
//   ["/text/282","282","5.00 CHAPTER FIVE: Universal and Instrumental: the Jesuit Grammar of Manuel Alvares","5.00"],
//   ["/text/284","284","5.01 Syntax Sells, Somewhat","5.01"],
//   ["/text/286","286","5.02 The Jesuit Market","5.02"],
//   ["/text/288","288","5.03 An Evolving Textbook","5.03"],
//   ["/text/290","290","5.04 Demands of the Market","5.04"],
//   ["/text/292","292","5.05 The Rhetoric of the Preface","5.05"],
//   ["/text/294","294","5.06 Addressing the Teachers","5.06"],
//   ["/text/296","296","5.07 Resistance is Futile","5.07"],
//   ["/text/298","298","5.08 In the Classroom","5.08"],
//   ["/text/300","300","5.09 Typography for the Classroom","5.09"],
//   ["/text/302","302","5.10 A View from Outside","5.10"],
//   ["/text/305","305","5.11 Adversus Emmanuelis Alvari","5.11"],
//   ["/text/307","307","5.12 Reviewing and Defending a Textbook","5.12"],
//   ["/text/309","309","5.13 Conservative Alternatives","5.13"],
//   ["/text/311","311","5.14 Conservative Typography","5.14"],
//   ["/text/313","313","5.15 A Radical Reformer","5.15"],
//   ["/text/315","315","5.16 Progressive Alternatives","5.16"],
//   ["/text/317","317","5.17 A Long Afterlife","5.17"],
//   ["/text/319","319","6.00 CHAPTER SIX: Vernacular Literacy, Commercial Education, and How To Do Stuff","6.00"],
//   ["/text/321","321","6.01 Class and Gender, In School and Out","6.01"],
//   ["/text/323","323","6.02 Alternative Educations","6.02"],
//   ["/text/325","325","6.03 Commercial Skills","6.03"],
//   ["/text/327","327","6.04 Better Arithmetic Books","6.04"],
//   ["/text/329","329","6.05 Math for the Future","6.05"],
//   ["/text/331","331","6.06 Bookkeeping Textbooks","6.06"],
//   ["/text/333","333","6.07 Who's Learning Math?","6.07"],
//   ["/text/335","335","6.08 Writing Manuals","6.08"],
//   ["/text/337","337","6.09 Advertising a Fine Hand","6.09"],
//   ["/text/339","339","6.10 Down-Market Handwriting Books","6.10"],
//   ["/text/341","341","6.11 Vernacular Literacy","6.11"],
//   ["/text/343","343","6.12 Catechism and Condescension","6.12"],
//   ["/text/345","345","6.13 Whither How-To?","6.13"],
//   ["/text/347","347","6.14 Ricettari","6.14"],
//   ["/text/349","349","6.15 Books to Formula","6.15"],
//   ["/text/351","351","6.16 Teaching Music Theory and Practice","6.16"],
//   ["/text/353","353","6.17 Poor Churchfolk","6.17"],
//   ["/text/355","355","6.18 Humanist Music Education","6.18"],
//   ["/text/357","357","6.19 Professionals or Amateurs?","6.19"],
//   ["/text/359","359","6.20 Conclusion: Into the Future","6.20"],
//   ["/text/361","361","7.00 CHAPTER SEVEN: Emblems in the Classroom","7.00"],
//   ["/text/363","363","7.01 Marketing and Moralizing","7.01"],
//   ["/text/365","365","7.02 Authors and Audiences","7.02"],
//   ["/text/367","367","7.03 Emblem as Machine","7.03"],
//   ["/text/369","369","7.04 Visualizing the Text","7.04"],
//   ["/text/371","371","7.05 Emblem Books","7.05"],
//   ["/text/373","373","7.06 Reading Emblems Every Day","7.06"],
//   ["/text/375","375","7.07 Title Page Emblems","7.07"],
//   ["/text/377","377","7.08 Trademarks Good or Bad?","7.08"],
//   ["/text/379","379","7.09 Classroom Title Pages","7.09"],
//   ["/text/381","381","7.10 Breaking the Rules","7.10"],
//   ["/text/383","383","7.11 Emblem Books in the Classroom","7.11"],
//   ["/text/385","385","7.12 Primers of Virtue","7.12"],
//   ["/text/387","387","7.13 Jesuit Emblems","7.13"],
//   ["/text/388","388","7.14 Chubby Children and the Blessed Virgin","7.14"],
//   ["/text/390","390","7.15 Italians Out of Step","7.15"],
//   ["/text/392","392","7.16 Conclusion: Schools of Emblematic Thought","7.16"],
//   ["/text/394","394","8.00 CONCLUSIONS: Selling Books and Selling Ideas","8.00"],
//   ["/text/396","396","8.01 A Market for Humanism","8.01"],
//   ["/text/398","398","8.02 The Rhetoric of Print","8.02"],
//   ["/text/400","400","8.03 Real and Rhetorical Innovations","8.03"],
//   ["/text/402","402","8.04 Profits","8.04"]
// ]

// const IndexPage = ({
//     data: {
//       allMarkdownRemark: { edges },
//     },
//   }) => {

//   const [pageSlug, setPageSlug] = useState('/')
//   const [darkMode, setDarkMode] = useState(false)
//   const [showComments, setShowComments] = useState(false)
//   const pageContent = edges.filter(edge => edge.node.frontmatter.slug === pageSlug ) 
//   const commentData = edges.filter(edge => edge.node.frontmatter.post_id && "/text/" + edge.node.frontmatter.post_id === pageSlug)
//   const comments = commentData.map(c => <div className="comments" key={c.node.frontmatter.id} >
//       <p className="comment-author">{c.node.frontmatter.author}</p>
//       <p className="comment-date">{c.node.frontmatter.date}</p>
//       <p className="comment-content" dangerouslySetInnerHTML={{ __html: c.node.html }} />
//     </div>
//   )
//   let colorOne = pageSlug.indexOf('textone') > -1 ?  '#fff' : 
//     pageSlug.indexOf('abt') > -1 ?  '#eee' : 
//     pageSlug.indexOf('fd') > -1 ?  '#ddd' : 
//     pageSlug.indexOf('ed') > -1 ?  '#ccc' : 
//     pageSlug.indexOf('ps') > -1 ?  '#bbb' : 
//     pageSlug.indexOf('cont') > -1 ? '#aaa' : ''
//   // console.log(pages.length)
//   let page = pages.indexOf(pages.find(el => el[0] === pageSlug))
//   // console.log(pages.indexOf(page))
//   return  <Container className={darkMode ? "dark" : "light"} colorOne={colorOne} colorTwo={colorOne}>
//     <Helmet title="Humanism For Sale" />
//     {/* <ModeSwitch dmstate={darkMode} dmswitch={setDarkMode} /> */}
//     <div className="middle">
//       <CommentsButton showComments={showComments} setShowComments={setShowComments} />
//       <div className="sidebar">
//       <a href="/"><h1>Humanism For Sale</h1></a>
//          <Sidebar setPageSlug={setPageSlug} pageSlug={pageSlug} main={pageSlug.length > 6} />
//       </div>
//       <div className="main">
//         <div className="text-content">
//           <div className="scrollable-content">
//             <h2 className="page-title">{pageContent[0].node.frontmatter.title}</h2>
//             <div className="content-target" dangerouslySetInnerHTML={{ __html: pageContent[0].node.html }} />
//             {showComments ? comments : ""}
//           </div>
//         </div>
//       {pageSlug.length > 6 ? <div className="pager">
//           {page > 0 ? <div className="previous-page" onClick={()=>setPageSlug(pages[page - 1][0])}>Previous Page: {pages[page - 1][2]} </div> : <div className="previous-page grey-text">Previous Page</div>}
//           {page < 154 ? <div className="next-page" onClick={()=>setPageSlug(pages[page + 1][0])}>Next Page: {pages[page + 1][2]} </div> : <div className="next-page grey-text">Next Page</div>}
//         </div> : <></>}
//       </div>
//     </div>
//   </Container>
// }


// export default IndexPage

// const CommentsButton = ({showComments, setShowComments}) => {
//   return <button className="comments-button" onClick={() => setShowComments(!showComments)}>{showComments ? "Hide " : "Show " }  Comments </button>
// } 

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
//       edges {
//         node {
//           id
//           html
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


