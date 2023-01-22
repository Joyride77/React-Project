import React from 'react'
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const PopularSlideItem = (props) => {
    let foundProduct = {};
    if (props.data) {
        foundProduct = props.data;
    }
    const data = foundProduct;

    const liked = props.addWishList.filter(wish => wish.productId === data.id)[0];
    const shopAdded = props.shopList.filter(wish => wish.productId === data.id)[0];

    return (
        <div className="row popular-product p-2">
            <div className="row product-image">
                <div className="col pop-img-section">
                    <Link to={`/product/${foundProduct.id}`}>
                        <img className='pop-img' src={data.img} alt={data.alt} />
                    </Link>
                    <a onClick={() => {
                        if (!liked) {
                            const likedProduct = {
                                productId: data.id,
                                productImage: data.img,
                                productName: data.alt,
                                productPrice: data.price,
                                liked: true,
                            }
                            props.setAddWishList([...props.addWishList, likedProduct])
                        } else {
                            props.setAddWishList(
                                props.addWishList.filter(w => w.productId !== data.id)
                            )
                        }
                    }}
                    >
                        {liked ?
                            <FavoriteIcon className="wishlist-icon-filled" />
                            :
                            <FavoriteBorderIcon className='wishlist-icon-hole' />}
                    </a>
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
                    <a onClick={() => {
                        if (!shopAdded) {
                            const addedToShop = {
                                productId: data.id,
                                productImage: data.img,
                                productName: data.alt,
                                productPrice: data.price,
                                liked: true,
                            }
                            props.setShopList([...props.shopList, addedToShop])
                        } else {
                            props.setShopList(
                                props.shopList.filter(w => w.productId !== data.id)
                            )
                        }
                    }}
                    >
                        {shopAdded ?
                            <ShoppingCartIcon className="shop-icon-filled shop-icon" />
                            :
                            <ShoppingCartOutlinedIcon className='shop-icon-hole shop-icon' />}
                    </a>
                </div>

            </div>
        </div>
    )
}

export default PopularSlideItem