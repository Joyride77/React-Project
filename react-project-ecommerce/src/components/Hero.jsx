import React from 'react'
import { heroInfo } from '../data/menus'
import AliceCarousel from "react-alice-carousel";
import Button from 'react-bootstrap/Button';

const Hero = () => {
    const hero = heroInfo.map((data, index) => {
        return (
            <div key={index} className='row'>
                <div className="col hero-content d-flex flex-column">
                    <div className='w-25 mb-3'>
                        <h1>{data.title}</h1>
                    </div>
                    <div>
                        <Button className='shop-btn me-3 my-orange-btn'>Shop now</Button>{' '}
                        <Button className='view-btn my-orange-btn'>View more</Button>{' '}

                    </div>
                </div>
                <div className="col hero-image-content d-flex justify-content-center align-items-center">
                    <img className='hero-img' src={data.img} alt={data.id} />
                    <Button className='price-btn'>{data.price}</Button>{' '}
                </div>


            </div>
        )
    })

    return (
        <AliceCarousel disableButtonsControls="true">
            {hero}
        </AliceCarousel>
    )
}

export default Hero