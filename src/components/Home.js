import React, { Fragment, useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import Card from './Card'
import axios from "axios";

function Home() {

  const [show, setShow] = useState(false);
  const [type, setType] = useState("primary");
  const [productList, setProductList] = useState([]);

  const config = localStorage.getItem('jwt') ? { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } } : {};
  const getData = async (e) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/product",
        config
      );

      if (res.data.status === "success") {
        setProductList(res.data.doc);
        // setBackup(res.data.doc)
      } else {
        ShowAlert("danger", "Data not available")
      }
    } catch (err) {
      if (err.response.data.error.statusCode === 401) {
        window.location.replace('http://localhost:3000');
      }
      ShowAlert("danger", err.response.data.message);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  function ShowAlert(type, message) {
    setType(type)
    setAlertMessage(message);
    setShow(true)
    window.setTimeout(() => {
      setShow(false);
      setAlertMessage("");
    }, 2000);
  }
  return (
    <Fragment>
      {show &&
        <div className='alert-parent'>
          <div className={`alert alert-${type}`} role="alert">
            {alertMessage}
            <div className="progress mt-2 bg-white">
              <div className={`progress-bar progress-bar-striped bg-${type} progress-bar-animated fill-2`} role="progressbar" aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      }
      <div className='p-3'>
        <div className='bg-white br-blue p-2'>
          <div className="row d-flex bd-highlight align-items-center flex-wrap p-2">
            <div className="bd-highlight col-lg-4 col-md-6 col-sm-12">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="bg-white input-group-text search-icon"><FiSearch /></span>
                </div>
                <input type="text" className="form-control search-box shadow-none" placeholder="Search for the art" />
              </div>
            </div>

            <div className='col-lg-8 col-md-6 col-sm-12 d-flex justify-content-end align-items-center flex-wrap'>
              <div className="p-2 bd-highlight">
                Price:
              </div>
              <div className="p-2 bd-highlight">
                <div className="dropdown">
                  <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Under ₹1,000
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href=".#">Under ₹1,000</a></li>
                    <li><a className="dropdown-item" href=".#">₹1,000 – ₹5,000</a></li>
                    <li><a className="dropdown-item" href=".#">₹5,000 – ₹10,000</a></li>
                    <li><a className="dropdown-item" href=".#">Above ₹10,000</a></li>
                  </ul>
                </div>
              </div>
              <div className="p-2 bd-highlight">
                Sort by:
              </div>
              <div className="p-2 bd-highlight">
                <div className="dropdown">
                  <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Best Seller
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href=".#">Best Seller</a></li>
                    <li><a className="dropdown-item" href=".#">New Arrivals</a></li>
                    <li><a className="dropdown-item" href=".#">Price: Low to High</a></li>
                    <li><a className="dropdown-item" href=".#">Price: High to Low</a></li>
                    <li><a className="dropdown-item" href=".#">Ratings: Low to High</a></li>
                    <li><a className="dropdown-item" href=".#">Ratings: High to Low</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="p-2 bd-highlight">
              <div className="dropdown">
                <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Color
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href=".#">Red</a></li>
                  <li><a className="dropdown-item" href=".#">Green</a></li>
                  <li><a className="dropdown-item" href=".#">Blue</a></li>
                  <li><a className="dropdown-item" href=".#">All</a></li>
                </ul>
              </div>
            </div> */}
          </div>

          <div className='row d-flex align-items-start'>
            {
              productList &&
              productList.map((product, id) => {
                return <Card key={id} data={product}/>
              })
            }
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Home