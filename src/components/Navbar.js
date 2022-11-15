import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import ModalItem from './ModalItem'

function Navbar() {
    const route = useLocation();
    
    return (
        <Fragment>
            <nav className="navbar navbar-expand-md navbar-light bg-light top-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand">Seamless Art</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <span className='me-auto'></span>
                        <ul className="d-flex align-items-center navbar-nav">
                            {
                                !route.pathname.includes("checkout") &&
                                <li className="nav-item mx-2">
                                    <BsCart size={20} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                </li>
                            }
                            <li className="nav-item dropdown">
                                <button type="button" className="btn nav-link dropdown-toggle fw-bold" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Yagnik Gohil
                                </button >
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/account">My Account</Link></li>
                                    <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                                    {/* <li><Link className="dropdown-item" to="/home">Favourits</Link></li> */}
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/home">Log Out</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link fw-bold" role="button">
                                    Login
                                </Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mb-2">
                            <h5 className="modal-title" id="exampleModalLabel">Items in my Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <ModalItem />
                        <ModalItem />
                        <ModalItem />
                        <ModalItem />
                        <ModalItem />
                        <div className="modal-footer mt-2">
                            <button type="button" className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar