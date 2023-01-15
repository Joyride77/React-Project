import AliceCarousel from 'react-alice-carousel'
import { popularData } from '../data/menus'
import * as React from 'react';
import { useState } from 'react';
import PopularSlideItem from './PopularSlideItem';



const PopularProduct = (props) => {
    const onSlideChanged = (e) => {
        console.log(e)
    }

    ///Bootstrap MODAL
    // const handleClose = () => props.setShow(!props.show);
    // const handleShow = () => props.setShow(!props.show);
    const popular = popularData.map((populardata, index) => {
        return (
            <div id='card' key={index}>
                {populardata.page.map((data, idx) => {
                    return (
                        <PopularSlideItem key={`${index}${idx}`} data={data} handleWishlist={props.handleWishlist} />
                    )
                })}
            </div>
        )
    })
    return (
        <div>
            <h2 className='my-5 fw-bold'>Popular products</h2>
            <AliceCarousel disableButtonsControls="true" onSlideChanged={onSlideChanged}>
                {popular}
            </AliceCarousel>
        </div>
    )
}

export default PopularProduct