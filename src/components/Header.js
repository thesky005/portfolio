import React from 'react'
import styled from 'styled-components'
//import { useNavigate ,Link } from 'react-router-dom';


const Header = () => {

    //const navigate = useNavigate();

    const home = '<Home/>';
    const project = '<Project/>';
    const Contact = '<Contact/>';
    const About = '<About/>';
    const me = '<Me/>';


  return (
  
    <Nav>
        <NavDeg>
        <Logo>
            <img src='\images\logo-no-background.svg' alt=''></img>
        </Logo>
        <NavMenu>
            <NavList>
            <a href="/">{home}</a>
            </NavList>
            <NavList>
            <a href="/project">{project}</a>
            </NavList>
            <NavList >
            <a href="/contact">{Contact}</a>
            </NavList>
            <NavList>
            {About}
            </NavList>
        </NavMenu>
        {/* <Profile>{me}</Profile> */}
        </NavDeg>
    </Nav>
  )
}

export default Header

const Nav = styled.div `
    margin: 0;
    padding: 0 20px;
    display: flex;
    max-height: 65px;
    width: 100%;
    //background-color: #1B1212;
    color: white;
    z-index: 1;
    position: absolute;
    top :0;
    position: fixed;
    /* background-color: 
    #0A1627 */
    background-color: black;
    
`
const NavDeg = styled.div`
    display : flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.div `
    padding : 0 16px;
    img{
        position: relative;
        width: 60px;
        height: 50px;
    }
`
const NavMenu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`
const NavList = styled.div `
    padding: 0 15px;

    a{
       color: inherit;
       text-decoration: none;
    }

    &:hover{
        color: #01fe87;
        transition: 10ms;
        cursor: pointer;
    }
`
const Profile = styled.div `
`

