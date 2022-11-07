import React, { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { IoIosColorPalette } from 'react-icons/io';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BsFillCartFill, BsCart } from 'react-icons/bs';

function Sidebar() {

  const route = useLocation();
  const [active, setActive] = useState("home")

  const getPathName = (route) => {
    if (route.includes("home")) {
      return "home";
    }
    else if (route.includes("checkout")) {
      return "checkout";
    }

  }

  useEffect(() => {
    setActive(getPathName(route.pathname))
  }, [route])
  return (
    <Fragment>


      <div className="col-lg-auto bg-dark sticky-top px-0">
        <div className="d-flex flex-lg-column flex-row flex-nowrap bg-dark align-items-center sticky-top res-p5">
          <Link to="/" className="d-block text-white px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
            <IoIosColorPalette size={30}/>
          </Link>
          <br></br>
          <ul className="nav nav-pills nav-flush flex-lg-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 align-items-center">

            <NavLink to="/home" className="text-decoration-none nav-item px-3 py-2" name="home" >
              <span className="nav-link py-0" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                {active === "home" ? <AiFillHome className="text-red" size={20}/> : <AiOutlineHome className="text-white" size={20}/>}
              </span>
              <span className="text-white fs-10">Home</span>
            </NavLink>
            <NavLink to="/checkout" className="text-decoration-none nav-item px-3 py-2" name="checkout" >
              <span className="nav-link py-0" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Checkout">
                {active === "checkout" ? <BsFillCartFill className="text-red" size={20}/> : <BsCart className="text-white" size={20}/>}
              </span>
              <span className="text-white fs-10">Checkout</span>
            </NavLink>
          </ul>
        </div>
      </div>

    </Fragment>
  )
}

export default Sidebar