import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as Stars } from '../icons/Stars.svg'
import { BsCartPlusFill } from 'react-icons/bs'
import CustomerReview from './CustomerReview'
import axios from "axios";

function ProductDetails() {

  const path = "http://localhost:8000/images/";
  let { id } = useParams();
  const [show, setShow] = useState(false);
  const [type, setType] = useState("primary");
  const [product, setProduct] = useState()

  const config = localStorage.getItem('jwt') ? { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } } : {};
  const getProduct = async (id) => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/product/" + id,
        config
      );
      if (res.data.status === "success") {
        setProduct(res.data.data);
      } else {
        ShowAlert("danger", "Data not available")
      }
    } catch (err) {
      ShowAlert("danger", err.response.data.message);
    }
  }
  
  useEffect(() => {
    getProduct(id)
  }, [id])

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
      {
        product &&
        <div className='p-3'>
        <h4>{product.name}</h4>
        <hr />
        <br></br>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-lg-5 col-md-5 col-sm-12 p-2'>
            <img className='img-fluid detail-image shadow img-thumbnail' src={path + product.image} alt='...'></img>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-12 p-2'>
            <h3 className='fw-bold m-0'>₹{product.price}</h3>
            <p className='m-0'>M.R.P.: <span className='text-decoration-line-through'>₹{product.mrp}</span>&nbsp;<span className='text-red'>({product.discount}% off)</span></p>
            <div className="progress star-div mt-1">
              <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{ "width": "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              <Stars className='rating-star' />
            </div>
            <p>{product.averageRatings} out of 5 <span className='fs-12'>({product.totalRatings} ratings)</span></p>
            {
              product.description.length > 0 &&
              <Fragment>
                <h4>About this item</h4>
                <ul>
                  {
                    product.description.map((data,id) => {
                      return <li key={id}>{data}</li>
                    })
                  }
                </ul>
              </Fragment>
            }

            <a href="#" className="btn text-white m-1 bg-blue card-btn shadow"><BsCartPlusFill /> Add to cart</a>
          </div>
        </div>
        <h4>Customer reviews</h4>
        <hr></hr>
        <br></br>
        <div className='d-flex justify-content-center'>
          <div className='review-div d-flex res-flex p-4 bg-light br-blue'>
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      }
    </Fragment>
  )
}

export default ProductDetails