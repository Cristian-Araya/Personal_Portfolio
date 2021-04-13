import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import {Link} from "react-scroll";


    const AboutStyled = styled.div`
    padding-top:3em;
    height:100vh;
    .animate{
        animation-name:respiracion;
        position: relative;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function:linear;
    }
    @keyframes respiracion{
        0%{bottom:0px}
        50%{bottom:15px}
        100%{bottom:0px}
    }
    .svg-scroll{
        padding-top:2em;
        fill:white;
        fill-opacity:0.5;
    }
    .hurry {
    color: #bcbbf9;
    font-family: "Train One", cursive;
    }
    .scroll {
    color:#bcbbf9;
    font-family: "Train One", cursive;
    }
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
            padding-top:1em;
            font-size: 20px;
        }
        .scroll{
            padding-top:2em;
            font-size: 20px;
        }
        .svg-scroll{
            width: 5em;
            height: 5em;
        }
        .svg-scroll:hover{
            fill-opacity:1;
            width: 5.3em;
            height: 5.3em;
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
            padding-top:1.5em;
            font-size: 25px;
        }
        .scroll{
            padding-top:1.5em;
            font-size: 25px;
        }
        .svg-scroll{
            width: 5em;
            height: 5em;
        }
        .svg-scroll:hover{
            fill-opacity:1;
            width: 5.3em;
            height: 5.3em;
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
            padding-top:1.5em;
            font-size:30px;
        }
        .scroll{
            padding-top:1.5em;
            font-size:30px;
        }
        .svg-scroll{
            width: 7em;
            height: 7em;
        }
        .svg-scroll:hover{
            fill-opacity:1;
            width: 7.3em;
            height: 7.3em;
        }
    }
    @media (min-width: 992px){
        .title{
        font-size:180px;
        line-height:180px;
        }
        .menu{
        padding-top: 2em;
        }
        .hurry{
            padding-top:1.5em;
            font-size:35px;
        }
        .scroll{
            padding-top:2em;
            font-size:35px;
        }
        .svg-scroll{
            width: 8em;
            height: 8em;
        }
        .svg-scroll:hover{
            fill-opacity:1;
            width: 8.3em;
            height: 8.3em;
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
                    <div className="text-center hurry">Are you hurry?</div>
                    <div className="menu">
                        <Navbar/>
                    </div>
                    <div>
                        <div className="text-center scroll">Or start scrolling!</div>
                        <div className="d-flex justify-content-center">
                            <Link
                                activeClass="active"
                                to="about"
                                smooth={true}
                                spy={true}
                                offset={0}
                                duration={1100}
                            >
                                <svg 
                                className="svg-scroll animate" 
                                viewBox="-90 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m166.238281 430.144531-89.769531-94.898437 29.058594-27.488282 60.632812 64.097657 60.273438-64.058594 29.132812 27.410156zm165.761719-38.144531v-272c0-66.167969-53.832031-120-120-120h-92c-66.167969 0-120 53.832031-120 120v272c0 66.167969 53.832031 120 120 120h92c66.167969 0 120-53.832031 120-120zm-120-352c44.113281 0 80 35.886719 80 80v272c0 44.113281-35.886719 80-80 80h-92c-44.113281 0-80-35.886719-80-80v-272c0-44.113281 35.886719-80 80-80zm-46 41c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 80c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20 20-8.953125 20-20-8.953125-20-20-20zm0 0"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
            </AboutStyled>
    )
}

export default About