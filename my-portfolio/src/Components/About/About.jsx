import React from 'react'
import styled from 'styled-components'


    const AboutStyled = styled.div`
    padding-top:10em;
    height:100vh;
    
    `;
const About = () => {


    return (
        <div id="about">
            <AboutStyled>
                    <div className="container text-center">
                        <div className="text-white">
                            <span>HOLA,</span> <span>SOY</span>
                        </div>
                        <div>
                         <span className="text-light">CRISTIAN</span>
                        </div>
                    </div>
            </AboutStyled>
        </div>
    )
}

export default About