import React from 'react'
import speakerBig from "../images/hero/speakerBig.svg";
import controller from "../images/popular-products/controller.svg";
import laptop from "../images/popular-products/laptop.svg";

const RecommendedItems = () => {
    return (
        <div className="row recommended-items d-flex align-items-center">
            <div className="col-7 big-content left">
                <div className="row">
                    <div className="col-7">
                        <img src={speakerBig} alt="speaker" />
                    </div>
                    <div className="col d-flex justify-content-center flex-column">
                        <h5>JBL bar 2.1 deep bass</h5>
                        <p className='fw-semibold'>$11,70</p>
                    </div>
                </div>
            </div>
            <div className="col-5 right pe-0">
                <div className="col-12 small-content d-flex align-items-center justify-content-center mb-3">
                    <div className="row">
                        <div className="col-8">
                            <img src={controller} alt="speaker" />
                        </div>
                        <div className="col d-flex justify-content-center flex-column">
                            <h5>Controller</h5>
                            <p className='fw-semibold'>$11,70</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 small-content d-flex align-items-center justify-content-center">
                    <div className="row">
                        <div className="col-8">
                            <img src={laptop} alt="speaker" />
                        </div>
                        <div className="col d-flex justify-content-center flex-column">
                            <h5>Laptop</h5>
                            <p className='fw-semibold'>$11,70</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedItems