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
  const [alertMessage, setAlertMessage] = useState();
  const [product, setProduct] = useState();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });

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

  function containsObject(id, cart) {
    var i;
    for (i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        return {is_Exist: true, index: i};
      }
    }
    return {is_Exist: false, index: -1};
  }
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let item = {
      _id: product._id,
      image: product.image,
      name: product.name,
      quantity: 1,
      price: product.price,
      mrp: product.mrp
    }
    if (cart === null || cart === undefined) {
      let cart = [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
      let status = containsObject(item._id, cart)
      if (status.is_Exist) {
        if(cart[status.index].quantity === 5 ){
          ShowAlert("warning", `The item "${product.name}" has a limit of 5 per customer.`)
          return;
        } else {
          cart[status.index].quantity = cart[status.index].quantity + 1;
        }
      } else {
        cart.push(item);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    ShowAlert("success","Item Added to cart")
  }

  function ShowAlert(type, message) {
    setType(type)
    setAlertMessage(message);
    setShow(true)
    window.setTimeout(() => {
      setShow(false);
      setAlertMessage("");
    }, 3000);
  }

  return (
    <Fragment>
      {show &&
        <div className='alert-parent'>
          <div className={`alert alert-${type}`} role="alert">
            {alertMessage}
            <div className="progress mt-2 bg-white">
              <div className={`progress-bar progress-bar-striped bg-${type} progress-bar-animated fill-3`} role="progressbar" aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="100"></div>
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
              <h3 className='fw-bold m-0'>{formatter.format(product.price)}</h3>
              <p className='m-0'>M.R.P.: <span className='text-decoration-line-through'>{formatter.format(product.mrp)}</span>&nbsp;<span className='text-red'>({product.discount}% off)</span></p>
              <div className="progress star-div mt-1">
                <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{"width": `${product.ratingsAverage}%`}} aria-valuenow={`${product.ratingsAverage}`} aria-valuemin="0" aria-valuemax="100"></div>
                <Stars className='rating-star' />
              </div>
              <p>{product.averageRatings} out of 5 <span className='fs-12'>({product.totalRatings} ratings)</span></p>
              {
                product.description.length > 0 &&
                <Fragment>
                  <h4>About this item</h4>
                  <ul>
                    {
                      product.description.map((data, id) => {
                        return <li key={id}>{data}</li>
                      })
                    }
                  </ul>
                </Fragment>
              }

              <button className="btn text-white m-1 bg-blue card-btn shadow" onClick={addToCart}><BsCartPlusFill /> Add to cart</button>
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