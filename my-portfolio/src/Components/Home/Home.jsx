import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'


    const AboutStyled = styled.div`
    padding-top:3em;
    height:100vh;
    
    .title{
        font-family: 'Anton', sans-serif;
        letter-spacing:0.1px;
        font-size: 20px;
        line-height:20px;
    }
    .hola{
        -webkit-text-stroke: 2px #4e766d;
        color: transparent;
    }
    .soy{
        -webkit-text-stroke: 2px #ff5454;
        color: transparent;
    }
    .name{
        -webkit-text-stroke: 2px #b3577c;
        color: transparent;
    }
    .ex{
        -webkit-text-stroke: 2px #09fdd9;
        color: transparent;
    }
    .txt-btm{
        word-spacing:-10px;
        padding:0px;
        margin: 0px;
    }
    .txt-top{
        word-spacing:-100px;
        padding:0px;
        margin: 0px;
    }
    @media (max-width: 575px){
        .menu{
        padding-top: 2em;
        }
        .title{
        font-size: 80px;
        line-height:80px;
        }
        .hurry{
            padding-top:2em;
        }
        .scroll{
            padding-top:2em;
        }
        .svg-scroll{
            width: 4em;
            height: 4em;
            fill:white;
        }
    }
    @media (min-width: 576px){
        .menu{
        padding-top: 4em;
        }
        .title{
        font-size: 120px;
        line-height:120px;
        }
        .hurry{
            padding-top:2.5em;
        }
        .scroll{
            padding-top:2.5em;
        }
        .svg-scroll{
            width: 4.5em;
            height: 4.5em;
            fill:white;
        }
    }
    @media (min-width: 768px){
        .menu{
        padding-top: 4em;
        }
        .title{
            font-size:140px;
            line-height:140px;
        }
        .hurry{
            padding-top:2.8em;
        }
        .scroll{
            padding-top:2.8em;
        }
        .svg-scroll{
            width: 5em;
            height: 5em;
            fill:white;
        }
    }
    @media (min-width: 992px){
        .title{
            font-size:180px;
            line-height:180px;
        }
        .menu{
        padding-top: 4em;
        }
        .hurry{
            padding-top:3em;
        }
        .scroll{
            padding-top:3em;
        }
        .svg-scroll{
            width: 6em;
            height: 6em;
            fill:white;
        }
    }
    `;
const About = () => {


    return (
            <AboutStyled id="home">
                    <div className="container text-center title">
                        <div className="txt-top">
                            <span className="hola">Hi,</span> <span className="soy">i'm</span>
                        </div>
                        <div className="txt-btm">
                             <span className="name">CRISTIAN</span>
                            <span className="ex">!</span>
                        </div>
                    </div>
                    <div className="text-center text-light hurry">Are you hurry?</div>
                    <div className="menu">
                        <Navbar/>
                    </div>
                    <div>
                        <div className="text-center text-light scroll">Or start scrolling</div>
                        <div className="d-flex justify-content-center">
                            <svg 
                            className="svg-scroll pt-3" 
                            viewBox="-90 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m166.238281 430.144531-89.769531-94.898437 29.058594-27.488282 60.632812 64.097657 60.273438-64.058594 29.132812 27.410156zm165.761719-38.144531v-272c0-66.167969-53.832031-120-120-120h-92c-66.167969 0-120 53.832031-120 120v272c0 66.167969 53.832031 120 120 120h92c66.167969 0 120-53.832031 120-120zm-120-352c44.113281 0 80 35.886719 80 80v272c0 44.113281-35.886719 80-80 80h-92c-44.113281 0-80-35.886719-80-80v-272c0-44.113281 35.886719-80 80-80zm-46 41c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 0"/>
                            </svg>
                        </div>
                    </div>
            </AboutStyled>
    )
}

export default About