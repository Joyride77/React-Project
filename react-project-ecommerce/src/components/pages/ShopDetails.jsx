import React from 'react'

const ShopDetails = (props) => {
    console.log("props", props.shopList);
    const shoplist = props.shopList.map((data, index) => {
        return (
            <div>
                <h1>{data.productName}</h1>
            </div>
        )
    })
    return (
        <div className='container'>
            {shoplist}
        </div>
    )
}

export default ShopDetails