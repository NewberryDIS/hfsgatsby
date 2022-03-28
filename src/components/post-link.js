import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
const Indent = styled.div`  
  visibility: ${props =>
    props.hide ? 'hidden' : 'visible'};
  opacity: ${props =>
    props.hide ? '0.01' : '0.99'};
  height: ${props =>
    props.hide ? '%' : '100%'};
  overflow: ${props =>
    props.hide ? 'hidden' : 'auto'};
  padding-left: 1vw;
  transition: visibility 0s, height 0s, opacity 0.5s linear;
`

const Tree = styled.nav`
  summary {
  display: block;
  cursor: pointer;
  outline: 0; 
  }

  summary::-webkit-details-marker {
    display: none;
  }

  body {
  background-color: #191c1e;
  color: white;  
  font-size: 1.6rem;
  font-family: arial;
  margin: 0;
  padding: 3rem;
  }


  .tree-nav__item {
  display: block;
  white-space: nowrap;
  color: #ccc;
  position: relative;
  }
  .tree-nav__item.is-expandable::before {
  border-left: 1px solid #333;
  content: "";
  height: 100%;
  left: 0.8rem;
  position: absolute;
  top: 2.4rem;
  height: calc(100% - 2.4rem);
  }
  .tree-nav__item .tree-nav__item {
  margin-left: 2.4rem;
  }
  .tree-nav__item.is-expandable[open] > .tree-nav__item-title::before {
  font-family: "ionicons";
  transform: rotate(90deg);
  }
  .tree-nav__item.is-expandable > .tree-nav__item-title {
  padding-left: 2.4rem;
  }
  .tree-nav__item.is-expandable > .tree-nav__item-title::before {
  position: absolute;
  will-change: transform;
  transition: transform 300ms ease;
  font-family: "ionicons";
  color: #fff;
  font-size: 1.1rem;
  content: "\f125";
  left: 0;
  display: inline-block;
  width: 1.6rem;
  text-align: center;
  }

  .tree-nav__item-title {
  cursor: pointer;
  display: block;
  outline: 0;
  color: #fff;
  font-size: 1.5rem;
  line-height: 3.2rem;
  }
  .tree-nav__item-title .icon {
  display: inline;
  padding-left: 1.6rem;
  margin-right: 0.8rem;
  color: #666;
  font-size: 1.4rem;
  position: relative;
  }
  .tree-nav__item-title .icon::before {
  top: 0;
  position: absolute;
  left: 0;
  display: inline-block;
  width: 1.6rem;
  text-align: center;
  }

  .tree-nav__item-title::-webkit-details-marker {
  display: none;
  }
`
const Chap = ({hide, setHide, title}) => {
  function clicker (e){
    e.stopPropagation();
    setHide(title.charAt(0))
  }
  return <span  onClick={clicker} >{title} </span>
}
// tree needs to be outside of iterator

const PostLink = ({ post }) => (
  <tr><td>{post.frontmatter.slug}</td><td>{post.frontmatter.title}</td></tr>
)
export default PostLink