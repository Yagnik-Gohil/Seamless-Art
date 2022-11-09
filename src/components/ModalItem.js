import React, { Fragment } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

function ModalItem() {
    return (
        <Fragment>
            <div className="modal-body d-flex align-items-start py-2">
                <img src="https://cdn.dribbble.com/users/12006299/screenshots/18884584/media/2558c2f5d7edaf7e21d59c4520bf8888.jpg?compress=1&resize=400x300&vertical=top" className="modal-image" alt="..." />
                <div className='px-2'>
                    <p className='m-0'>Hyper realistic lion pencil drawing</p>
                    <p className='m-0'>Quantity: &nbsp; <AiOutlineMinusCircle className='hover-red'/> &nbsp; <span className='fw-bold'>1</span> &nbsp; <AiOutlinePlusCircle className='hover-red'/></p>
                    <p className='m-0'>Price: ₹800</p>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalItem