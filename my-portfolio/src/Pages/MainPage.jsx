import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import styled from 'styled-components'
import MainContent from '../Components/MainContent/MainContent';



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
                <div className="hiddenNavbar">
                    <Navbar/>      
                </div>
                    <MainContent/>
            </div>
        </MainStyled>
    )
}

export default MainPage
