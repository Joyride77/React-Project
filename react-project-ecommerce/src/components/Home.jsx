import "../App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
// import { popularData } from "../data/menus";
import {
    Hero,
    HeroSlider,
    PopularProduct,
    Ads,
    RecommendedItems,
    Members,
    Advantage,
    Sponsor,
    LatestNews,
} from "./";

const Home = (props) => {
    // const [addWishList, setAddWishList] = useState([]);
    // const [popularDataList, setPopularDataList] = useState(popularData);

    // const tempPopularData = popularDataList.map((data) => {
    //     return data.page;
    // });

    // const listOfPopularData = tempPopularData.reduce(function (prev, next) {
    //     return prev.concat(next);
    // });

    // function handleWishlist(productId) {
    //     console.log("product ID", productId);
    //     const foundPopularData = listOfPopularData.find(
    //         (product) => product.id === productId
    //     );
    //     setPopularDataList(popularDataList);
    //     setAddWishList([...addWishList, foundPopularData]);
    // }

    return (
        <div className="container-fluid px-0">
            <div id="hero" className="container-fluid px-0 mb-5">
                <div className="container">
                    <Hero />
                </div>
            </div>

            <div id="hero-slider" className="container my-5">
                <HeroSlider />
            </div>

            <div id="popular-product" className="container">
                <PopularProduct setAddWishList={props.setAddWishList} addWishList={props.addWishList} listOfPopularData={props.listOfPopularData} />
            </div>

            <div id="ads-section" className="container my-5">
                <Ads />
            </div>

            <div id="recommended-items" className="container">
                <RecommendedItems />
            </div>

            <div
                id="advantage"
                className="container d-flex justify-content-center align-items-center my-5"
            >
                <Advantage />
            </div>

            <div id="members" className="container px-0 my-5">
                <Members />
            </div>

            <div
                id="sponsor"
                className="container d-flex justify-content-center align-items-center my-5"
            >
                <Sponsor />
            </div>

            <div id="latest-news" className="container my-5 px-0">
                <LatestNews />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
        </div>
    )
}

export default Home