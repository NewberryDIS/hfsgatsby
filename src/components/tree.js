import React from "react"
import {Link} from 'gatsby' 
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Sidebar = ({ pageSlug, darkMode, main, colors }) => {
    return <Tree className="tree-nav">
          {main ? <nav className="tree-nav">
            <details className="tree-nav__item is-expandable" id="colorone" open={ String(pageSlug)[6] === '0'} >
              <summary  id="text-1"  className='tree-nav__item-title'><Link to="/text/000" >0.00 INTRODUCTION: The Problem of School Books</Link></summary>
              <ul className="tree-nav__item">
                <li className="pageList"><Link to="/text/001" id="text-18" className={pageSlug === "/text/001" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.01 Humanism in Crisis</Link></li>
                <li className="pageList"><Link to="/text/002" id="text-24" className={pageSlug === "/text/002" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.02 Regionalisms</Link></li>
                <li className="pageList"><Link to="/text/003" id="text-26" className={pageSlug === "/text/003" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.03 Some Perils of Generalization</Link></li>
                <li className="pageList"><Link to="/text/004" id="text-28" className={pageSlug === "/text/004" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.04 Moralizing Pedagogy</Link></li>
                <li className="pageList"><Link to="/text/005" id="text-31" className={pageSlug === "/text/005" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.05 Seen and Not Heard</Link></li>
                <li className="pageList"><Link to="/text/006" id="text-33" className={pageSlug === "/text/006" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.06 Voices Nonetheless</Link></li>
                <li className="pageList"><Link to="/text/007" id="text-35" className={pageSlug === "/text/007" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.07 The Case of Francesco Negro</Link></li>
                <li className="pageList"><Link to="/text/008" id="text-37" className={pageSlug === "/text/008" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.08 Graphics Too</Link></li>
                <li className="pageList"><Link to="/text/009" id="text-39" className={pageSlug === "/text/009" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.09 Economics</Link></li>
                <li className="pageList"><Link to="/text/010" id="text-41" className={pageSlug === "/text/010" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.10 Cultural Appropriations</Link></li>
                <li className="pageList"><Link to="/text/011" id="text-43" className={pageSlug === "/text/011" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >0.11 Past and Future Histories</Link></li>
              </ul>
            </details>
            <details className="tree-nav__item is-expandable" id="colortwo" open={ String(pageSlug)[6] === '1'} >
              <summary  id="text-79"  className='tree-nav__item-title'><Link to="/text/100" >1.00 CHAPTER ONE: From School Author to School Book: Terence in Manuscript and Print</Link></summary>
              <ul className="tree-nav__item">
                <li className="pageList"><Link to="/text/101" id="text-84" className={pageSlug === "/text/101" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.01 Why Terence?</Link></li>
                <li className="pageList"><Link to="/text/102" id="text-86" className={pageSlug === "/text/102" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.02 Terence in Mind</Link></li>
                <li className="pageList"><Link to="/text/103" id="text-88" className={pageSlug === "/text/103" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.03 School Authors</Link></li>
                <li className="pageList"><Link to="/text/104" id="text-90" className={pageSlug === "/text/104" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.04 Printing and the Canon</Link></li>
                <li className="pageList"><Link to="/text/105" id="text-92" className={pageSlug === "/text/105" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.05 Terence in Manuscript</Link></li>
                <li className="pageList"><Link to="/text/106" id="text-94" className={pageSlug === "/text/106" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.06 The Folio Terence</Link></li>
                <li className="pageList"><Link to="/text/107" id="text-96" className={pageSlug === "/text/107" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.07 Illustrating Terence</Link></li>
                <li className="pageList"><Link to="/text/108" id="text-98" className={pageSlug === "/text/108" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.08 Less Than Folio</Link></li>
                <li className="pageList"><Link to="/text/109" id="text-100" className={pageSlug === "/text/109" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.09 Octavo and Smaller Formats</Link></li>
                <li className="pageList"><Link to="/text/110" id="text-102" className={pageSlug === "/text/110" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.10 Giovanni Griffio &amp; Co.</Link></li>
                <li className="pageList"><Link to="/text/111" id="text-104" className={pageSlug === "/text/111" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.11 Can You Sell Philology?</Link></li>
                <li className="pageList"><Link to="/text/112" id="text-106" className={pageSlug === "/text/112" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.12 Lazzaro Soardi's Mixed Messages</Link></li>
                <li className="pageList"><Link to="/text/113" id="text-108" className={pageSlug === "/text/113" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.13 More and More Advertising</Link></li>
                <li className="pageList"><Link to="/text/114" id="text-110" className={pageSlug === "/text/114" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.14 Teachers' Editions, Mid-Century and Beyond</Link></li>
                <li className="pageList"><Link to="/text/115" id="text-112" className={pageSlug === "/text/115" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.15 Design in Decline</Link></li>
                <li className="pageList"><Link to="/text/116" id="text-115" className={pageSlug === "/text/116" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.16 Vocabulary Drills and General Rules</Link></li>
                <li className="pageList"><Link to="/text/117" id="text-117" className={pageSlug === "/text/117" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.17 Giovanni Fabrini and Self-Study</Link></li>
                <li className="pageList"><Link to="/text/118" id="text-122" className={pageSlug === "/text/118" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.18 More Controversy</Link></li>
                <li className="pageList"><Link to="/text/119" id="text-124" className={pageSlug === "/text/119" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.19 Literary Joke or Careerism?</Link></li>
                <li className="pageList"><Link to="/text/120" id="text-126" className={pageSlug === "/text/120" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >1.20 Epilogue: On the Market</Link></li>
          </ul>
        </details>
        <details className="tree-nav__item is-expandable" id="colorthree" open={ String(pageSlug)[6] === '2'}>
          <summary  id="text-134"  className='tree-nav__item-title'><Link to="/text/200" >2.00 CHAPTER TWO: Getting Started: Learning to Latinize</Link></summary>
            <ul className="tree-nav__item">
            <li className="pageList"><Link to="/text/201" id="text-138" className={pageSlug === "/text/201" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.01 Learning Reading / Learning Latin</Link></li>
            <li className="pageList"><Link to="/text/202" id="text-142" className={pageSlug === "/text/202" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.02 The Donat and the Cato</Link></li>
            <li className="pageList"><Link to="/text/203" id="text-144" className={pageSlug === "/text/203" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.03 Pseudo-Donatus</Link></li>
            <li className="pageList"><Link to="/text/204" id="text-146" className={pageSlug === "/text/204" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.04 Printing the Donat</Link></li>
            <li className="pageList"><Link to="/text/205" id="text-149" className={pageSlug === "/text/205" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.05 Red and Black</Link></li>
            <li className="pageList"><Link to="/text/206" id="text-153" className={pageSlug === "/text/206" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.06 Beyond the Donat</Link></li>
            <li className="pageList"><Link to="/text/207" id="text-155" className={pageSlug === "/text/207" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.07 Guarino Guarini of Verona</Link></li>
            <li className="pageList"><Link to="/text/208" id="text-157" className={pageSlug === "/text/208" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.08 Improving Guarino</Link></li>
            <li className="pageList"><Link to="/text/209" id="text-160" className={pageSlug === "/text/209" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.09 A Best Seller: Niccolò Perotti</Link></li>
            <li className="pageList"><Link to="/text/210" id="text-163" className={pageSlug === "/text/210" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.10 Advertising an Old Standby</Link></li>
            <li className="pageList"><Link to="/text/211" id="text-166" className={pageSlug === "/text/211" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.11 Humanist Critiques of the Donat</Link></li>
            <li className="pageList"><Link to="/text/212" id="text-169" className={pageSlug === "/text/212" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.12 Replacing the Donat</Link></li>
            <li className="pageList"><Link to="/text/213" id="text-171" className={pageSlug === "/text/213" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.13 Radical Grammarians</Link></li>
            <li className="pageList"><Link to="/text/214" id="text-173" className={pageSlug === "/text/214" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.14 Catonis Disticha</Link></li>
            <li className="pageList"><Link to="/text/215" id="text-176" className={pageSlug === "/text/215" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.15 Printing the Cato</Link></li>
            <li className="pageList"><Link to="/text/216" id="text-178" className={pageSlug === "/text/216" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.16 Packaging Morals</Link></li>
            <li className="pageList"><Link to="/text/217" id="text-180" className={pageSlug === "/text/217" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.17 Desiderius Erasmus, Ad Man</Link></li>
            <li className="pageList"><Link to="/text/218" id="text-189" className={pageSlug === "/text/218" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.18 Erasmus Picking Fights</Link></li>
            <li className="pageList"><Link to="/text/219" id="text-191" className={pageSlug === "/text/219" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.19 Kaspar Schoppe, Master Anthologizer</Link></li>
            <li className="pageList"><Link to="/text/220" id="text-194" className={pageSlug === "/text/220" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.20 How and Why to Drill</Link></li>
            <li className="pageList"><Link to="/text/221" id="text-197" className={pageSlug === "/text/221" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >2.21 Modern Teachers</Link></li>
          </ul>
      </details>
      <details className="tree-nav__item is-expandable" id="colorfour"   open={ String(pageSlug)[6] === '3'} >
        <summary  id="text-199"  className='tree-nav__item-title'><Link to="/text/300" >3.00 CHAPTER THREE: Antonio Mancinelli and the Humanist Classroom</Link></summary>
        <ul className="tree-nav__item">
            <li className="pageList"><Link to="/text/301" id="text-201" className={pageSlug === "/text/301" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.01 A Teacher in Print</Link></li>
            <li className="pageList"><Link to="/text/302" id="text-204" className={pageSlug === "/text/302" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.02 Advertising Oneself</Link></li>
            <li className="pageList"><Link to="/text/303" id="text-207" className={pageSlug === "/text/303" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.03 Printer's Errors</Link></li>
            <li className="pageList"><Link to="/text/304" id="text-209" className={pageSlug === "/text/304" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.04 Teaching With Print</Link></li>
            <li className="pageList"><Link to="/text/305" id="text-211" className={pageSlug === "/text/305" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.05 Urban Schools, Urban Patrons</Link></li>
            <li className="pageList"><Link to="/text/306" id="text-213" className={pageSlug === "/text/306" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.06 Elementary Schoolbooks</Link></li>
            <li className="pageList"><Link to="/text/307" id="text-215" className={pageSlug === "/text/307" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.07 Off to Rome</Link></li>
            <li className="pageList"><Link to="/text/308" id="text-217" className={pageSlug === "/text/308" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.08 Scholarly Work</Link></li>
            <li className="pageList"><Link to="/text/309" id="text-219" className={pageSlug === "/text/309" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.09 More Basic Schoolbooks</Link></li>
            <li className="pageList"><Link to="/text/310" id="text-221" className={pageSlug === "/text/310" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.10 In the Capital of Printing</Link></li>
            <li className="pageList"><Link to="/text/311" id="text-223" className={pageSlug === "/text/311" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.11 Presenting Cicero, Fixing Lorenzo Valla</Link></li>
            <li className="pageList"><Link to="/text/312" id="text-225" className={pageSlug === "/text/312" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.12 Impressing the Printers</Link></li>
            <li className="pageList"><Link to="/text/313" id="text-227" className={pageSlug === "/text/313" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.13 Midlife</Link></li>
            <li className="pageList"><Link to="/text/314" id="text-229" className={pageSlug === "/text/314" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.14 Late Works</Link></li>
            <li className="pageList"><Link to="/text/315" id="text-231" className={pageSlug === "/text/315" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.15 Collecting Himself</Link></li>
            <li className="pageList"><Link to="/text/316" id="text-233" className={pageSlug === "/text/316" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.16 Packaging Celebrity</Link></li>
            <li className="pageList"><Link to="/text/317" id="text-235" className={pageSlug === "/text/317" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.17 A Slippery Heritage</Link></li>
            <li className="pageList"><Link to="/text/318" id="text-237" className={pageSlug === "/text/318" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >3.18 Grammatical Publishing at the Turn of the Century</Link></li>
        </ul>
      </details>
      <details className="tree-nav__item is-expandable" id="colorfive"  open={ String(pageSlug)[6] === '4'} >
      <summary  id="text-240"  className='tree-nav__item-title'><Link to="/text/400" >4.00 CHAPTER FOUR: Crossing Borders: Northern Textbooks on the Italian Market</Link></summary>
      <ul className="tree-nav__item">
            <li className="pageList"><Link to="/text/401" id="text-244" className={pageSlug === "/text/401" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.01 Transitions / Translations</Link></li>
            <li className="pageList"><Link to="/text/402" id="text-246" className={pageSlug === "/text/402" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.02 Publishing Celebrity</Link></li>
            <li className="pageList"><Link to="/text/403" id="text-248" className={pageSlug === "/text/403" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.03 Despauterian Grammar</Link></li>
            <li className="pageList"><Link to="/text/404" id="text-250" className={pageSlug === "/text/404" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.04 Ciceronianisms</Link></li>
            <li className="pageList"><Link to="/text/405" id="text-252" className={pageSlug === "/text/405" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.05 De Spauter and the Reform of Pedagogy</Link></li>
            <li className="pageList"><Link to="/text/406" id="text-254" className={pageSlug === "/text/406" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.06 Re-Formatting the Reformer</Link></li>
            <li className="pageList"><Link to="/text/407" id="text-256" className={pageSlug === "/text/407" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.07 Josse Bade, Editor and Printer</Link></li>
            <li className="pageList"><Link to="/text/408" id="text-258" className={pageSlug === "/text/408" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.08 Advertising Grammar Books</Link></li>
            <li className="pageList"><Link to="/text/409" id="text-260" className={pageSlug === "/text/409" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.09 Jean Pellisson, Company Man</Link></li>
            <li className="pageList"><Link to="/text/410" id="text-262" className={pageSlug === "/text/410" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.10 Marketing a New De Spauter</Link></li>
            <li className="pageList"><Link to="/text/411" id="text-264" className={pageSlug === "/text/411" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.11 Late-Century Readings</Link></li>
            <li className="pageList"><Link to="/text/412" id="text-266" className={pageSlug === "/text/412" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.12 Textbook Packages</Link></li>
            <li className="pageList"><Link to="/text/413" id="text-268" className={pageSlug === "/text/413" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.13 Packaging Pedagogy Too</Link></li>
            <li className="pageList"><Link to="/text/414" id="text-270" className={pageSlug === "/text/414" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.14 Geographical Fiction and Fact</Link></li>
            <li className="pageList"><Link to="/text/415" id="text-272" className={pageSlug === "/text/415" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.15 Itineraries</Link></li>
            <li className="pageList"><Link to="/text/416" id="text-274" className={pageSlug === "/text/416" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.16 Toponomy</Link></li>
            <li className="pageList"><Link to="/text/417" id="text-276" className={pageSlug === "/text/417" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.17 Imported Geographies, Italian Packages</Link></li>
            <li className="pageList"><Link to="/text/418" id="text-278" className={pageSlug === "/text/418" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.18 Geography in Italian Classrooms</Link></li>
            <li className="pageList"><Link to="/text/419" id="text-280" className={pageSlug === "/text/419" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >4.19 Imports from the Empire of Latin</Link></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable" id="colorsix"  open={ String(pageSlug)[6] === '5'} >
      <summary  id="text-282"  className='tree-nav__item-title'><Link to="/text/500" >5.00 CHAPTER FIVE: Universal and Instrumental: the Jesuit Grammar of Manuel Alvares</Link></summary>
      <ul className="tree-nav__item">
            <li className="pageList"><Link to="/text/501" id="text-284" className={pageSlug === "/text/501" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.01 Syntax Sells, Somewhat</Link></li>
            <li className="pageList"><Link to="/text/502" id="text-286" className={pageSlug === "/text/502" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.02 The Jesuit Market</Link></li>
            <li className="pageList"><Link to="/text/503" id="text-288" className={pageSlug === "/text/503" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.03 An Evolving Textbook</Link></li>
            <li className="pageList"><Link to="/text/504" id="text-290" className={pageSlug === "/text/504" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.04 Demands of the Market</Link></li>
            <li className="pageList"><Link to="/text/505" id="text-292" className={pageSlug === "/text/505" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.05 The Rhetoric of the Preface</Link></li>
            <li className="pageList"><Link to="/text/506" id="text-294" className={pageSlug === "/text/506" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.06 Addressing the Teachers</Link></li>
            <li className="pageList"><Link to="/text/507" id="text-296" className={pageSlug === "/text/507" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.07 Resistance is Futile</Link></li>
            <li className="pageList"><Link to="/text/508" id="text-298" className={pageSlug === "/text/508" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.08 In the Classroom</Link></li>
            <li className="pageList"><Link to="/text/509" id="text-300" className={pageSlug === "/text/509" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.09 Typography for the Classroom</Link></li>
            <li className="pageList"><Link to="/text/510" id="text-302" className={pageSlug === "/text/510" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.10 A View from Outside</Link></li>
            <li className="pageList"><Link to="/text/511" id="text-305" className={pageSlug === "/text/511" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.11 Adversus Emmanuelis Alvari</Link></li>
            <li className="pageList"><Link to="/text/512" id="text-307" className={pageSlug === "/text/512" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.12 Reviewing and Defending a Textbook</Link></li>
            <li className="pageList"><Link to="/text/513" id="text-309" className={pageSlug === "/text/513" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.13 Conservative Alternatives</Link></li>
            <li className="pageList"><Link to="/text/514" id="text-311" className={pageSlug === "/text/514" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.14 Conservative Typography</Link></li>
            <li className="pageList"><Link to="/text/515" id="text-313" className={pageSlug === "/text/515" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.15 A Radical Reformer</Link></li>
            <li className="pageList"><Link to="/text/516" id="text-315" className={pageSlug === "/text/516" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.16 Progressive Alternatives</Link></li>
            <li className="pageList"><Link to="/text/517" id="text-317" className={pageSlug === "/text/517" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >5.17 A Long Afterlife</Link></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable" id="colorseven"  open={ String(pageSlug)[6] === '6'} >
      <summary  id="text-319"  className='tree-nav__item-title'><Link to="/text/600" >6.00 CHAPTER SIX: Vernacular Literacy, Commercial Education, and How To Do Stuff</Link></summary>
      <ul className="tree-nav__item">
            <li className="pageList"><Link to="/text/601" id="text-321" className={pageSlug === "/text/601" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.01 Class and Gender, In School and Out</Link></li>
            <li className="pageList"><Link to="/text/602" id="text-323" className={pageSlug === "/text/602" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.02 Alternative Educations</Link></li>
            <li className="pageList"><Link to="/text/603" id="text-325" className={pageSlug === "/text/603" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.03 Commercial Skills</Link></li>
            <li className="pageList"><Link to="/text/604" id="text-327" className={pageSlug === "/text/604" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.04 Better Arithmetic Books</Link></li>
            <li className="pageList"><Link to="/text/605" id="text-329" className={pageSlug === "/text/605" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.05 Math for the Future</Link></li>
            <li className="pageList"><Link to="/text/606" id="text-331" className={pageSlug === "/text/606" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.06 Bookkeeping Textbooks</Link></li>
            <li className="pageList"><Link to="/text/607" id="text-333" className={pageSlug === "/text/607" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.07 Who's Learning Math?</Link></li>
            <li className="pageList"><Link to="/text/608" id="text-335" className={pageSlug === "/text/608" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.08 Writing Manuals</Link></li>
            <li className="pageList"><Link to="/text/609" id="text-337" className={pageSlug === "/text/609" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.09 Advertising a Fine Hand</Link></li>
            <li className="pageList"><Link to="/text/610" id="text-339" className={pageSlug === "/text/610" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.10 Down-Market Handwriting Books</Link></li>
            <li className="pageList"><Link to="/text/611" id="text-341" className={pageSlug === "/text/611" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.11 Vernacular Literacy</Link></li>
            <li className="pageList"><Link to="/text/612" id="text-343" className={pageSlug === "/text/612" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.12 Catechism and Condescension</Link></li>
            <li className="pageList"><Link to="/text/613" id="text-345" className={pageSlug === "/text/613" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.13 Whither How-To?</Link></li>
            <li className="pageList"><Link to="/text/614" id="text-347" className={pageSlug === "/text/614" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.14 Ricettari</Link></li>
            <li className="pageList"><Link to="/text/615" id="text-349" className={pageSlug === "/text/615" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.15 Books to Formula</Link></li>
            <li className="pageList"><Link to="/text/616" id="text-351" className={pageSlug === "/text/616" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.16 Teaching Music Theory and Practice</Link></li>
            <li className="pageList"><Link to="/text/617" id="text-353" className={pageSlug === "/text/617" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.17 Poor Churchfolk</Link></li>
            <li className="pageList"><Link to="/text/618" id="text-355" className={pageSlug === "/text/618" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.18 Humanist Music Education</Link></li>
            <li className="pageList"><Link to="/text/619" id="text-357" className={pageSlug === "/text/619" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.19 Professionals or Amateurs?</Link></li>
            <li className="pageList"><Link to="/text/620" id="text-359" className={pageSlug === "/text/620" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >6.20 Conclusion: Into the Future</Link></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable" id="coloreight"  open={ String(pageSlug)[6] === '7'} >
      <summary  id="text-361"  className='tree-nav__item-title'><Link to="/text/700" >7.00 CHAPTER SEVEN: Emblems in the Classroom</Link></summary>
      <ul className="tree-nav__item">
            <li className="pageList"><Link to="/text/701" id="text-363" className={pageSlug === "/text/701" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.01 Marketing and Moralizing</Link></li>
            <li className="pageList"><Link to="/text/702" id="text-365" className={pageSlug === "/text/702" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.02 Authors and Audiences</Link></li>
            <li className="pageList"><Link to="/text/703" id="text-367" className={pageSlug === "/text/703" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.03 Emblem as Machine</Link></li>
            <li className="pageList"><Link to="/text/704" id="text-369" className={pageSlug === "/text/704" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.04 Visualizing the Text</Link></li>
            <li className="pageList"><Link to="/text/705" id="text-371" className={pageSlug === "/text/705" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.05 Emblem Books</Link></li>
            <li className="pageList"><Link to="/text/706" id="text-373" className={pageSlug === "/text/706" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.06 Reading Emblems Every Day</Link></li>
            <li className="pageList"><Link to="/text/707" id="text-375" className={pageSlug === "/text/707" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.07 Title Page Emblems</Link></li>
            <li className="pageList"><Link to="/text/708" id="text-377" className={pageSlug === "/text/708" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.08 Trademarks Good or Bad?</Link></li>
            <li className="pageList"><Link to="/text/709" id="text-379" className={pageSlug === "/text/709" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.09 Classroom Title Pages</Link></li>
            <li className="pageList"><Link to="/text/710" id="text-381" className={pageSlug === "/text/710" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.10 Breaking the Rules</Link></li>
            <li className="pageList"><Link to="/text/711" id="text-383" className={pageSlug === "/text/711" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.11 Emblem Books in the Classroom</Link></li>
            <li className="pageList"><Link to="/text/712" id="text-385" className={pageSlug === "/text/712" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.12 Primers of Virtue</Link></li>
            <li className="pageList"><Link to="/text/713" id="text-387" className={pageSlug === "/text/713" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.13 Jesuit Emblems</Link></li>
            <li className="pageList"><Link to="/text/714" id="text-388" className={pageSlug === "/text/714" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.14 Chubby Children and the Blessed Virgin</Link></li>
            <li className="pageList"><Link to="/text/715" id="text-390" className={pageSlug === "/text/715" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.15 Italians Out of Step</Link></li>
            <li className="pageList"><Link to="/text/716" id="text-392" className={pageSlug === "/text/716" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >7.16 Conclusion: Schools of Emblematic Thought</Link></li>
      </ul>
      </details>
      <details className="tree-nav__item is-expandable" id="colornine"  open={ String(pageSlug)[6] === '8'} >
      <summary  id="text-394"  className='tree-nav__item-title'><Link to="/text/800" >8.00 CONCLUSIONS: Selling Books and Selling Ideas</Link></summary>
      <ul className="tree-nav__item">
            <li className="pageList"><Link to="/text/801" id="text-396" className={pageSlug === "/text/801" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.01 A Market for Humanism</Link></li>
            <li className="pageList"><Link to="/text/802" id="text-398" className={pageSlug === "/text/802" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.02 The Rhetoric of Print</Link></li>
            <li className="pageList"><Link to="/text/803" id="text-400" className={pageSlug === "/text/803" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.03 Real and Rhetorical Innovations</Link></li>
            <li className="pageList"><Link to="/text/804" id="text-402" className={pageSlug === "/text/804" ? "underline tree-nav__item-title" : "tree-nav__item-title"} >8.04 Profits</Link></li>
      </ul>
      </details> 
    </nav>:<nav className="">
            <ul className="initLink">
              <li id='textone' className="color-a-1 initLink" ><Link to="/text/000"   >Read the Book</Link></li>
              <li id='abt'     className="color-a-2 initLink" ><Link to="/abt"    >About the Book</Link></li>
              {/* <li id='fd'      className="color-a-3 initLink" ><Link to="/fd"     >For Designers</Link></li> */}
              {/* <li id='ed'      className="color-a-4 initLink" ><Link to="/ed"     >For Educators</Link></li> */}
              <li id='ps'      className="color-a-5 initLink" ><Link to="/ct"     >Citing Humanism For Sale</Link></li>
              <li id='ps'      className="color-a-5 initLink" ><Link to="/ps"     >Personal Statement</Link></li>
              <li id='cont'    className="color-a-6 initLink" ><Link to="/cont"   >Contact</Link></li>
              {/* <li id="color-a-7 " className="initLink" ><Link to="bibliography.pdf">Bibliography</Link></li> */}
              
        </ul>
      </nav>}
    </Tree>
}

export default Sidebar

const Tree = styled.div`
flex: 1;
  border: 4px solid transparent;
  margin-left: 1vw;
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
    // padding: 0 0 0 15px;
  }
  ul {
    margin: 0 0 0 1vw;
    padding-inline-start: 0;
  }
  // #colorone   {background:  rgba(216, 9,  126, 0.2);}
  // #colortwo   {background:  rgba(199, 29, 137, 0.2);}
  // #colorthree {background:  rgba(179, 42, 145, 0.2);}
  // #colorfour  {background:  rgba(159, 52, 151, 0.2);}
  // #colorfive  {background:  rgba(137, 59, 155, 0.2);}
  // #colorsix   {background:  rgba(113, 65, 155, 0.2);}
  // #colorseven {background:  rgba(90,  68, 153, 0.2);}
  // #coloreight {background:  rgba(64,  70, 149, 0.2);}
  // #colornine  {background:  rgba(36,  70, 142, 0.2);}

  // .color-a-1 {background-color: rgba(216, 9, 126, 0.2);}
  // .color-a-2 {background-color: rgba(192, 34, 140, 0.2);}
  // .color-a-3 {background-color: rgba(166, 49, 150, 0.2);}
  // .color-a-4 {background-color: rgba(137, 59, 155, 0.2);}
  // .color-a-5 {background-color: rgba(106, 66, 155, 0.2);}
  // .color-a-6 {background-color: rgba(73, 69, 151, 0.2);}
  // .color-a-7 {background-color: rgba(36, 70, 142, 0.2);}
`