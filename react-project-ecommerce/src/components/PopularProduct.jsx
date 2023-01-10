import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { popularData } from '../data/menus'
// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';

const PopularProduct = () => {
    const popular = popularData.map(populardata => {
        return (
            <div id='card'>
                {populardata.page.map(data => {
                    const value = 3.5;
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
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{data.price}</p>
                                    <Stack spacing={1}>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </Stack>
                                </div>
                                <div className="col d-flex justify-content-end">
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