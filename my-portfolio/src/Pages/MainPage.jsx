import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import styled from 'styled-components'
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Portfolio from '../Components/Portfolio/Portfolio';



const MainPage = () => {

    const MainStyled = styled.div`
     .section{
        min-height:100vh;
        background-color: #0d1117;
     }
`;

    return (
        <MainStyled>
            <div className="section">
                <div >
                    <Navbar/>
                </div>
                <div className="border border-danger">
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
