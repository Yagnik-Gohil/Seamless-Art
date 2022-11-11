import React, { Fragment } from 'react'
import { ReactComponent as Stars } from '../icons/Stars.svg'
import { BsCartPlusFill } from 'react-icons/bs'
import CustomerReview from './CustomerReview'

function ProductDetails() {
  return (
    <Fragment>
        <div className='p-3'>
        <h4>Hyper realistic lion pencil drawing</h4>
        <hr />
        <br></br>
        <div className='row'>
          <div className='d-flex justify-content-center align-items-center col-lg-5 col-md-5 col-sm-12 p-2'>
            <img className='img-fluid detail-image shadow img-thumbnail' src='https://cdn.dribbble.com/users/12006299/screenshots/18884584/media/2558c2f5d7edaf7e21d59c4520bf8888.jpg?compress=1&resize=400x300&vertical=top' alt='...'></img>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-12 p-2'>
              <h3 className='fw-bold m-0'>₹800</h3>
              <p className='m-0'>M.R.P.: <span className='text-decoration-line-through'>₹1,000</span>&nbsp;<span className='text-red'>(20% off)</span></p>
              <div className="progress star-div mt-1">
                <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{"width": "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                <Stars className='rating-star'/> 
              </div>
              <p>4.3 out of 5 <span className='fs-12'>(156 ratings)</span></p>
              <h4>About this item</h4>
              <ul>
                <li>
                  High Quality Digital Painting for a mesmerizing visual experience
                </li>
                <li>
                  Premium Décor - Pure Cotton Canvas tinted in Matte Earthly Colours
                </li>
                <li>
                  Total Size of Canvas: 85cm x 55cm x 2cm
                </li>
                <li>
                  Canvas is mounted on sturdy imported wooden frames; Fade Resistant Frames
                </li>
                <li>
                  Item Shape: Rectangular; Size Name: Framed Canvas Painting: 85cm X 55cm
                </li>
              </ul>

              <a href="#" className="btn text-white m-1 bg-blue card-btn shadow"><BsCartPlusFill /> Add to cart</a>
          </div>
        </div>
        <h4>Customer reviews</h4>
        <hr></hr>
        <br></br>
        <div className='d-flex justify-content-center'>
          <div className='review-div d-flex res-flex p-4 bg-light br-blue'>
            <CustomerReview/>
            <CustomerReview/>
            <CustomerReview/>
            <CustomerReview/>
            <CustomerReview/>
            <CustomerReview/>
            <CustomerReview/>
            <CustomerReview/>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </Fragment>
  )
}

export default ProductDetails