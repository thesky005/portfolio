import React, { useState } from 'react'
import styled from 'styled-components'
import db from '../firebase';
import Header from './Header';

const Contact = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");

    const [loader , setLoader] = useState(false);

    const connect = '<Connect/>';

    const handleSubmit = (e) => {

        e.preventDefault(); //Clicking on a "Submit" button, prevent it from submitting a form
        setLoader(true);

        db.collection("Contact")
        .add({
            name:name, //hi value aahe that user enter
            email:email,
            message:message,  
        })
        //.then means ki yaa nantr ky karaych
        .then(() => { 
            setLoader(false);
            alert("Your message has been Submmited")
        })
        .catch((error)=>{
            alert(error.message)
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");
    }


    return (
        <Cont>
            <Header/>
        <Container>
            <h1>{connect}</h1>
            <ContactWrap>
            <Contacts>
                <ContactIcon>
                   <a href="" target='_blank'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Linkedin_Shiny_Icon.svg" alt="" />
                   </a>
                </ContactIcon>
                <ContactIcon>
                <a href="" target='_blank'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" />
                   </a>
                </ContactIcon>
                <ContactIcon>
                <a href="" target='_blank'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                   </a>
                </ContactIcon>
                <ContactIcon>
                <a href="" target='_blank'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="" />
                   </a>
                </ContactIcon>
            </Contacts>
            </ContactWrap>
            <Formwrap>
            <Form>
                <span1>Contact Us</span1>
                <Name>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Person_icon_%28the_Noun_Project_2817719%29.svg" alt="" />
                    <input type="text"
                    required
                    value={name} placeholder='   Name' 
                    onChange={(e) => setName(e.target.value)}
                    />
                </Name>
                <Email>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Email_Silk.svg" alt="" />
                    <input type="email" required name="" id="" placeholder='     Email' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Email>
                <Msg>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Message-icon-grey.png" alt="" />
                    <textarea type="textarea" placeholder='   Message...'
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </Msg>
                <Submit onClick={handleSubmit} onSubmit={handleSubmit}>
                    <span>Submit</span> 
                </Submit>
            </Form>
            </Formwrap>
            <ChatBox>
                <Chat>
                    chat
                </Chat>
            </ChatBox>
        </Container>
        </Cont>
    )
}

export default Contact
const Cont = styled.div``
const Container = styled.div`
    //color: aliceblue;
    h1{
        margin-top: 100px;
        position: relative;
        bottom:20%;
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
        color: #01fe87;
        letter-spacing: 1.5px;
    }
`
const ContactWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
`
const Contacts = styled.div`
    position: relative;
    //left : 32%;
    margin: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    max-height: 80px;
    //background-color: aliceblue;
    span2{
        color: black;
    }
`
const ContactIcon = styled.div`
    background-color: aliceblue;
    border-radius: 12px;
    max-height: 42px;
    margin: 0 30px;

    a{
        img{
            max-width: 42px;
            max-height: 42px;
        }
    }
`
const Formwrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span1{
        display: flex;
        justify-content: center;
        font-size:30px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        color: #01fe87;
        
    }
`
const Form = styled.div`
    min-width : 300px;
    min-height: 400px;
    background-color: #2E2E2E;
    border-radius: 8px;
    padding: 50px;
    //justify-content: space-between;
    position:relative;
`
const Name = styled.div`
    input{
        outline: hidden;
        background-color: #fafafa;
        resize: vertical;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 4px 4px 10px rgba(0 , 0 , 0, 0.06);
        height: 5px;
        width: 260px ;
        border: none;
    }
    padding: 18px 0px;
    img{
        padding :8px;
        border-radius :4px ;
        position: absolute;
        z-index: 1;
        top: 10;
        left: 2;
        max-width: 12px;
    }
    
`
const Email = styled.div`
    padding: 18px 0px;
    img{
        padding :8px;
        border-radius :4px ;
        position: absolute;
        z-index: 1;
        top: 10;
        left: 2;
    }

    input{

        display: flex;
        background-color: #fafafa;
        resize: vertical;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 4px 4px 10px rgba(0 , 0 , 0, 0.06);
        height: 5px;
        width: 260px ;
        border: none;
    }

`
const Msg = styled.div`

    textarea{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        position: relative;
        background-color: #fafafa;
        resize: vertical;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 4px 4px 10px rgba(0 , 0 , 0, 0.06);
        height: 150px;
        width: 260px;
}
padding: 18px 0px;
    img{
        padding :8px;
        //border-radius :4px ;
        position: absolute;
        z-index: 1;
        bottom: 44.5%;
        max-width: 15px;
    }
`
const Submit = styled.div`

    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span{
    padding: 8px 12px;
    background-color: #01fe87;
    color: black;
    min-width: 100px;
    border-radius: 15px;
    display: flex;
    justify-content: center;

    &:hover{
        //background-color: #01fe87;
        background-color: #94fd9f;
        transition: all 500ms;
    }

    }
`
const Chat = styled.div`
    color: aliceblue;
    max-width: 300px;
    min-height: 500px;
    background-color: aqua;
    position: relative;
    display: flex;
    justify-content: center;
    opacity: 0;
`
const ChatBox = styled.div``

/*

*/