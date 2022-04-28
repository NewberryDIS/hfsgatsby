import React, {useState} from 'react'
import styled from "@emotion/styled"
import { css } from "@emotion/react"


const Search = ({query, setQuery}) => {
    const [ value, setValue ] = useState('')
    const handleSubmit = () => {
        setQuery(value)
        // console.log(query)
    }
    return (
        <SearchCss>
            <input
                className="search-textbox"
                type="text"
                name="query"
                placeholder="Search the book..."
                onChange={(e) => setValue(e.target.value) }
                onKeyPress={(e) => e.key === 'Enter' &&  handleSubmit() }
            />
            <SearchIcon setQuery={setQuery} value={value} />
        </SearchCss>
    )
}
    
export default Search

const SearchIcon = ({setQuery, value}) => <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" x="0px" y="0px" viewBox="0 0 100 100" >
    <path onClick={() => setQuery(value)} d="M50,5C25.1,5,5,25.1,5,50c0,24.9,20.1,45,45,45c24.9,0,45-20.1,45-45C95,25.1,74.9,5,50,5L50,5z M39.5,54.8  c7.8,0,14.2-6.4,14.2-14.2c0-7.9-6.4-14.2-14.2-14.2c-7.9,0-14.2,6.3-14.2,14.2C25.3,48.4,31.6,54.8,39.5,54.8L39.5,54.8z   M39.5,21.9c10.3,0,18.7,8.4,18.7,18.7c0,3.8-1.2,7.3-3.1,10.3l18.5,18.5c1.5,1.5,1.5,3.8,0,5.3c-1.5,1.5-3.8,1.5-5.3,0  c-0.3-0.3-18.5-18.5-18.5-18.5c-3,2-6.6,3.1-10.3,3.1c-10.3,0-18.7-8.4-18.7-18.7C20.8,30.3,29.2,21.9,39.5,21.9z"></path>
</svg>

const SearchCss = styled.div`
display: flex;
align-items: center;
.search-textbox {
    margin: 0 1px 0 2px;
    height: 30px;
    flex: 1;
    padding-left: 5px;
    background: var(--bg);
    color: var(--textNormal);
}
    .search-icon {
        fill: var(--textNormal);
        height: 30px;
        width: 30px;
    margin: 0 2px 0 1px;
    flex-basis: 30px;
        width: 100%;
        transition: 0.3s;
    }
    .search-icon:hover {
        fill: var(--textTitle);
        opacity: 0.8;
        
    }
    .search-icon:active{
        fill: var(--bg);
    } 
`
