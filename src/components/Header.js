import React from 'react'
import styled from 'styled-components'
function header() {
  return (
    <Nav>
      <Logo src="images/logo.svg" />
      <NavMenu> 
      <a>
          <img src="images/home-icon.svg"/>
          <span>Home</span>
        </a>
        <a>
          <img src="images/search-icon.svg"/>
          <span>Search</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg"/>
          <span>watchlist</span>
        </a>
        <a>
          <img src="images/original-icon.svg"/>
          <span>original</span>
        </a>
        <a>
          <img src="images/movie-icon.svg"/>
          <span>movie</span>
        </a>
        <a>
          <img src="images/series-icon.svg"/>
          <span>series</span>
        </a>
      </NavMenu>
    </Nav>
  )
}

export default header

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex ;
  align-items: center;
  padding: 0 36px;
`
const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }
`