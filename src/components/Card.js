import React, { Fragment, useState } from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { ReactComponent as Stars } from '../icons/Stars.svg'
import { ReactComponent as BestSeller } from '../icons/BestSeller.svg'
import { Link } from 'react-router-dom'

function Card({data}) {
  const path = "http://localhost:8000/images/";
  // const [isLiked, setIsLiked] = useState(false)

  // const handleLike = () => {
  //   if (isLiked) {
  //     setIsLiked(false)
  //   }
  //   else {
  //     setIsLiked(true)
  //   }

  // }
  // console.log(data)
  return (
    <Fragment>
      <div className='col-lg-3 col-md-4 col-sm-6 py-3 d-flex justify-content-center aligh-items-center'>
        <div className="card p-0 shadow" style={{ "width": "18rem" }}>
          { data.isBestSeller && <BestSeller className='tag'/>}
          <img src={ path + data.image } className="card-img-top item-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <div className='d-flex align-items-center align-items-start flex-wrap'>
              <div className="progress star-div">
                <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{"width": `${data.ratingsAverage}%`}} aria-valuenow={`${data.ratingsAverage}`} aria-valuemin="0" aria-valuemax="100"></div>
                <Stars className='rating-star'/>
              </div>
              &nbsp; ({data.totalRatings})
            </div>
            <div className="card-text d-flex align-items-end flex-wrap">
              <h3 className='fw-bold m-0'>₹{data.price}</h3>&nbsp;
              <span className='text-decoration-line-through'>₹{data.mrp}</span>&nbsp;({data.discount}% off)
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center flex-wrap pb-3'>
            <a href="/" className="btn text-white m-1 bg-blue card-btn fs-12"><BsCartPlusFill /> Add to cart</a>
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