import React from 'react'
import styled from 'styled-components'

    const FooterStyles = styled.div`
    min-height: 3em;
    background-color:#343a40;
    padding-top: 0.7em;
    color: #ffead6;
    `;
const Footer = () => {


    return (
        <FooterStyles id="contact">
            <div className="container sticky-bottom d-flex justify-content-center">
                <span>Copyright © 2021: CristianAraya.cl</span>
            </div>
        </FooterStyles>
    )
}

export default Footer
