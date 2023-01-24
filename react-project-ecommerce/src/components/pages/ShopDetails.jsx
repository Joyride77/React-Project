import React from 'react'

const ShopDetails = (props) => {
    console.log("props", props.shopList);
    const shoplist = props.shopList.map((data, index) => {
        return (
            <div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <img src={data.productImage} alt={data.productName} />
                        </div>
                        <div className="col">
                            <h5>{data.productName}</h5>
                            <h5>Color: Black</h5>
                            <h5>Size: 30</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h5>{data.productPrice}</h5>
                </div>
                <div className="col">1</div>
                <div className="col">2</div>
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
                    <div className="row">
                        {shoplist}
                    </div>
                </div>
                <div className="col"></div>
            </div>

        </div>
    )
}

export default ShopDetails