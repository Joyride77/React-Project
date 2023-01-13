import "./App.css";
import React, { useState } from "react";
import { popularData } from "./data/menus";

import {
  Contact,
  SignIn,
  MainMenu,
  Hero,
  HeroSlider,
  PopularProduct,
  Ads,
  RecommendedItems,
  Members,
  Advantage,
  Sponsor,
  LatestNews,
  Footer,
} from "./components";

function App() {
  // const [show, setShow] = useState(false);

  const [wishCounter, setWishCounter] = useState(0);
  const [addWishList, setAddWishList] = useState([]);
  const [popularDataList, setPopularDataList] = useState(popularData);

  function handleWishlist(productId) {
    // console.log(productId);
    let p = [];
    setWishCounter(wishCounter + 1);

    const newPopularDataList = popularDataList.filter((product) => {
      // console.log(product);
      const foundProduct = product.page.filter((page) => {
        // console.log("Hi", page);
        if (page.id == productId) {
          return page;
        }
      });
      console.log("found", foundProduct);
      if (foundProduct.length > 0) {
        p = foundProduct;
        return foundProduct;
      }
      // if (product.page.id == productId) {
      //   console.log("HI");
      //   // console.log("1", product.id);
      //   // console.log("2", productId);
      // }
    });
    console.log("p", p);
    setAddWishList([...addWishList, p]);
    console.log(addWishList);
    // setPopularDataList("");

    // console.log(popularDataList[0].page[0].id);
  }

  return (
    <div className="container-fluid px-0">
      <div className="container">
        <Contact />
      </div>

      <div id="sign-in" className="container-fluid px-0">
        <div className="container">
          <SignIn wishCounter={wishCounter} addWishList={addWishList} />
        </div>
      </div>

      <div id="nav-bar" className="container-fluid px-0">
        <div className="container">
          <MainMenu />
        </div>
      </div>

      <div id="hero" className="container-fluid px-0 mb-5">
        <div className="container">
          <Hero />
        </div>
      </div>

      <div id="hero-slider" className="container my-5">
        <HeroSlider />
      </div>

      <div id="popular-product" className="container">
        <PopularProduct
          // show={show}
          // setShow={setShow}
          handleWishlist={handleWishlist}
          // id={id}
        />
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

      <div id="footer" className="container-fluid px-0">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
