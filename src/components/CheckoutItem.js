import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BiDetail, BiTrash } from 'react-icons/bi'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

function CheckoutItem() {
  return (
    <Fragment>
            <div className="d-flex align-items-start py-2">
                <img src="https://cdn.dribbble.com/users/12006299/screenshots/18884584/media/2558c2f5d7edaf7e21d59c4520bf8888.jpg?compress=1&resize=400x300&vertical=top" className="checkout-image img-thumbnail shadow" alt="..." />
                <div className='px-4'>
                    <p className='m-0'>Hyper realistic lion pencil drawing</p>
                    <div className="card-text d-flex align-items-end flex-wrap">
                      <h4 className='fw-bold m-0'>₹800</h4>&nbsp;
                      <span className='text-decoration-line-through'>₹1,000</span>&nbsp;(20% off)
                    </div>
                    <p className='m-0'>Quantity: &nbsp; <AiOutlineMinusCircle className='hover-red'/> &nbsp; <span className='fw-bold'>1</span> &nbsp; <AiOutlinePlusCircle className='hover-red'/></p>
                    <Link to={`/details/1`} className="btn text-white m-1 bg-blue card-btn fs-12 shadow"><BiDetail /> View Details</Link>
                    <Link to={`/details/1`} className="btn text-white m-1 bg-blue card-btn fs-12 shadow"><BiTrash /> Remove Item</Link>
                </div>
            </div>
        </Fragment>
  )
}

export default CheckoutItem