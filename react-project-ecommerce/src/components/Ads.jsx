import React from 'react'
import Button from 'react-bootstrap/Button';

const Ads = () => {
    return (
        <div className='row'>
            <div className="col"></div>
            <div className="col d-flex justify-content-center align-items-center flex-column">
                <Button className='mb-3 mt-4 my-orange-btn' variant="primary" size="lg" active>
                    New laptop
                </Button>{' '}
                <h1>Sale up to 50% off</h1>
                <h5 className='text-light mb-3'>12 inch hd display</h5>
                <Button className='mt-4 my-orange-btn' variant="primary" size="lg" active>
                    Shop now
                </Button>{' '}
            </div>
        </div>
    )
}

export default Ads