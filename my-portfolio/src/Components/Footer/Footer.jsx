import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    const FooterStyles = styled.div`
    min-height: 5em;
    background-color:#343a40;
    padding-top: 1em;
    color: #ffead6;
    `;

    return (
        <FooterStyles>
            <div className="container sticky-bottom">
                Holaa desde footer
            </div>
        </FooterStyles>
    )
}

export default Footer
