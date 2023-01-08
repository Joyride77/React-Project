import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { popularData } from '../data/menus'

const PopularProduct = () => {
    const popular = popularData.map(populardata => {
        return (
            populardata.page.map(data => {
                return (
                    <div className="row p-4 m-4">

                        <div className="col">
                            <img src={data.img} alt={data.id} />
                        </div>
                        <div className="col">
                            <h6>{data.id}</h6>
                            <p>{data.price}</p>
                            {/* <img src={data.shop} alt={data.id} /> */}
                        </div>
                    </div>

                )
            })
        )
    })
    return (
        <div>
            <h2 className='m-4 fw-bold'>Popular products</h2>
            <AliceCarousel>
                {popular}
            </AliceCarousel>
        </div>
    )
}

export default PopularProduct