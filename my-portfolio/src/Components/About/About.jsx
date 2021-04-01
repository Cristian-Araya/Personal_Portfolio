import React from 'react'
import styled from 'styled-components'


const About = () => {

    const AboutStyled = styled.div`
    padding-top:5em;
    height:100vh;
    
    `;

    return (
        <div id="about">
            <AboutStyled>
                    <div className="container">
                        <div className="text-white">
                            About
                        </div>
                    </div>
            </AboutStyled>
        </div>
    )
}

export default About