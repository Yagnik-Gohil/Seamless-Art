import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BiDetail, BiTrash } from 'react-icons/bi'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

function CheckoutItem({ data, manageItems }) {
  const path = "http://localhost:8000/images/";
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });
  return (
    <Fragment>
      <div className="row py-2">
        <div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center'>
          <img src={path + data.image} className="checkout-image img-thumbnail shadow" alt="..." />
        </div>

        <div className='col-lg-8 col-md-6 col-sm-12 checkout-col-details'>
          <div>
            <p className='m-0'>{data.name}</p>
            <div className="card-text d-flex align-items-end flex-wrap">
              <h4 className='fw-bold m-0'>{formatter.format(data.price)}</h4>&nbsp;
              <span className='text-decoration-line-through'>{formatter.format(data.mrp)}</span>&nbsp;<span className='text-red'>(20% off)</span>
            </div>
            <p className='m-0'>Quantity: &nbsp; <AiOutlineMinusCircle className='hover-red' onClick={() => manageItems({ id: data._id, action: "remove" })} /> &nbsp; <span className='fw-bold'>{data.quantity}</span> &nbsp; <AiOutlinePlusCircle className='hover-red' onClick={() => manageItems({ id: data._id, action: "add" })} /></p>
            <Link to={`/details/${data._id}`} className="btn text-white m-1 bg-blue card-btn fs-12 shadow"><BiDetail /> View Details</Link>
            <button className="btn text-white m-1 bg-blue card-btn fs-12 shadow" onClick={() => manageItems({ id: data._id, action: "delete" })}><BiTrash /> Remove Item</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CheckoutItem