import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import ModalItem from './ModalItem'
import axios from "axios";

function Navbar() {

    const userEmail = localStorage.getItem('user');
    const route = useLocation();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [type, setType] = useState("primary");
    const [alertMessage, setAlertMessage] = useState()
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const getCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        setCart(cart)
    }

    function getIndex(id) {
        var i;
        for (i = 0; i < cart.length; i++) {
            if (cart[i]._id === id) {
                return i;
            }
        }
        return -1;
    }

    const manageItems = (data) => {
        let index = getIndex(data.id)
        if (data.action === "add") {
            if (cart[index].quantity === 5) {
                ShowAlert("warning", `The item "${cart[index].name}" has a limit of 5 per customer.`)
                return;
            } else {
                cart[index].quantity = cart[index].quantity + 1
            }
        } else {
            if (cart[index].quantity === 1) {
                cart.splice(index, 1)
            } else {
                cart[index].quantity = cart[index].quantity - 1
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        getCart();
    }

    const logout = async () => {
        try {
            const res = await axios({
                method: "GET",
                url: "http://localhost:8000/api/v1/user/logout",
            });
            if (res.data.status === "success") {
                ShowAlert("success", "Log out successfully!");
                window.setTimeout(() => {
                    navigate("/login");
                }, 1000);
                localStorage.clear()
            }
        } catch (err) {
            // console.log(err)
            ShowAlert("danger", "Error logging out! Try again.");
        }
    }
    function ShowAlert(type, message) {
        setType(type)
        setAlertMessage(message);
        setShow(true)
        window.setTimeout(() => {
            setShow(false);
            setAlertMessage("");
        }, 1000);
    }
    return (
        <Fragment>
            {
                show &&
                <div className='alert-parent'>
                    <div className={`alert alert-${type}`} role="alert">
                        {alertMessage}
                        <div className="progress mt-2 bg-white">
                            <div className={`progress-bar progress-bar-striped bg-${type} progress-bar-animated fill-1`} role="progressbar" aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            }
            <nav className="navbar navbar-expand-md navbar-light bg-light top-navbar">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Seamless Art</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <span className='me-auto'></span>
                        <ul className="d-flex align-items-center navbar-nav">
                            {
                                !route.pathname.includes("checkout") &&
                                <li className="nav-item mx-2" onClick={getCart}>
                                    <BsCart size={20} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                </li>
                            }
                            {
                                userEmail &&
                                <li className="nav-item dropdown">
                                    <button type="button" className="btn nav-link dropdown-toggle fw-bold" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        {userEmail}
                                    </button >
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/account">My Account</Link></li>
                                        <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                                        {/* <li><Link className="dropdown-item" to="/home">Favourits</Link></li> */}
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><span className="dropdown-item" onClick={logout}>Log Out</span></li>
                                    </ul>
                                </li>
                            }
                            {!userEmail &&
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link fw-bold">
                                        Login
                                    </Link >
                                </li>
                            }
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
                        {
                            cart &&
                            cart.map((product, id) => {
                                return <ModalItem key={id} data={product} manageItems={manageItems} />
                            })
                        }
                        {
                            (!cart || cart.length === 0) &&
                            <h2 className='text-center'>Cart is empty!</h2>
                        }
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