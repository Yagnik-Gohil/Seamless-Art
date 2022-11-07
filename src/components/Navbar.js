import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-md navbar-light top-navbar text-black">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <span className='me-auto'></span>
                        <ul className="d-flex align-items-center navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" id="navbarDropdown" role="button">
                                ASD
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button type="button" className="btn nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Yagnik Gohil
                                </button >
                                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/home">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/home">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/home">Log Out</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar