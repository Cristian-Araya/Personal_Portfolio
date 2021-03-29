import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">Navbar</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
