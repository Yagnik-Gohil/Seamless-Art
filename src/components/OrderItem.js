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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hyper realistic lion pencil drawing</td>
                                <td>2</td>
                                <td>+ ₹800</td>
                            </tr>
                            <tr>
                                <td>pencil drawing</td>
                                <td>2</td>
                                <td>+ ₹800</td>
                            </tr>
                            <tr>
                                <td>Hyper realistic lion pencil drawing</td>
                                <td>1</td>
                                <td>+ ₹600</td>
                            </tr>
                            <tr>
                                <td colspan="2">Shipping Charge</td>
                                <td>+ ₹40</td>
                            </tr>
                            <tr>
                                <td colspan="2">Discount</td>
                                <td>- ₹600</td>
                            </tr>
                            <tr>
                                <td className='fw-bold' colspan="2">Total</td>
                                <td className='fw-bold'>₹1,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default OrderItem