import React, { useState } from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/react"


const CssTest = () => {
    // const list = ['a','b','c','d','e']
    const list = [
        ['a','#777'],
        ['b','#999'],
        ['c','#bbb'],
        ['d','#ddd'],
        ['e','#fff']
    ]

    const [ listItem, setListItem ] = useState(list[1])
    const [ oldItem, setOldItem ] = useState('a')
    const changeState = (newState) => {
        setOldItem(listItem)
        setListItem(newState)

    }
    
    return <CssToot colorOne={listItem[1]} colorTwo={oldItem[1]} >
        <Sandwichbar listItem={listItem} oldItem={oldItem} />
        <Noodlebar list={list} listItem={listItem} setListItem={changeState} />

    </CssToot>
}

const Noodlebar = ({list, listItem, setListItem}) => {
    const listbar = list.map(i => <li key={i[0]} id={"item-" + i[0]} className={listItem[0] === i[0] ? "slid ok" : "ok" } onClick={()=>setListItem(i)}>{i[1]}</li>)
    return <div className="sidebar">
        <ul>{listbar}</ul>
    </div>
}

const Sandwichbar = ({listItem, oldItem, box}) => {

 

    // const listItem = list[listState]
    return <div className="main" >{listItem[0] + " " + listItem[1]}</div>
}

export default CssTest

const CssToot = styled.div`
    // background: blue;
    height: 100vh;
    display: flex;
    background-size: 200% 100%;
    background-image: linear-gradient(to right, ${props => props.colorOne} 50%, ${props => props.colorTwo} 50%);
    // background:  ${props => props.colorOne};
    transition: 1s;
    transition: background-position 1s;
    div {
        // border: 1px solid black;
    }
    .sidebar {
        flex: 1;
        order: 1;
    }
    .main {
      order: 2;
      flex: 4;
        padding: 20px;
        font-size: 50px;
      }
      .slid { 
      }
    li {
      border-left: 1px solid black;
      border-right: 1px solid black;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      list-style-type: none;
      &.slid {
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        background-position: -100% 0;

      } 
    }
    li {
        padding: 5px 100px;
    }
    #item-a { background-color: #777; }
    #item-b { background-color: #999; }
    #item-c { background-color: #bbb; }
    #item-d { background-color: #ddd; }
    #item-e { background-color: #fff; }


`