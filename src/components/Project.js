import React from 'react'
import styled from 'styled-components';
import Header from './Header';

const Project = () => {
    const projectTitle = '<Project/>'
    return (
        <Cont>
            <Header/>
            <h1>{projectTitle}</h1>
            <Container>
            <Section>
                <Title>
                    <p>Disney-Clone</p>
                    <a href="https://disneyclone111.000webhostapp.com/" rel="noreferrer" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png" alt="" />
                    </a>
                </Title>
                <Desc>
                    <p> • It is React-redux app clone of DisneyPlus Website. This webpage has separate login page, home
                        page and different section like original and trending. <br />
                        • Reactjs-Redux : react-router-dom , hooks(usestate , useeffect , usennavigate etc) , styledcomponent
                        , Exception Handling , Reducer(Action , Reducer, State) <br />
                        • Firebase : Movies Collection , Google Authentication : SignIn with Popup ,SignOut , Login , Firestore.</p>
                </Desc>
                <Details>
                    <a href="">
                        Details...
                    </a>
                </Details>
            </Section>
            <Section>
                <Title>
                    <p>Google Authentication</p>
                    <a href="https://github.com/thesky005/GoogleAuthentication">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png" alt="" />
                    </a>
                </Title>
                <Desc>
                    <p> • It is Webpage for SignIn & SignOut using Reactjs And Firebase through GoogleAuth. <br />
                        • Firebase : getAuth (SignIn with Popup & Redirect ,SignOut , Login using Email And Password) ,
                        Firestore <br />
                        • ReactJs : React-router-dom , Hooks(UseState , useeffect , usenavigate) , Styled-Component for
                        Style , ProtectRoute
                    </p>
                </Desc>
                <Details>
                    <a href="">
                        Details...
                    </a>
                </Details>
            </Section>
            <Section>
                <Title>
                    <p>Tesla-Clone</p>
                    <a href="https://github.com/thesky005/tesla">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png" alt="" />
                    </a>
                </Title>
                <Desc>
                    <p>  • Tesla-Clone : Html , Css , Js , Reactjs
                        It is basic React app clone of Tesla website. It is a static Webpage have Frontend of Tesla Website. <br />
                        •Reactjs : React-router-dom , Slider Bar , Components , Styled-component
                    </p>
                </Desc>
                <Details>
                    <a href="">
                        Details...
                    </a>
                </Details>
            </Section>
            <Section>
                <Title>
                    <p>4</p>
                    <img src="" alt="" href="" />
                </Title>
            </Section>
        </Container>

        </Cont>

    )
}

export default Project
const Cont = styled.div`
    h1{
        /* color:#01fe87;
        display: flex;
        justify-content: center; */
        position: relative;
        margin-top: 80px;
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
const Container = styled.div`
   overflow-y: hidden;
   display: grid;
   grid-gap: 25px;
   gap: 40px;
   grid-template-columns: repeat(2, minmax(0, 1fr));
`

const Title = styled.div`
    padding: 8px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        color: aliceblue;
        font-size: 25px;
        font-weight:bolder;
    }
    img{
        max-width: 35px;
        background-color: aliceblue;
        border-radius: 50%;
        border: solid 2px #ffffff ;
        //-webkit-text-stroke:#01fe87;
        &:hover{
            transition: all 250ms;
            border: solid 2px #01fe87 ;
            transform: scale(1.1);
        }
    }
`
const Section = styled.div`
    //max-width: 948px;
    //max-height : 270px;
    outline-style: solid;
    border-color: red;
    margin:20px 10px;
    align-items: center;
    color: aliceblue;
    border-radius: 4px;

    h1{
        position: relative;
        margin-top: 100px;
        //margin-left:130px;
        padding-top : 50px;
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

    @media (max-width : 768px) {
     p{
        display: contents;
     }
 }
`
const Desc = styled.div`
    padding : 0 20px;
    @media (max-width : 768px) {
     p{
        display: none;
     }
 }
`
const Details = styled.div`
    display: flex;
    justify-content: flex-end;
   
    
    a{
        padding-bottom: 16px;
        color :aliceblue; 
        border: none;
        opacity: 0.33;
        &:hover{
            color: #01fe87;
            opacity: 1;
            transition: all 250ms;
        }
    }   
`