import React from 'react'

const ShopDetails = (props) => {
    console.log("props", props.shopList);
    const shoplist = props.shopList.map((data, index) => {
        return (
            <div>

            </div>
        )
    })
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col"><h5>Product</h5></div>
                        <div className="col"><h5>Price</h5></div>
                        <div className="col"><h5>Quantity</h5></div>
                        <div className="col"><h5>Subtotal</h5></div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            {shoplist}
        </div>
    )
}

export default ShopDetails