import AliceCarousel from 'react-alice-carousel'
import { popularData } from '../data/menus'
import PopularSlideItem from './PopularSlideItem';


const PopularProduct = (props) => {
    const popular = popularData.map((populardata, index) => {
        return (
            <div id='card' key={index}>
                {populardata.page.map((data, idx) => {
                    return (
                        <PopularSlideItem key={`${index}${idx}`} data={data} setAddWishList={props.setAddWishList} addWishList={props.addWishList} listOfPopularData={props.listOfPopularData} shopList={props.shopList} setShopList={props.setShopList} />
                    )
                })}
            </div>
        )
    })
    return (
        <div>
            <h2 className='my-5 fw-bold'>Popular products</h2>
            <AliceCarousel disableButtonsControls="true">
                {popular}
            </AliceCarousel>
        </div>
    )
}

export default PopularProduct