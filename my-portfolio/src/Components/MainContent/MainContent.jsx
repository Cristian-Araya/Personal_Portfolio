import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'

const MainContent = () => {
    return (
        <div>
            <div className="border">
                <About/>
            </div>
            <div className="border border-warning">
                <Skills/>
            </div>
            <div className="border borde-info">
                <Portfolio/>
            </div>
            <div className="border border-danger">
                <Footer/>
            </div>
        </div>
    )
}

export default MainContent
