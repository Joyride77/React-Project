import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { heroslider } from '../data/menus'

const HeroSlider = () => {
    const heroslide = heroslider.map(data => {
        return (
            <div id="card">
                <div className='d-flex hero-slider align-items-center justify-content-center'>
                    <div className='slider-item d-flex justify-content-center align-items-center'>
                        <div className="row">
                            <div className="col">
                                <img src={data.img} alt={data.id} />
                            </div>
                            <div className="col slider-content">
                                <div>
                                    <h5>{data.title}</h5>
                                    <p>{data.quantity}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            <AliceCarousel disableDotsControls="true" responsive={{
                0: { items: 3 }
            }}>
                {heroslide}
            </AliceCarousel>
        </div>
    )
}

export default HeroSlider