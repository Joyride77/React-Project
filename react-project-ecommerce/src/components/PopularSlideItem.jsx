import React from 'react'
import heart from "../images/logo/heart.svg"
import { Stack, Rating } from '@mui/material';

const PopularSlideItem = (props) => {
    const { data } = props
    return (
        <div className="row popular-product p-2">
            <div className="row product-image">
                <div className="col pop-img-section">
                    <img className='pop-img' src={data.img} alt={data.alt} />
                    <img className='wishlist-icon' onClick={() => props.handleWishlist(data.id)} src={heart} alt="heart" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h6>{data.alt}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <p>{data.price}</p>
                    <Stack spacing={1}>
                        <Rating name="size-small" defaultValue={2} size="small" />
                    </Stack>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <img className='shoppy' src={data.shop} alt="shop" />
                </div>

            </div>
        </div>
    )
}

export default PopularSlideItem