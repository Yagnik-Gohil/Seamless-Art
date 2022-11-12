import React, { Fragment } from 'react'

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
                                <td><a href="#" className="btn text-white m-1 bg-blue card-btn fs-12">Add Review</a></td>
                            </tr>
                            <tr className='table-row'>
                                <td>pencil drawing</td>
                                <td>2</td>
                                <td>+ ₹800</td>
                                <td><a href="#" className="btn text-white m-1 bg-blue card-btn fs-12">Add Review</a></td>
                            </tr>
                            <tr className='table-row'>
                                <td>Hyper realistic lion pencil drawing</td>
                                <td>1</td>
                                <td>+ ₹600</td>
                                <td><span className='btn bg-success text-white fs-12 rounded'>4.5 / 5</span> <a href="#" className="btn text-white m-1 bg-blue card-btn fs-12">Delete</a></td>
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
        </Fragment>
    )
}

export default OrderItem