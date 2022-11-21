import React, { Fragment, useEffect, useState } from 'react'
import CheckoutItem from './CheckoutItem'
import { Link } from 'react-router-dom'
import { MdPayment } from 'react-icons/md'

function Checkout() {

  const [show, setShow] = useState(false);
  const [type, setType] = useState("primary");
  const [alertMessage, setAlertMessage] = useState()
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    setCart(cart)
  }

  function getIndex(id) {
    var i;
    for (i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        return i;
      }
    }
    return -1;
  }

  const manageItems = (data) => {
    let index = getIndex(data.id)
    if (data.action === "add") {
      if (cart[index].quantity === 5) {
        ShowAlert("warning", `The item "${cart[index].name}" has a limit of 5 per customer.`)
        return;
      } else {
        cart[index].quantity = cart[index].quantity + 1
      }
    } else if (data.action === "remove") {
      if (cart[index].quantity === 1) {
        cart.splice(index, 1)
      } else {
        cart[index].quantity = cart[index].quantity - 1
      }
    } else {
      cart.splice(index, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    getCart();
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });
  
  function ShowAlert(type, message) {
    setType(type)
    setAlertMessage(message);
    setShow(true)
    window.setTimeout(() => {
      setShow(false);
      setAlertMessage("");
    }, 3000);
  }

  return (
    <Fragment>
      {
        show &&
        <div className='alert-parent'>
          <div className={`alert alert-${type}`} role="alert">
            {alertMessage}
            <div className="progress mt-2 bg-white">
              <div className={`progress-bar progress-bar-striped bg-${type} progress-bar-animated fill-3`} role="progressbar" aria-label="Animated striped example" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      }
      <div className='p-3'>
        <h2>Checkout</h2>
        <hr />
        {
          cart && cart.length !== 0 &&
          <div className='row p-2'>
            <div className='col-lg-6 col-md-6 col-sm-12 checkout-col shadow mt-2'>
              {
                cart.map((product, id) => {
                  return <CheckoutItem key={id} data={product} manageItems={manageItems} />
                })
              }
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-2'>
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
                    {
                      cart.map((product, id) => {
                        return (<tr key={id}>
                          <td>{product.name}</td>
                          <td>{product.quantity}</td>
                          <td>+ {formatter.format(product.quantity * product.price)}</td>
                        </tr>)
                      })
                    }

                    <tr>
                      <td colSpan="2">Shipping Charge</td>
                      <td>+ {formatter.format(50)}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Extra Discount</td>
                      <td>- {formatter.format(100 * cart.length)}</td>
                    </tr>
                    <tr>
                      <td className='fw-bold' colSpan="2">Total</td>
                      <td className='fw-bold'>{formatter.format(cart.reduce((sum, { price, quantity }) => sum + price * quantity, 50 - 100 * cart.length))}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr></hr>
              <div className='p-2 shadow rounded text-center'>
                <h4>Make payment using card</h4>
                <Link to={`/details/1`} className="btn btn-lg text-white m-1 bg-blue card-btn"><MdPayment /> Pay {formatter.format(cart.reduce((sum, { price, quantity }) => sum + price * quantity, 50 - 100 * cart.length))}</Link>
              </div>
            </div>
          </div>
        }
        {
          (!cart || cart.length === 0) &&
          <div className='row p-2'>
            <div className='col text-center'>
              <h2>Cart is empty!</h2>
              <Link to={`/home`} className="btn btn-lg text-white m-1 bg-blue card-btn">Buy Now</Link>
            </div>
          </div>
        }
      </div>
    </Fragment>
  )
}

export default Checkout