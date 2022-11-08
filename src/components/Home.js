import React, { Fragment } from 'react'
import { FiSearch } from 'react-icons/fi'
import Card from './Card'

function Home() {
  return (
    <Fragment>
      <div className='p-3'>
        <div className='bg-white br-blue p-2'>
          <div className="d-flex bd-highlight align-items-center flex-wrap">
            <div className="me-auto p-2 bd-highlight">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="bg-white input-group-text search-icon"><FiSearch /></span>
                </div>
                <input type="text" className="form-control search-box shadow-none" placeholder="Search for the art" />
              </div>
            </div>

            <div className="p-2 bd-highlight">
              Price:
            </div>
            <div className="p-2 bd-highlight">
              <div className="dropdown">
                <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Under ₹1,000
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href=".#">Under ₹1,000</a></li>
                  <li><a className="dropdown-item" href=".#">₹1,000 – ₹5,000</a></li>
                  <li><a className="dropdown-item" href=".#">₹5,000 – ₹10,000</a></li>
                  <li><a className="dropdown-item" href=".#">Above ₹10,000</a></li>
                </ul>
              </div>
            </div>
            <div className="p-2 bd-highlight">
              Sort by:
            </div>
            <div className="p-2 bd-highlight">
              <div className="dropdown">
                <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Featured
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href=".#">Featured</a></li>
                  <li><a className="dropdown-item" href=".#">Price: Low to High</a></li>
                  <li><a className="dropdown-item" href=".#">Price: High to Low</a></li>
                  <li><a className="dropdown-item" href=".#">Ratings: Low to High</a></li>
                  <li><a className="dropdown-item" href=".#">Ratings: High to Low</a></li>
                </ul>
              </div>
            </div>
            {/* <div className="p-2 bd-highlight">
              <div className="dropdown">
                <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Color
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href=".#">Red</a></li>
                  <li><a className="dropdown-item" href=".#">Green</a></li>
                  <li><a className="dropdown-item" href=".#">Blue</a></li>
                  <li><a className="dropdown-item" href=".#">All</a></li>
                </ul>
              </div>
            </div> */}
          </div>

          <div className='row d-flex align-items-start'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Home