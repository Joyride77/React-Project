import React, { useState } from "react";
import logo from '../images/hero/logo.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CancelIcon from '@mui/icons-material/Cancel';

import { Outlet, Link } from 'react-router-dom'


const SignIn = (props) => {
    const [show, setShow] = useState(false)
    return (
        <div className='row d-flex align-items-center justify-content-between p-3'>
            <div className="col">
                <div className="row d-flex align-items-center justify-content-start">
                    <div className="col-3">
                        <Link to={"/"}>
                            <img src={logo} alt="log" />
                        </Link>
                    </div>
                    <div id='search-hero' className="col-6">
                        <InputGroup>
                            <Form.Control
                                placeholder="Search any things"
                                aria-label="Search any things"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2" className="my-orange-btn">
                                Search
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="row">
                    <div className="col-6 text-end">
                        <Link to={"/signin"}>
                            <p className='mb-0 fw-semibold'><PersonOutlineOutlinedIcon /> Sign In</p>
                        </Link>
                        <Outlet />
                    </div>
                    <div className="col-3 text-center wishlist-heart">
                        <p className='mb-0' onClick={() => { setShow(true) }}><FavoriteBorderIcon /></p>
                        <p className='wishlist-counter counter-style'>{props.addWishList.length}</p>
                        {show ? <div className='wishlist-sub-cat'>
                            <h5>Wishlist</h5>
                            {props.addWishList.map((w, index) => {
                                return (
                                    <div key={index} className="row d-flex align-items-center">


                                        <div className="col wishlist-img-section">
                                            <img className='wishlist-img' src={w.productImage} alt={w.productName} />
                                        </div>
                                        <div className="col text-start">
                                            <h5>{w.productName}</h5>
                                            <p>{w.productPrice}</p>
                                        </div>
                                        <div className="col-2">
                                            <p onClick={() =>
                                                props.setAddWishList(props.addWishList.filter((wish) =>
                                                    wish.productId !== w.productId
                                                ))
                                            }><CancelIcon /></p>
                                        </div>
                                    </div>
                                )
                            })
                            }
                            <button className='close-button my-orange-btn' onClick={() => { setShow(false) }}>Close</button>
                        </div> : ""}
                    </div>
                    <div className="col-3 text-center shop-cart">
                        <p className='mb-0'><ShoppingCartOutlinedIcon /></p>
                        <p className='shop-counter counter-style'>0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn