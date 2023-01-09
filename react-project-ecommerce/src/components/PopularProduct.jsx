import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { popularData } from '../data/menus'

const PopularProduct = () => {
    const popular = popularData.map(populardata => {
        return (
            <div id='card'>
                {populardata.page.map(data => {
                    return (
                        <div className="row popular-product p-2">
                            <div className="row product-image">
                                <div className="col">
                                    <img src={data.img} alt={data.id} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>{data.id}</h6>
                                    <p>{data.price}</p>
                                </div>
                                <div className="col-4 d-flex justify-content-end">
                                    <img className='shoppy' src={data.shop} alt={data.id} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    })
    return (
        <div>
            <h2 className='my-5 fw-bold'>Popular products</h2>
            <AliceCarousel disableButtonsControls="true">
                {popular}
            </AliceCarousel>
        </div>
    )
}

export default PopularProduct