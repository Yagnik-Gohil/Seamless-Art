import React, { Fragment } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

function ModalItem({ data, manageItems }) {
    const path = "http://localhost:8000/images/";
    return (
        <Fragment>
            <div className="modal-body d-flex align-items-start py-2">
                <img src={path + data.image} className="modal-image" alt="..." />
                <div className='px-2'>
                    <p className='m-0'>{data.name}</p>
                    <p className='m-0'>Quantity: &nbsp; <AiOutlineMinusCircle className='hover-red' onClick={()=>manageItems({id:data._id,action:"remove"})}/> &nbsp; <span className='fw-bold'>{data.quantity}</span> &nbsp; <AiOutlinePlusCircle className='hover-red' onClick={() => manageItems({id:data._id,action:"add"})}/></p>
                    <p className='m-0'>Price: ₹{data.price} per Item</p>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalItem