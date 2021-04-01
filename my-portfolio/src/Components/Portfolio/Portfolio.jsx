import React from 'react'
import styled from 'styled-components'

const Portfolio = () => {

    const PortfolioStyled = styled.div`
        color: #ffead6;
        height: 100vh;
    `;

    return (
        <div id="portfolio">
            <PortfolioStyled>
                <div className="container">
                    Portfolio
                </div>
            </PortfolioStyled>
        </div>
    )
}

export default Portfolio
