import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Main from './Main'
import Skill from './Skill'
import Project from './Project'

const Home = () => {
  return (
    
    <Container>
        <Main/>
        <Project/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    margin: 0;
    padding: 0;
    background-color: black;
`