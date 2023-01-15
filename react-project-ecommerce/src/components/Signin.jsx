import React, { useState } from "react";
import logo from '../images/hero/logo.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CancelIcon from '@mui/icons-material/Cancel';


const SignIn = (props) => {
    const [show, setShow] = useState(false)
    // const [filteredList, setFilteredList] = useState([])
    const removeWishlist = (removeId) => {
        console.log("remove id: ", removeId)
        // const removedItem = props.addWishList.find((item) => item.id === id);
        // setFilteredList([...filteredList, removedItem])
        // props.addWishList.filter(a => !filteredList.some(b => a.id === b.id))
        props.setAddWishList(props.addWishList.filter((remove) => remove.id !== removeId));
    }

    // console.log('wishList items:', wishList);

    return (
        <div className='row d-flex align-items-center justify-content-between p-3'>
            <div className="col">
                <div className="row d-flex align-items-center justify-content-start">
                    <div className="col-3">
                        <img src={logo} alt="log" />
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
                        <p className='mb-0 fw-semibold'><PersonOutlineOutlinedIcon /> Sign In</p>
                    </div>
                    <div className="col-3 text-center wishlist-heart">
                        <p className='mb-0' onClick={() => { setShow(true) }}><FavoriteBorderIcon /></p>
                        <p className='wishlist-counter counter-style'>{props.addWishList.length}</p>
                        {show ? <div className='wishlist-sub-cat'>
                            <h5>Wishlist</h5>
                            {props.addWishList.map((col, index) => {
                                return (
                                    <div key={index} className="row d-flex align-items-center">
                                        <div className="col wishlist-img-section">
                                            <img className='wishlist-img' src={col.img} alt={col.alt} />
                                        </div>
                                        <div className="col text-start">
                                            <h5>{col.alt}</h5>
                                            <p>{col.price}</p>
                                        </div>
                                        <div className="col-2">
                                            <a onClick={() => removeWishlist(col.id)}><CancelIcon /></a>
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