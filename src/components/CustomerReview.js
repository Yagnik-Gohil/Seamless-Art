import React, { Fragment } from 'react'
import { ReactComponent as Stars } from '../icons/Stars.svg'

function CustomerReview() {
  return (
    <Fragment>
      <div className='shadow review-card bg-white'>
        <div className='p-3'>
          <div className='d-flex align-items-center pb-2'>
            <img className='customer-image' src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" alt="..."></img>
            <p className='m-0 px-2'>Yagnik Gohil</p>
          </div>
          <div className='d-flex align-items-start flex-wrap'>
              <div className="progress star-div">
              <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{"width": "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              <Stars className='rating-star'/>
              </div>
              <p className='px-2 m-0 fw-bold'>Excellent canvas print for home</p>
          </div>
          <p className='m-0'>
          Received the product as expected, print quality superb and the color choosen for painting really very decent. Framed in the local shop and fixed in our Hall.
          Received the product as expected, print quality superb and the color choosen for painting really very decent. Framed in the local shop and fixed in our Hall.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default CustomerReview