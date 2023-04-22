import React from "react";
import { useState, useEffect } from "react";
import db from '../firebase'
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Details = () => {

    const { id } = useParams();
    const [detaildata, setDetailData] = useState({});

    useEffect(() => {
        db.collection("Details").doc(id).get().then((doc) =>{
            console.log("Data",doc);
            console.log("2 Data",doc.data());
            console.log("ID",doc.id);
            setDetailData(doc.data());
            // if(doc.exists) {
            //         setDetailData(doc.data());
            //         console.log(doc.data());
            //       } else {
            //         console.log("no such document in firebase🔥");
            //       }
        });


        // db.collection("Details").get().then((doc) =>{
        //     doc.forEach((doc) =>{
        //         console.log(doc.id , "=>" , doc.data());
        //         ids = doc.id
        //         console.log(ids);
                //setDetailData(doc.data());
                //console.log(doc.data());
                // if (doc.exists) {
                //     setDetailData(doc.data());
                //     console.log(doc.data());
                //   } else {
                //     console.log("no such document in firebase🔥");
                //   }
            //})
        //})
    //     const ids = db.collection("Details").get().then((doc) => {
    //         doc.id
    })
       
    
    //var docRef = db.collection("Details").doc({ids});
        /*var docRef = db.collection("Details").doc("ZvgGcfOMzpqX8mke3Tlk");
        var docRef = db.collection("Details").doc("ZvgGcfOMzpqX8mke3Tlk");*/
        /*var docRef = db.collection("Details").doc("ZvgGcfOMzpqX8mke3Tlk");

        docRef.get().then((doc) => {

        
            if (doc.exists) {
                setDetailData(doc.data());
                const skill = []
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    },[id])*/
    // const fetchData = () => {

    // }

    return (
        <Container>
            <Title>
                <p>{detaildata.title}</p>
                <a href="https://github.com/thesky005/GoogleAuthentication">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png" alt="" />
                </a>
            </Title>
            <Desc>
            {detaildata.desc}
            </Desc>
            <Skills>
                <SkillList>
                    <Skill>
                        <img src={detaildata.html} alt="" />
                        <img src={detaildata.css} alt="" />
                        <img src={detaildata.javascript} alt="" />
                        <img src= {detaildata.react} alt="" />
                        <img src= {detaildata.firebase} alt="" />  
                    </Skill>
                </SkillList>
            </Skills>
            <ScreenShot>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
            </ScreenShot>
        </Container>
    )
}

export default Details

const Container = styled.div`

    background-color: black;
    position: relative;
    padding:50px;

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
const Skills = styled.div``
const SkillList = styled.div`
    max-width: 1128px;
    max-height: 150px;
    

`
const Skill = styled.div`
    img{
        max-width: 20%;
        max-height: 80px;
        aspect-ratio: 3/2;
        object-fit: contain;
    }
`
const Desc = styled.div`
    color: white;
`
const ScreenShot = styled.div`

    img{
        max-width: 1128px;
        max-height: 500px;
    }
`
