import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Skills from '../Components/Skills/Skills';
import Portfolio from '../Components/Portfolio/Portfolio';
import About from '../Components/About/About';



const MainStyled = styled.div`
 .section{
    min-height:100vh;
    background-color: #0d1117;
 }
`;
const MainPage = () => {


    return (
        <MainStyled>
            <div className="section">
                <div className="border border-danger">
                    <Home/>
                </div>
                <div className="border border-info">
                    <About/>
                </div> 
                <div className="border border-warning">
                    <Skills/>
                </div> 
                <div className="border border-success">
                    <Portfolio/>
                </div>
                <div>
                    <Footer/>    
                </div>    
            </div>
        </MainStyled>
    )
}

export default MainPage
