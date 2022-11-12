import React, { Fragment } from 'react'
import CheckoutItem from './CheckoutItem'
import { Link } from 'react-router-dom'
import { MdPayment } from 'react-icons/md'

function Checkout() {
  return (
    <Fragment>
      <div className='p-3'>
        <h2>Checkout</h2>
        <hr />
        <div className='row p-2'>
          <div className='col-lg-6 col-md-6 col-sm-12 checkout-col shadow'>
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="table-responsive shadow rounded">
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
                    <td colSpan="2">Shipping Charge</td>
                    <td>+ ₹40</td>
                  </tr>
                  <tr>
                    <td colSpan="2">Discount</td>
                    <td>- ₹600</td>
                  </tr>
                  <tr>
                    <td className='fw-bold' colSpan="2">Total</td>
                    <td className='fw-bold'>₹1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
              <hr></hr>
            <div className='p-2 shadow rounded text-center'>
              <h4>Make payment using card</h4>
              <Link to={`/details/1`} className="btn btn-lg text-white m-1 bg-blue card-btn"><MdPayment /> Pay ₹1,000</Link>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Checkout