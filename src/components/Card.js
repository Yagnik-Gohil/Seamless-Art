import React, { Fragment, useState } from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { ReactComponent as Stars } from '../icons/Stars.svg'
import { ReactComponent as BestSeller } from '../icons/BestSeller.svg'
import { Link } from 'react-router-dom'

function Card({ data, ShowAlert }) {
  const path = "http://localhost:8000/images/";

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });

  function containsObject(id, cart) {
    var i;
    for (i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        return { is_Exist: true, index: i };
      }
    }
    return { is_Exist: false, index: -1 };
  }
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let item = {
      _id: data._id,
      image: data.image,
      name: data.name,
      quantity: 1,
      price: data.price,
      mrp: data.mrp
    }
    if (cart === null || cart === undefined) {
      let cart = [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    else {
      let status = containsObject(item._id, cart)
      if (status.is_Exist) {
        if (cart[status.index].quantity === 5) {
          ShowAlert("warning", `The item "${data.name}" has a limit of 5 per customer.`)
          return;
        } else {
          cart[status.index].quantity = cart[status.index].quantity + 1;
        }
      } else {
        cart.push(item);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    ShowAlert("success", "Item Added to cart")
  }
  return (
    <Fragment>
      <div className='col-lg-3 col-md-4 col-sm-6 py-3 d-flex justify-content-center aligh-items-center'>
        <div className="card p-0 shadow" style={{ "width": "18rem" }}>
          {data.isBestSeller && <BestSeller className='tag' />}
          <img src={path + data.image} className="card-img-top item-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <div className='d-flex align-items-center align-items-start flex-wrap'>
              <div className="progress star-div">
                <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{ "width": `${data.ratingsAverage}%` }} aria-valuenow={`${data.ratingsAverage}`} aria-valuemin="0" aria-valuemax="100"></div>
                <Stars className='rating-star' />
              </div>
              <p className='m-0'>&nbsp; ({data.totalRatings}) {data.quantity === 0 && <span className='fs-12 text-red'>&nbsp; Out Of Stock!</span>}</p>
            </div>
            <div className="card-text d-flex align-items-end flex-wrap">
              <h3 className='fw-bold m-0'>{formatter.format(data.price)}</h3> &nbsp; &nbsp;
              <span className='text-decoration-line-through'>{formatter.format(data.mrp)}</span> &nbsp; <span className='text-red'>({data.discount}% off)</span>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-wrap pb-3'>
            {
              data.quantity === 0 ?
                <button className="btn text-white m-1 bg-blue card-btn fs-12"><BsCartPlusFill /> Out Of Stock</button>
                :
                <button className="btn text-white m-1 bg-blue card-btn fs-12" onClick={addToCart}><BsCartPlusFill /> Add to cart</button>
            }

            <Link to={`/details/${data._id}`} className="btn text-white m-1 bg-blue card-btn fs-12"><BiDetail /> View Details</Link>
            {/* {
              isLiked ?
              <span className='p-2'><FcLike onClick={handleLike}/></span> :
              <span className='p-2'><FcLikePlaceholder onClick={handleLike}/></span>
            } */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Card