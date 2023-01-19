import React from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Rating } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import googleLogo from "../../images/logo/googleLogo.svg"
import facebookLogo from "../../images/logo/facebookLogo.svg"
import whatsappLogo from "../../images/logo/whatsappLogo.svg"

const ProductDetails = (props) => {
    const { id } = useParams()
    const product = props.listOfPopularData.filter(data => data.id == id)

    const random = Math.floor(Math.random() * 50 + 15);
    // function generateVoteCount() {
    //     return Math.floor(Math.random() * 50 + 15);
    // }
    return (
        <div className='container'>
            {product &&
                product.map((w, index) => {
                    return (
                        <div key={index} id='product-details-container'>
                            <div className="row mt-5 mb-3 me-3">
                                <div className="col product-img-container">
                                    <img className='product-img' src={w.img} alt={w.alt} />
                                </div>
                                <div className="col ms-3">
                                    <h4>{w.alt}</h4>
                                    <h4>{w.price}</h4>
                                    <Stack spacing={1} className="d-flex flex-row my-4">
                                        <Rating name="size-small" defaultValue={2} size="medium" />
                                        <p className='my-0 ms-4'>No reviews</p>
                                    </Stack>
                                    <h6>Availability: <span className='text-success'><CheckIcon /> In stock</span></h6>
                                    <p>Hurry up! only {random} product left in stock!</p>
                                    <hr />
                                    <h6 className='my-4'>Size :
                                        <span className='grey-box'>30</span>
                                        <span className='grey-box'>56</span>
                                        <span className='grey-box'>42</span>
                                        <span className='grey-box'>48</span>
                                    </h6>
                                    <div className='d-flex justify-content-start align-items-center my-action-btn'>
                                        <button className='my-orange-btn me-4'>Add to cart</button>
                                        <button className='my-orange-btn me-4'>Buy it now</button>
                                        <FavoriteBorderIcon className='heart' />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col me-3">
                                    <div className="row">
                                        <div className="col product-sub-img-container me-3">
                                            <img className='product-sub-img' src={w.img} alt={w.alt} />
                                        </div>
                                        <div className="col product-sub-img-container">
                                            <img className='product-sub-img' src={w.img} alt={w.alt} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col border-top py-3 ms-3">
                                    <h6>Sku: 01133-9-9</h6>
                                    <h6>Category: 20% off, 49% off Alex remote</h6>
                                    <h6>Share:
                                        <img className='mx-3' src={googleLogo} alt="logo" />
                                        <img className='mx-3' src={facebookLogo} alt="logo" />
                                        <img className='mx-3' src={whatsappLogo} alt="logo" />
                                    </h6>
                                </div>

                            </div>
                            <div className='d-flex justify-content-center align-items-center my-5'>
                                <button className='my-review-btn me-4'>Description</button>
                                <button className='my-description-btn me-4'>Reviews</button>
                            </div>
                            <div className='customer-reviews mb-5'>
                                <h5>Customer reviews</h5>
                                <h6>No reviews yet</h6>
                                <button>Write a review</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductDetails