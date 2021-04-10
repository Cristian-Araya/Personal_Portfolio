import React, {useState,useEffect} from 'react'
import {Link} from "react-scroll";
import './navbar.css'


const Navbar = () => {

    useEffect(()=>{
    }, []);

    const [navbar,setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 57){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll',changeBackground);
    return (
        <nav className={navbar ? 'navbar navbar-expand-lg fixed-top navbar-dark false' : 'activo navbar navbar-expand-lg fixed-top navbar-dark bg-light'}>
            <div className="container">  
                <div className="container text-center">
                    <div className="collapse navbar-collapse justify-content-center  text-navbar" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center text-navbar">
                            <li className="nav-item">
                                <Link
                                        activeClass="active"
                                        to="about"
                                        smooth={true}
                                        spy={true}
                                        offset={0}
                                        duration={700}
                                        >
                                        <span className="neon px-3">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                        activeClass="active"
                                        to="skills"
                                        smooth={true}
                                        spy={true}
                                        offset={0}
                                        duration={700}
                                        >
                                            <span className="neon px-3">Skills</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                        activeClass="active"
                                        to="portfolio"
                                        smooth={true}
                                        spy={true}
                                        offset={0}
                                        duration={700}
                                        >
                                        <span className="neon px-3">Portfolio</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nombre d-flex justify-content-end">
                    <span>Cristian Araya</span>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
