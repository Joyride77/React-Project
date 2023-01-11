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

// MUI
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PopularProduct = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    ///Bootstrap MODAL
    // const handleClose = () => props.setShow(!props.show);
    // const handleShow = () => props.setShow(!props.show);

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
                                    <img className='shoppy' src={data.shop} alt={data.id} onClick={handleOpen} pointer />
                                </div>

                            </div>
                            <div>
                                <Modal
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <Box sx={style}>
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
                                    </Box>
                                </Modal>
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