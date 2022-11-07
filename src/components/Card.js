import React, { Fragment, useState } from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'

function Card() {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false)
    }
    else {
      setIsLiked(true)
    }

  }
  return (
    <Fragment>
      <div className='col-lg-3 col-md-4 col-sm-6 pt-3 d-flex justify-content-center aligh-items-center'>
        <div className="card p-2" style={{ "width": "18rem" }}>
          <img src="https://m.media-amazon.com/images/I/911j2oCRNpL._AC_UL480_QL65_.jpg" className="card-img-top item-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hyper realistic lion pencil drawing</h5>
            <div className="card-text d-flex align-items-end flex-wrap">
              <h3 className='fw-bold m-0'>₹800</h3>&nbsp;
              <span className='text-decoration-line-through'>₹1,000</span>&nbsp;(20% off)
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-wrap'>
            <a href="#" className="btn text-white m-1 bg-blue card-btn fs-12"><BsCartPlusFill /> Add to cart</a>
            <a href="#" className="btn text-white m-1 bg-blue card-btn fs-12"><BiDetail /> View Details</a>
            {
              isLiked ?
              <span className='p-2'><FcLike onClick={handleLike}/></span> :
              <span className='p-2'><FcLikePlaceholder onClick={handleLike}/></span>
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Card