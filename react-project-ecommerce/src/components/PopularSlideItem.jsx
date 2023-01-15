import React, { useState } from 'react'
import heart from "../images/logo/heart.svg"
// MUI
import { Box, Modal, Stack, Rating } from '@mui/material';

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

const PopularSlideItem = (props) => {
    const { data } = props
    const [open, setOpen] = useState(false);
    const handleOpen = () => (setOpen(true))
    const handleClose = () => setOpen(false);
    return (
        <div className="row popular-product p-2">
            <div className="row product-image">
                <div className="col pop-img-section">
                    <img className='pop-img' src={data.img} alt={data.alt} onClick={handleOpen} />
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
            <div>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <div className="row product-image">
                            <div className="col">
                                <img src={data.img} alt={data.alt} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h6>{data.alt}</h6>
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
                                <img className='shoppy my-orange-btn' src={data.shop} alt={data.alt} />
                            </div>

                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default PopularSlideItem