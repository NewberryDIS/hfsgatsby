import React, { useState } from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/react"


const CssTest = () => {
    const list = ['a','b','c','d','e']
    const [ listItem, setListItem ] = useState('a')
    const [ oldItem, setOldItem ] = useState('a')
    const changeState = (newState) => {
        setOldItem(listItem)
        setListItem(newState)

    }
    return <CssToot>    
        <Noodlebar list={list} setListItem={changeState} />
        <Sandwichbar listItem={listItem} oldItem={oldItem} />
    </CssToot>
}

const Noodlebar = ({list, setListItem}) => {
    const listbar = list.map(i => <li key={i} id={"item-" + i} onClick={()=>setListItem(i)}>{i}</li>)
    return <div className="sidebar">
        <ul>{listbar}</ul>
    </div>
}

const Sandwichbar = ({listItem, oldItem}) => {
    // const listItem = list[listState]
    return <div className="main" id={"main-" + listItem + " oldmain-" + oldItem} >{listItem}</div>
}

export default CssTest

const CssToot = styled.div`
display: flex;
div {
    border: 1px solid black;
}
.sidebar {
    flex: 1;
}
.main {
    flex: 4;
    padding: 20px;
    font-size: 50px;
    background: 
    background-image: linear-gradient(to right, ${props => props.colorOne} 50%, ${props => props.colorTwo} 50%);

}
li, ul {
    // width: 100%;
    list-style-type: none;
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