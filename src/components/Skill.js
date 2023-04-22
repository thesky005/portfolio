import React, { useEffect } from 'react'
import styled from 'styled-components'

const Skill = () => {

    const skillTitle = '<Skill/>'

    useEffect(() => {
        calculate();
    })

    const calculate = () => {
        //window.location.reload(true)
        let progressBars = document.querySelectorAll(".circular");
        progressBars.forEach((progressBar) => {
            // select child value container
            let container = progressBar.querySelector(".value");
            let progressValue = container.dataset.start;
            let progressEndValue = container.dataset.progress;
            let i = 0;
            // increment progress angles
            let progress = setInterval(() => {
                i++;
                container.textContent = `${[i]}%`;
                progressBar.style.background = `conic-gradient(
                    #01fe87 ${i * 3.6}deg,
                    #caffcf ${i * 3.6}deg
                )`;
                // stop animation
                if (i >= progressEndValue) {
                    clearInterval(progress);
                }
            }, 50);

        });
    }

    return (
        <Container className='container '>
            {/* <h1>{skillTitle}</h1> */}
            <SkillTitle>
            {/* <h1>{skillTitle}</h1> */}
            </SkillTitle>
            <Wrap>
                <Circular className='circular'>
                        <Value className='value' data-start="0" data-progress="90">0
                            {calculate()}
                        </Value>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="" />
                </Circular>
                <Circular className='circular'>
                        <Value className='value' data-start="0" data-progress="80">0
                            {calculate()}
                        </Value>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="" />   
                </Circular>
                <Circular className='circular'>
                        <Value className='value' data-start="0" data-progress="80">0
                            {calculate()}
                        </Value>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />   
                </Circular>
                <Circular className='circular'>
                        <Value className='value' data-start="0" data-progress="80">0
                            {calculate()}
                        </Value>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="" />
                           
                </Circular>
                <Circular className='circular'>
                        <Value className='value' data-start="0" data-progress="80">0
                            {calculate()}
                        </Value>
                        {/* <span>React</span>    */}
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png" alt="" />
                </Circular>
            </Wrap>
        </Container>
    )
}

export default Skill

const Container = styled.div`
    width: 100vw;
    position: relative;
    transform: translate(10%, 40%);
    border-radius: 8px;
    /* display: grid;
    grid-template-columns: auto auto auto auto; */
    display: auto;
    //align-items: flex-start;
    justify-content: center;
    place-items: center;
    //padding-bottom: 30px;
    h1{
        color: #01fe87;
        display : flex;
        align-items: center;
        justify-content: center;
    }
`
const Circular = styled.div`
    position: relative;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background-color: black;
    img{
        z-index: 1;
        width: 40px;
        padding-bottom: 16px;
    }

    &:before{
        content: "";
        position: absolute;
        height: 84%;
        width: 84%;
        background-color: #ffffff;
        border-radius: 50%;
    }
`

const Value = styled.div`
    position: relative;
   // font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #231c3d;
    padding-top: 20px;
`

const Wrap = styled.div`
    width: 1128px;
    position:relative;
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    margin-left: 40px;

    @media (max-width : 768px){
        display: grid;
        grid-gap: -22px;
        gap: 40px;
        grid-template-columns: repeat(3 , 1fr);
        //margin-left: 50px;
        align-items: center;
       // justify-content: ;
    }
`
const SkillName = styled.span`
    
`
const SkillTitle = styled.div`

    width: 100vw;
    padding-bottom: 30px;
    
    h1{
        color: #01fe87;   
    }
`

