import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Sidebar = ({setPageSlug, pageSlug, main}) => {

    return <Tree className="tree-nav">
          {main ?  <nav className="tree-nav">
            <details className="tree-nav__item is-expandable">
              <summary onClick={()=>setPageSlug('/text/1')} id="text-1"  className='tree-nav__item-title'>0.00 INTRODUCTION: The Problem of School Books</summary>
              <ul className="tree-nav__item">
                <li id="asdf" className="pageList"><a onClick={()=>setPageSlug("/text/18")} id="text-18" className={pageSlug === "/text/18" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.01 Humanism in Crisis</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/24")} id="text-24" className={pageSlug === "/text/24" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.02 Regionalisms</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/26")} id="text-26" className={pageSlug === "/text/26" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.03 Some Perils of Generalization</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/28")} id="text-28" className={pageSlug === "/text/28" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.04 Moralizing Pedagogy</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/31")} id="text-31" className={pageSlug === "/text/31" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.05 Seen and Not Heard</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/33")} id="text-33" className={pageSlug === "/text/33" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.06 Voices Nonetheless</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/35")} id="text-35" className={pageSlug === "/text/35" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.07 The Case of Francesco Negro</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/37")} id="text-37" className={pageSlug === "/text/37" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.08 Graphics Too</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/39")} id="text-39" className={pageSlug === "/text/39" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.09 Economics</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/41")} id="text-41" className={pageSlug === "/text/41" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.10 Cultural Appropriations</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/43")} id="text-43" className={pageSlug === "/text/43" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.11 Past and Future Histories</a></li>
              </ul>
            </details>
            <details className="tree-nav__item is-expandable">
              <summary onClick={()=>setPageSlug('/text/79')} id="text-79"  className='tree-nav__item-title'>1.00 CHAPTER ONE: From School Author to School Book: Terence in Manuscript and Print</summary>
              <ul className="tree-nav__item">
                <li className="pageList"><a onClick={()=>setPageSlug("/text/84")} id="text-84" className={pageSlug === "/text/84" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.01 Why Terence?</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/86")} id="text-86" className={pageSlug === "/text/86" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.02 Terence in Mind</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/88")} id="text-88" className={pageSlug === "/text/88" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.03 School Authors</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/90")} id="text-90" className={pageSlug === "/text/90" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.04 Printing and the Canon</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/92")} id="text-92" className={pageSlug === "/text/92" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.05 Terence in Manuscript</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/94")} id="text-94" className={pageSlug === "/text/94" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.06 The Folio Terence</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/96")} id="text-96" className={pageSlug === "/text/96" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.07 Illustrating Terence</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/98")} id="text-98" className={pageSlug === "/text/98" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.08 Less Than Folio</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/100")} id="text-100" className={pageSlug === "/text/100" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.09 Octavo and Smaller Formats</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/102")} id="text-102" className={pageSlug === "/text/102" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.10 Giovanni Griffio &amp; Co.</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/104")} id="text-104" className={pageSlug === "/text/104" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.11 Can You Sell Philology?</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/106")} id="text-106" className={pageSlug === "/text/106" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.12 Lazzaro Soardi's Mixed Messages</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/108")} id="text-108" className={pageSlug === "/text/108" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.13 More and More Advertising</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/110")} id="text-110" className={pageSlug === "/text/110" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.14 Teachers' Editions, Mid-Century and Beyond</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/112")} id="text-112" className={pageSlug === "/text/112" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.15 Design in Decline</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/115")} id="text-115" className={pageSlug === "/text/115" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.16 Vocabulary Drills and General Rules</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/117")} id="text-117" className={pageSlug === "/text/117" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.17 Giovanni Fabrini and Self-Study</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/122")} id="text-122" className={pageSlug === "/text/122" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.18 More Controversy</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/124")} id="text-124" className={pageSlug === "/text/124" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.19 Literary Joke or Careerism?</a></li>
                <li className="pageList"><a onClick={()=>setPageSlug("/text/126")} id="text-126" className={pageSlug === "/text/126" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.20 Epilogue: On the Market</a></li>
          </ul>
        </details>
        <details className="tree-nav__item is-expandable">
          <summary onClick={()=>setPageSlug('/text/134')} id="text-134"  className='tree-nav__item-title'>2.00 CHAPTER TWO: Getting Started: Learning to Latinize</summary>
            <ul className="tree-nav__item">
            <li className="pageList"><a onClick={()=>setPageSlug("/text/138")} id="text-138" className={pageSlug === "/text/138" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.01 Learning Reading / Learning Latin</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/142")} id="text-142" className={pageSlug === "/text/142" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.02 The Donat and the Cato</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/144")} id="text-144" className={pageSlug === "/text/144" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.03 Pseudo-Donatus</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/146")} id="text-146" className={pageSlug === "/text/146" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.04 Printing the Donat</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/149")} id="text-149" className={pageSlug === "/text/149" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.05 Red and Black</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/153")} id="text-153" className={pageSlug === "/text/153" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.06 Beyond the Donat</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/155")} id="text-155" className={pageSlug === "/text/155" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.07 Guarino Guarini of Verona</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/157")} id="text-157" className={pageSlug === "/text/157" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.08 Improving Guarino</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/160")} id="text-160" className={pageSlug === "/text/160" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.09 A Best Seller: Niccolò Perotti</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/163")} id="text-163" className={pageSlug === "/text/163" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.10 Advertising an Old Standby</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/166")} id="text-166" className={pageSlug === "/text/166" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.11 Humanist Critiques of the Donat</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/169")} id="text-169" className={pageSlug === "/text/169" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.12 Replacing the Donat</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/171")} id="text-171" className={pageSlug === "/text/171" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.13 Radical Grammarians</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/173")} id="text-173" className={pageSlug === "/text/173" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.14 Catonis Disticha</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/176")} id="text-176" className={pageSlug === "/text/176" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.15 Printing the Cato</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/178")} id="text-178" className={pageSlug === "/text/178" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.16 Packaging Morals</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/180")} id="text-180" className={pageSlug === "/text/180" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.17 Desiderius Erasmus, Ad Man</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/189")} id="text-189" className={pageSlug === "/text/189" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.18 Erasmus Picking Fights</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/191")} id="text-191" className={pageSlug === "/text/191" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.19 Kaspar Schoppe, Master Anthologizer</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/194")} id="text-194" className={pageSlug === "/text/194" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.20 How and Why to Drill</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/197")} id="text-197" className={pageSlug === "/text/197" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.21 Modern Teachers</a></li>
          </ul>
      </details>
      <details className="tree-nav__item is-expandable">
        <summary onClick={()=>setPageSlug('/text/199')} id="text-199"  className='tree-nav__item-title'>3.00 CHAPTER THREE: Antonio Mancinelli and the Humanist Classroom</summary>
        <ul className="tree-nav__item">
            <li className="pageList"><a onClick={()=>setPageSlug("/text/201")} id="text-201" className={pageSlug === "/text/201" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.01 A Teacher in Print</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/204")} id="text-204" className={pageSlug === "/text/204" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.02 Advertising Oneself</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/207")} id="text-207" className={pageSlug === "/text/207" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.03 Printer's Errors</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/209")} id="text-209" className={pageSlug === "/text/209" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.04 Teaching With Print</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/211")} id="text-211" className={pageSlug === "/text/211" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.05 Urban Schools, Urban Patrons</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/213")} id="text-213" className={pageSlug === "/text/213" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.06 Elementary Schoolbooks</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/215")} id="text-215" className={pageSlug === "/text/215" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.07 Off to Rome</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/217")} id="text-217" className={pageSlug === "/text/217" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.08 Scholarly Work</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/219")} id="text-219" className={pageSlug === "/text/219" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.09 More Basic Schoolbooks</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/221")} id="text-221" className={pageSlug === "/text/221" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.10 In the Capital of Printing</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/223")} id="text-223" className={pageSlug === "/text/223" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.11 Presenting Cicero, Fixing Lorenzo Valla</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/225")} id="text-225" className={pageSlug === "/text/225" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.12 Impressing the Printers</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/227")} id="text-227" className={pageSlug === "/text/227" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.13 Midlife</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/229")} id="text-229" className={pageSlug === "/text/229" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.14 Late Works</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/231")} id="text-231" className={pageSlug === "/text/231" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.15 Collecting Himself</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/233")} id="text-233" className={pageSlug === "/text/233" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.16 Packaging Celebrity</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/235")} id="text-235" className={pageSlug === "/text/235" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.17 A Slippery Heritage</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/237")} id="text-237" className={pageSlug === "/text/237" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.18 Grammatical Publishing at the Turn of the Century</a></li>
        </ul>
      </details>
      <details className="tree-nav__item is-expandable">
      <summary onClick={()=>setPageSlug('/text/240')} id="text-240"  className='tree-nav__item-title'>4.00 CHAPTER FOUR: Crossing Borders: Northern Textbooks on the Italian Market</summary>
      <ul className="tree-nav__item">
            <li className="pageList"><a onClick={()=>setPageSlug("/text/244")} id="text-244" className={pageSlug === "/text/244" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.01 Transitions / Translations</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/246")} id="text-246" className={pageSlug === "/text/246" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.02 Publishing Celebrity</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/248")} id="text-248" className={pageSlug === "/text/248" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.03 Despauterian Grammar</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/250")} id="text-250" className={pageSlug === "/text/250" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.04 Ciceronianisms</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/252")} id="text-252" className={pageSlug === "/text/252" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.05 De Spauter and the Reform of Pedagogy</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/254")} id="text-254" className={pageSlug === "/text/254" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.06 Re-Formatting the Reformer</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/256")} id="text-256" className={pageSlug === "/text/256" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.07 Josse Bade, Editor and Printer</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/258")} id="text-258" className={pageSlug === "/text/258" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.08 Advertising Grammar Books</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/260")} id="text-260" className={pageSlug === "/text/260" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.09 Jean Pellisson, Company Man</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/262")} id="text-262" className={pageSlug === "/text/262" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.10 Marketing a New De Spauter</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/264")} id="text-264" className={pageSlug === "/text/264" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.11 Late-Century Readings</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/266")} id="text-266" className={pageSlug === "/text/266" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.12 Textbook Packages</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/268")} id="text-268" className={pageSlug === "/text/268" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.13 Packaging Pedagogy Too</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/270")} id="text-270" className={pageSlug === "/text/270" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.14 Geographical Fiction and Fact</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/272")} id="text-272" className={pageSlug === "/text/272" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.15 Itineraries</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/274")} id="text-274" className={pageSlug === "/text/274" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.16 Toponomy</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/276")} id="text-276" className={pageSlug === "/text/276" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.17 Imported Geographies, Italian Packages</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/278")} id="text-278" className={pageSlug === "/text/278" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.18 Geography in Italian Classrooms</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/280")} id="text-280" className={pageSlug === "/text/280" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.19 Imports from the Empire of Latin</a></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable">
      <summary onClick={()=>setPageSlug('/text/282')} id="text-282"  className='tree-nav__item-title'>5.00 CHAPTER FIVE: Universal and Instrumental: the Jesuit Grammar of Manuel Alvares</summary>
      <ul className="tree-nav__item">
            <li className="pageList"><a onClick={()=>setPageSlug("/text/284")} id="text-284" className={pageSlug === "/text/284" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.01 Syntax Sells, Somewhat</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/286")} id="text-286" className={pageSlug === "/text/286" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.02 The Jesuit Market</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/288")} id="text-288" className={pageSlug === "/text/288" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.03 An Evolving Textbook</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/290")} id="text-290" className={pageSlug === "/text/290" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.04 Demands of the Market</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/292")} id="text-292" className={pageSlug === "/text/292" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.05 The Rhetoric of the Preface</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/294")} id="text-294" className={pageSlug === "/text/294" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.06 Addressing the Teachers</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/296")} id="text-296" className={pageSlug === "/text/296" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.07 Resistance is Futile</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/298")} id="text-298" className={pageSlug === "/text/298" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.08 In the Classroom</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/300")} id="text-300" className={pageSlug === "/text/300" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.09 Typography for the Classroom</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/302")} id="text-302" className={pageSlug === "/text/302" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.10 A View from Outside</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/305")} id="text-305" className={pageSlug === "/text/305" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.11 Adversus Emmanuelis Alvari</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/307")} id="text-307" className={pageSlug === "/text/307" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.12 Reviewing and Defending a Textbook</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/309")} id="text-309" className={pageSlug === "/text/309" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.13 Conservative Alternatives</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/311")} id="text-311" className={pageSlug === "/text/311" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.14 Conservative Typography</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/313")} id="text-313" className={pageSlug === "/text/313" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.15 A Radical Reformer</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/315")} id="text-315" className={pageSlug === "/text/315" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.16 Progressive Alternatives</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/317")} id="text-317" className={pageSlug === "/text/317" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.17 A Long Afterlife</a></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable">
      <summary onClick={()=>setPageSlug('/text/319')} id="text-319"  className='tree-nav__item-title'>6.00 CHAPTER SIX: Vernacular Literacy, Commercial Education, and How To Do Stuff</summary>
      <ul className="tree-nav__item">
            <li className="pageList"><a onClick={()=>setPageSlug("/text/321")} id="text-321" className={pageSlug === "/text/321" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.01 Class and Gender, In School and Out</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/323")} id="text-323" className={pageSlug === "/text/323" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.02 Alternative Educations</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/325")} id="text-325" className={pageSlug === "/text/325" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.03 Commercial Skills</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/327")} id="text-327" className={pageSlug === "/text/327" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.04 Better Arithmetic Books</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/329")} id="text-329" className={pageSlug === "/text/329" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.05 Math for the Future</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/331")} id="text-331" className={pageSlug === "/text/331" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.06 Bookkeeping Textbooks</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/333")} id="text-333" className={pageSlug === "/text/333" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.07 Who's Learning Math?</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/335")} id="text-335" className={pageSlug === "/text/335" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.08 Writing Manuals</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/337")} id="text-337" className={pageSlug === "/text/337" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.09 Advertising a Fine Hand</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/339")} id="text-339" className={pageSlug === "/text/339" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.10 Down-Market Handwriting Books</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/341")} id="text-341" className={pageSlug === "/text/341" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.11 Vernacular Literacy</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/343")} id="text-343" className={pageSlug === "/text/343" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.12 Catechism and Condescension</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/345")} id="text-345" className={pageSlug === "/text/345" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.13 Whither How-To?</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/347")} id="text-347" className={pageSlug === "/text/347" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.14 Ricettari</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/349")} id="text-349" className={pageSlug === "/text/349" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.15 Books to Formula</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/351")} id="text-351" className={pageSlug === "/text/351" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.16 Teaching Music Theory and Practice</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/353")} id="text-353" className={pageSlug === "/text/353" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.17 Poor Churchfolk</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/355")} id="text-355" className={pageSlug === "/text/355" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.18 Humanist Music Education</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/357")} id="text-357" className={pageSlug === "/text/357" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.19 Professionals or Amateurs?</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/359")} id="text-359" className={pageSlug === "/text/359" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.20 Conclusion: Into the Future</a></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable">
      <summary onClick={()=>setPageSlug('/text/361')} id="text-361"  className='tree-nav__item-title'>7.00 CHAPTER SEVEN: Emblems in the Classroom</summary>
      <ul className="tree-nav__item">
            <li className="pageList"><a onClick={()=>setPageSlug("/text/363")} id="text-363" className={pageSlug === "/text/363" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.01 Marketing and Moralizing</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/365")} id="text-365" className={pageSlug === "/text/365" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.02 Authors and Audiences</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/367")} id="text-367" className={pageSlug === "/text/367" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.03 Emblem as Machine</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/369")} id="text-369" className={pageSlug === "/text/369" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.04 Visualizing the Text</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/371")} id="text-371" className={pageSlug === "/text/371" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.05 Emblem Books</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/373")} id="text-373" className={pageSlug === "/text/373" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.06 Reading Emblems Every Day</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/375")} id="text-375" className={pageSlug === "/text/375" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.07 Title Page Emblems</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/377")} id="text-377" className={pageSlug === "/text/377" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.08 Trademarks Good or Bad?</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/379")} id="text-379" className={pageSlug === "/text/379" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.09 Classroom Title Pages</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/381")} id="text-381" className={pageSlug === "/text/381" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.10 Breaking the Rules</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/383")} id="text-383" className={pageSlug === "/text/383" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.11 Emblem Books in the Classroom</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/385")} id="text-385" className={pageSlug === "/text/385" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.12 Primers of Virtue</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/387")} id="text-387" className={pageSlug === "/text/387" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.13 Jesuit Emblems</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/388")} id="text-388" className={pageSlug === "/text/388" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.14 Chubby Children and the Blessed Virgin</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/390")} id="text-390" className={pageSlug === "/text/390" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.15 Italians Out of Step</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/392")} id="text-392" className={pageSlug === "/text/392" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.16 Conclusion: Schools of Emblematic Thought</a></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable">
      <summary onClick={()=>setPageSlug('/text/394')} id="text-394"  className='tree-nav__item-title'>8.00 CONCLUSIONS: Selling Books and Selling Ideas</summary>
      <ul className="tree-nav__item">
            <li className="pageList"><a onClick={()=>setPageSlug("/text/396")} id="text-396" className={pageSlug === "/text/396" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.01 A Market for Humanism</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/398")} id="text-398" className={pageSlug === "/text/398" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.02 The Rhetoric of Print</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/400")} id="text-400" className={pageSlug === "/text/400" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.03 Real and Rhetorical Innovations</a></li>
            <li className="pageList"><a onClick={()=>setPageSlug("/text/402")} id="text-402" className={pageSlug === "/text/402" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.04 Profits</a></li>
      </ul>
      </details> 
    </nav>:<nav className="">
            <ul className="initLink">
              <li id='textone' className="initLink" onClick={()=>setPageSlug('/text/1')} >Read the Book</li>
              <li id='abt' className="initLink" onClick={()=>setPageSlug('/abt')} >About the Book</li>
              {/* <li className="initLink" ><a href="bibliography.pdf">Bibliography</a></li> */}
              <li id='fd' className="initLink" onClick={()=>setPageSlug('/fd')}     >For Designers</li>
              <li id='ed' className="initLink" onClick={()=>setPageSlug('/ed')}     >For Educators</li>
              <li id='ps' className="initLink" onClick={()=>setPageSlug('/ps')}     >About the Author</li>
              <li id='cont' className="initLink" onClick={()=>setPageSlug('/cont')}   >Contact</li>
              
        </ul>
      </nav>}
    </Tree>
}

export default Sidebar

const Tree = styled.nav`
  margin-left: 2vw;
  font-size: 16px;
  summary, li { 
    cursor: pointer;
  }
  summary {
    display: block;
    cursor: pointer;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  .underline {
    text-decoration: underline;
  }


  .tree-nav__item {
    display: block;
    white-space: nowrap;
    position: relative;
  }
  .tree-nav__item .tree-nav__item {
    margin-left: 1vw;
  }
  

  .tree-nav__item-title {
    cursor: pointer;
    display: block;
    outline: 0;
  }
  a {
    font-weight: normal;
  }
  
`