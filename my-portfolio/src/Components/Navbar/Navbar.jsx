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
            <nav className={navbar ? 'navbar fixed-top navbar-expand-lg false' : 'navbar sticky-top navbar-expand-lg activo border-bottom'}>
                <div className="container">  
                    <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
                        <ul className="navbar-nav p-2">
                            <li className="nav-item ">
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
                            <li className="nav-item ">
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
                            <li className="nav-item ">
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
                    <button className="navbar-toggler p-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-brand neon">Navbar</span>
                </button>
                </div>
            </nav>
    )
}

export default Navbar
