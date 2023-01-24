import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CancelIcon from '@mui/icons-material/Cancel';
import { Outlet, Link } from 'react-router-dom'


const ShopDetails = (props) => {
    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    const shoplist = props.shopList.map((data, index) => {
        return (
            <div id='added-cart-list' className='row d-flex align-items-center my-2'>
                <div className="col">
                    <div className="row">
                        <div className="col-6 cart-img-container">
                            <img className='cart-img' src={data.productImage} alt={data.productName} />
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center">
                            <h5>{data.productName}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <h5>{data.productPrice}</h5>
                </div>

                <div className="col-2">Quantity</div>

                <div className="col-1">{data.productPrice}</div>
                <div className="col-1">
                    <p className='cart-remove-btn' onClick={() =>
                        props.setShopList(props.shopList.filter((wish) =>
                            wish.productId !== data.productId
                        ))
                    }><CancelIcon /></p>
                </div>
                <hr className='mt-4' />
            </div>
        )
    })
    return (
        <div id='cart-list' className='container mt-3 mb-5'>
            <div className="row">
                <div className="col-8">
                    <div className="row mt-3 my-blue-background">
                        <div className="col"><h5>Product</h5></div>
                        <div className="col-2"><h5>Price</h5></div>
                        <div className="col-2"><h5>Quantity</h5></div>
                        <div className="col-2"><h5>Subtotal</h5></div>
                    </div>
                    <div>
                        {shoplist}
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <Link to={"/"} >
                            <button className='cart-btn cart-btn-orange my-orange-btn'>Continue shopping</button>
                        </Link>
                        <Outlet />
                        <button className='cart-btn cart-btn-grey my-grey-btn'>Update cart</button>
                        <button className='cart-btn cart-btn-red my-grey-btn'>Clear cart</button>
                    </div>
                </div>
                <div className="col-4 my-3">
                    <h5 className='my-blue-background text-center mb-4'>Cart total</h5>
                    <div className='d-flex justify-content-between px-4'>
                        <h5>Subtotal</h5>
                        <h5>$ 23,20</h5>
                    </div>
                    <hr />
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: '100%' }}
                        className="mx-3 my-4"
                    >
                        <InputBase
                            sx={{ ml: 3, flex: 1 }}
                            placeholder="Enter coupon code"
                        />
                        <IconButton type="button" sx={{ p: '10px', fontSize: '1rem' }} aria-label="search">
                            Apply
                        </IconButton>
                    </Paper>
                    <hr />
                    <Box sx={{ minWidth: 120 }} className="rounded-5 mx-3 my-4">
                        <FormControl fullWidth className="rounded-5">
                            <InputLabel id="demo-simple-select-label">County</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={country}
                                label="County"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Mongolia</MenuItem>
                                <MenuItem value={20}>Japanese</MenuItem>
                                <MenuItem value={30}>Russia</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <div className='d-flex justify-content-between px-4 mb-4'>
                        <h5>Total amount</h5>
                        <h5>$ 23,20</h5>
                    </div>
                    <button className='signin-register-btn my-orange-btn'>Proceed to ckeckout</button>
                </div>
            </div>

        </div>
    )
}

export default ShopDetails