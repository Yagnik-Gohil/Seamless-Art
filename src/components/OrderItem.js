import React, { Fragment } from 'react'
import { ReactComponent as Star } from '../icons/Star.svg'

function OrderItem() {
    return (
        <Fragment>
            <div className="accordion-body">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-row'>
                                <td>Hyper realistic lion pencil drawing</td>
                                <td>2</td>
                                <td>+ ₹800</td>
                                <td><button className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-toggle="modal" data-bs-target="#exampleModal5">Add Review</button></td>
                            </tr>
                            <tr className='table-row'>
                                <td>pencil drawing</td>
                                <td>2</td>
                                <td>+ ₹800</td>
                                <td><button className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-toggle="modal" data-bs-target="#exampleModal5">Add Review</button></td>
                            </tr>
                            <tr className='table-row'>
                                <td>Hyper realistic lion pencil drawing</td>
                                <td>1</td>
                                <td>+ ₹600</td>
                                <td><span className='btn bg-success text-white fs-12 rounded'>4.5 / 5</span> <button className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-toggle="modal" data-bs-target="#exampleModal6">Delete</button></td>
                            </tr>
                            <tr className='table-row'>
                                <td colSpan="2">Shipping Charge</td>
                                <td colSpan="2">+ ₹40</td>
                            </tr>
                            <tr className='table-row'>
                                <td colSpan="2">Discount</td>
                                <td colSpan="2">- ₹600</td>
                            </tr>
                            <tr className='table-row'>
                                <td className='fw-bold' colSpan="2">Total</td>
                                <td className='fw-bold' colSpan="2">₹1,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header mb-2">
                            <h5 className="modal-title" id="exampleModalLabel5">Add Review</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='p-4'>
                            <div className='d-flex justify-content-center'>
                                <div className="progress progress-star-div" style={{ "height": "2rem" }}>
                                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{ "width": "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div className='rating-stars d-flex flex-row'>
                                        <div>
                                            <Star className='single-rating-star'/>
                                        </div>
                                        <div>
                                            <Star className='single-rating-star'/>
                                        </div>
                                        <div>
                                            <Star className='single-rating-star'/>
                                        </div>
                                        <div>
                                            <Star className='single-rating-star'/>
                                        </div>
                                        <div>
                                            <Star className='single-rating-star'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Review</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <input type="password" name="name" className="form-control" placeholder="Amazing Artwork" />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-md-4 col-sm-12">
                                    <label className="col-form-label">Description</label>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <textarea type="text" name="name" className="form-control" rows="3" placeholder="Description"></textarea>
                                </div>
                            </div>

                            <div className="d-flex flex-column">
                                <div className='align-self-end'>
                                    <button type="button" className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-dismiss="modal">Add</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel6" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-center">
                        <div className="modal-header mb-2">
                            <h5 className="modal-title" id="exampleModalLabel6">Delete Review</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <h5 className='fw-bold'>Are you sure ?</h5>
                        <div>
                            <button type="button" className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-dismiss="modal">Yes</button>
                            <button type="button" className="btn text-white m-1 bg-blue card-btn fs-12" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderItem