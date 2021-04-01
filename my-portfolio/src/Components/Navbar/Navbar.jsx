import React from 'react'
import styled from 'styled-components'

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
                    <span className="navbar-brand titulo neon">Navbar</span>     
                    <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
                        <ul className="navbar-nav p-2">
                            <li className="nav-item ">
                                <a className="nav-link neon px-4" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link neon px-4" href="http://localhost:3000/">Skills<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link neon px-4" href="http://localhost:3000/">Portfolio <span className="sr-only">(current)</span></a>
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
