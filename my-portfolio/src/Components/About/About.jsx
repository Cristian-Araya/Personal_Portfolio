import React from 'react'
import styled from 'styled-components'


const About = () => {

    const AboutStyled = styled.div`
    border-color: white;
    border-width: 10px;
    padding-top:5em;
    height:100vh;
    `;

    return (
        <AboutStyled>
                <div className="container border border-warning">
                    <div className="text-white">
                        hola
                    </div>
                </div>
        </AboutStyled>
    )
}

export default About