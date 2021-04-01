import React from 'react'
import styled from 'styled-components'
import {Link} from "react-scroll";

const Navbar = () => {
    const NavbarStyled = styled.div`
    background-color: #161b22 !important;
    .neon{
        color: #ffead6;
    }
    @media (max-width: 992px){
        .titulo{
            display:none;
        }
        a{
            padding: 6px;
        }
    };
    `;

    return (
        <NavbarStyled>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark border-bottom">
                <div className="container">  
                    <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
                        <ul className="navbar-nav p-2">
                            <li className="nav-item ">
                                <Link
                                activeClass="active"
                                to="about"
                                smooth={true}
                                spy={true}
                                offset={-70}
                                duration={500}
                                >
                                   <span className="neon px-3">About</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                            <Link
                                activeClass="active"
                                to="skills"
                                smooth={true}
                                spy={true}
                                offset={-58}
                                duration={500}
                                >
                                    <span className="neon px-3">Skills</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                            <Link
                                activeClass="active"
                                to="portfolio"
                                smooth={true}
                                spy={true}
                                offset={-58}
                                duration={500}
                                >
                                    <span className="neon px-3">Portfolio</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler p-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-brand neon">Navbar</span>
                </button>
                </div>
            </nav>
        </NavbarStyled>
    )
}

export default Navbar
