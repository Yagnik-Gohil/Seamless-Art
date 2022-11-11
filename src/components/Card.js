import React, { Fragment, useState } from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { ReactComponent as Stars } from '../icons/Stars.svg'
import { ReactComponent as BestSeller } from '../icons/BestSeller.svg'
import { Link } from 'react-router-dom'

function Card() {
  // const [isLiked, setIsLiked] = useState(false)

  // const handleLike = () => {
  //   if (isLiked) {
  //     setIsLiked(false)
  //   }
  //   else {
  //     setIsLiked(true)
  //   }

  // }
  return (
    <Fragment>
      <div className='col-lg-3 col-md-4 col-sm-6 py-3 d-flex justify-content-center aligh-items-center'>
        <div className="card p-0" style={{ "width": "18rem" }}>
          <BestSeller className='tag'/>
          <img src="https://cdn.dribbble.com/users/12006299/screenshots/18531159/media/63f6c2468b5c2f0c90da832f86dfaf51.jpg?compress=1&resize=400x300&vertical=top" className="card-img-top item-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hyper realistic lion pencil drawing</h5>
            <div className='d-flex align-items-center align-items-start flex-wrap'>
              <div className="progress star-div">
                <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{"width": "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                <Stars className='rating-star'/>
              </div>
              &nbsp; (11)
            </div>
            <div className="card-text d-flex align-items-end flex-wrap">
              <h3 className='fw-bold m-0'>₹800</h3>&nbsp;
              <span className='text-decoration-line-through'>₹1,000</span>&nbsp;(20% off)
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-wrap pb-3'>
            <a href="#" className="btn text-white m-1 bg-blue card-btn fs-12"><BsCartPlusFill /> Add to cart</a>
            <Link to={`/details/1`} className="btn text-white m-1 bg-blue card-btn fs-12"><BiDetail /> View Details</Link>
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