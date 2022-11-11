import React, { Fragment } from 'react'

function Account() {
    return (
        <Fragment>
            <div className='p-3'>
                <h2>My Account</h2>
                <hr />
                <div className='d-flex align-items-start flex-wrap'>
                    <div className='bg-light p-3 mw-fc shadow m-2'>
                        <p><span className='fw-bold'>Name:</span> Yagnik Gohil</p>
                        <p><span className='fw-bold'>Email:</span> gohilyagnik3@gmail.com</p>
                        <p className='m-0 fw-bold'>Shipping Address:</p>
                        <p className='m-0'>Street 1</p>
                        <p className='m-0'>City - PIN: 1234</p>
                        <p>State, Country</p>
                        <div className="d-flex flex-row-reverse">
                            <a href="#" className="btn text-white m-1 bg-blue card-btn fs-12">Update</a>
                        </div>
                    </div>
                    <div className='bg-light p-3 mw-fc shadow m-2'>
                        <div className="d-flex flex-row-reverse">
                            <a href="#" className="btn text-white m-1 bg-blue card-btn fs-12">Update Password</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Account