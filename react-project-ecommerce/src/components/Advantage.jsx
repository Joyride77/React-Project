import React from 'react'
import boxLogo from '../images/logo/boxLogo.svg'
import crownLogo from '../images/logo/crownLogo.svg'
import warrantyLogo from '../images/logo/warrantyLogo.svg'

const Advantage = () => {
    return (
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col me-5">
                <div className="row">
                    <div className="col-4">
                        <img src={boxLogo} alt="Free defivery" />
                    </div>
                    <div className="col">
                        <h5 className='fw-bold'>Free delivery</h5>
                        <p className='fw-semibold'>on order above $50,00</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col-4">
                        <img src={crownLogo} alt="Best quality " />
                    </div>
                    <div className="col">
                        <h5 className='fw-bold'>Best quality </h5>
                        <p className='fw-semibold'>best quality in low price</p>
                    </div>
                </div>
            </div>
            <div className="col ms-5">
                <div className="row">
                    <div className="col-4">
                        <img src={warrantyLogo} alt="1 year warranty" />
                    </div>
                    <div className="col">
                        <h5 className='fw-bold'>1 year warranty</h5>
                        <p className='fw-semibold'>Avaliable warranty</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage