import React from 'react'
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import { popularData } from '../data/menus';

const PopularSlideItem = (props) => {
    const { id } = useParams();
    let foundProduct = {};

    if (id) {
        foundProduct = props.listOfPopularData.filter((product) => {
            if (product.id == id) {
                return product;
            }
        })[0];
    }
    if (Object.keys(props).length > 0) {
        foundProduct = props.data;
    }
    console.log('found', foundProduct);
    const data = foundProduct;

    const liked = props.addWishList.filter(wish => wish.productId === data.id)[0];
    return (
        <div className="row popular-product p-2">
            <div className="row product-image">
                <div className="col pop-img-section">
                    <img className='pop-img' src={data.img} alt={data.alt} />
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
                    <img className='shoppy' src={data.shop} alt="shop" />
                </div>

            </div>
        </div>
    )
}

export default PopularSlideItem