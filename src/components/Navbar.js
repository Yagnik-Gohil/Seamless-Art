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
                                <span className="nav-link w-mc" to="/home" id="navbarDropdown" role="button">
                                Free trial ends in 2 days
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" id="navbarDropdown" role="button">
                                ASD
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" id="navbarDropdown" role="button">
                                ASD
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" id="navbarDropdown" role="button">
                                ASD
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" id="navbarDropdown" role="button">
                                ASD
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mukund cake shop
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/home">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/home">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/home">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link" to="/home" id="navbarDropdown" role="button">
                                ASD
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar