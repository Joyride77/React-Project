import React from 'react'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Contact = () => {
    return (
        <div id='contact' className="row d-flex justify-content-between align-items-center">
            <div className="col-6">
                <p className='mb-0 p-3'>Need help? Call us: (+98) 0234 456 789</p>
            </div>
            <div className="col-6 text-end">
                <div className="row d-flex justify-content-end">
                    <div className="col-3 p-2">
                        <p className='mb-0'><PlaceOutlinedIcon /> Our store</p>
                    </div>
                    <div className="col-5 p-2">
                        <p className='mb-0'><LocalShippingOutlinedIcon /> Track your order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact