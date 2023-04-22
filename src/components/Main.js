import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Skill from './Skill'
import Project from './Project'

const Main = () => {
    const name = '<Shivam_Kiran_Yelgire.../>'
    const skillTitle = '<Skill/>'
    const projectTitle = '<Project/>'
  return (
    <Container>
        <Section>
             <Background>
                <Back>
                    <img src="\images\Untitled Design (1).png alt=" />
                </Back>
                <Header/>
            </Background>
            <Wrap>
                <p>Hello,</p><br/>
                <Name>{name}</Name>
                <Profile>
                    <img src="\images\1665648573553-01.jpeg.jpg" alt="" />
                </Profile>
            
                <Desc>
                    <p>
                        I'm currently in my 2nd Year of IT branch in VIIT,Pune. I have keen intrest in Web-Devopolment & gained knowledge & skilled in various web-tool and libraries like html, css , js , reactjs , database like firebase and mongodb.
                    </p>
                </Desc>
                <DownArrow className='downarrow'>
                    <img src="\images\down-arrow.svg" alt="" />
                </DownArrow>
            </Wrap>
        </Section>
        <Skills>
            <h1>{skillTitle}</h1>
            <Skill/>
        </Skills>
        <Projects>
            {/* <h1>{projectTitle}</h1> */}
        </Projects>
    </Container>
  )
}

export default Main

const Container = styled.div`
    margin: 0;
    padding: 0;
`
const Section = styled.section`
   p{
    font-size : 20px;
    color: #1f1f25;
    font-weight: 450;
   }
`
const Background = styled.div`
    
`
const Back = styled.div`
    img{
        z-index: -1;
        width: 100vw;
        height: 100vh;
        outline: hidden;
    }
`
const Name = styled.div`
    position: absolute;
    font-size: 4.5vw;
    font-weight: 700;
    //opacity: 0.33;
    color: #202334;
    -webkit-text-stroke: 0.2px #656e8f;
    position: absolute;
    top: 38%;
    padding-left:20px;

    //text-transform: uppercase;

    &:before {
        content: "<Shivam_Kiran_Yelgire.../>";
        position: absolute;
        padding-left:20px ;
        top:0;
        left:0;
        width: 0;
        height: 100%;
        color: #01fe87;
        -webkit-text-stroke: 0vw #383d52;
        border-right: 2px solid #01fe87 ;
        overflow: hidden;
        animation: animate 6s linear infinite;
    }
     @keyframes animate {
        0%{
            width: 0;
        }
        100%{
            width:100%;
        }
     }
`
const Profile = styled.div`
    position: absolute;
    top:22%;
    left : 70%;
    img{
        max-width: 480px;
        max-height: 400px;
        border-radius: 50%;
        margin-right: 50px;
        @media (max-width: 768px) {
            max-width: 220px;
            max-height: 200px;
        }   
    }
    
`
const Wrap = styled.div`
    //display: flex;
    align-items: self-start;
    justify-content: right;
    p{
        position: absolute;
        z-index: 1;
        top : 30%;
        color: #01fe87;
        padding-left: 20px;

    }
`
const Desc = styled.div`
    p{
        position: absolute;
        z-index: 1;
        max-width: 50%;
        color:white;
        font-weight: bold;
        font-size:medium;
        padding: 0 50px;
        top : 60%;
        opacity: 0.43;
    }
`

const DownArrow = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    

img{
    position: absolute;
    background-color : black;
    border-radius: 50%;
    height : 30px;
    top : 90%;
    animation: animateDown infinite 1.5s;

    @keyframes animateDown {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 20px;
  }
  100% {
    margin-top: 0;
  }
}
}

`
const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        color: #01fe87;
        //display : flex;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        &:hover{
            transform: scale(1.23);
        }
    }
`

const Projects = styled.section`
    color: aliceblue;
    h1{
        position: relative;
        margin-top: 100px;
        //margin-left:130px;
        padding: 50px 0px;
        font-weight: 900;
        font-size: 32px;
        color: #01fe87;
        //padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        &:hover{
            transform: scale(1.23);
        }
    }
`
const ProjectList = styled.div`
    
`
const Project1 = styled.div`
    
`
