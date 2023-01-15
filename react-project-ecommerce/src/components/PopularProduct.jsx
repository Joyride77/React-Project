// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import AliceCarousel from 'react-alice-carousel'
import { popularData } from '../data/menus'
// import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import Example from '../Example'
import heart from "../images/logo/heart.svg"

// MUI
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import PopularSlideItem from './PopularSlideItem';



const PopularProduct = (props) => {


    const [active, setActive] = useState(0);
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