import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PopularSlideItem = (props) => {
    const [like, setLike] = useState(false)
    const { data } = props
    return (
        <div className="row popular-product p-2">
            <div className="row product-image">
                <div className="col pop-img-section">
                    <img className='pop-img' src={data.img} alt={data.alt} />
                    <FavoriteBorderIcon className='wishlist-icon-hole' onClick={() => {
                        setLike(true);
                        const likedProduct = {
                            productId: data.id,
                            productImage: data.img,
                            productName: data.alt,
                            productPrice: data.price,
                            isLiked: true
                        }
                        props.setAddWishList([...props.addWishList, likedProduct])
                        // console.log("addWishList", props.addWishList)
                        // console.log('productID', likedProduct);
                    }} />
                    {like ? <FavoriteIcon className="wishlist-icon-filled" onClick={() => {
                        setLike(false)
                        props.setAddWishList(props.addWishList.filter(w => w.productId != data.id))

                    }} /> : ""}
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
                <div className="col-4 d-flex justify-content-end px-0">
                    <img className='shoppy' src={data.shop} alt="shop" />
                </div>

            </div>
        </div>
    )
}

export default PopularSlideItem