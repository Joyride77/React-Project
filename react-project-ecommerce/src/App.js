import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { popularData } from "./data/menus";
import SignIn from "./components/pages/SignIn";
import Home from "./components/Home";
import { Contact, Footer, MainMenu, Signin } from "./components";
import PopularSlideItem from "./components/PopularSlideItem";
import ProductDetails from "./components/pages/ProductDetails";
import Register from "./components/pages/Register";
// import { toast } from "react-toastify";

function App() {
  const [addWishList, setAddWishList] = useState([]);
  const [shopList, setShopList] = useState([]);

  const [popularDataList, setPopularDataList] = useState(popularData);
  const tempPopularData = popularDataList.map((data) => {
    return data.page;
  });

  const listOfPopularData = tempPopularData.reduce(function (prev, next) {
    return prev.concat(next);
  });

  // function handleWishlist(productId) {
  //   console.log("product ID", productId);
  //   const foundPopularData = listOfPopularData.find(
  //     (product) => product.id === productId
  //   );

  //   setPopularDataList(popularDataList);
  //   setAddWishList([...addWishList, foundPopularData]);
  //   // toast.success("Successfully added", {
  //   //   position: "top-right",
  //   //   autoClose: 2000,
  //   //   hideProgressBar: false,
  //   //   closeOnClick: true,
  //   //   pauseOnHover: true,
  //   //   draggable: true,
  //   //   progress: undefined,
  //   //   theme: "light",
  //   // });
  // }

  return (
    <div className="container-fluid px-0">
      <div className="container">
        <Contact />
      </div>

      <div id="sign-in" className="container-fluid px-0">
        <div className="container">
          <Signin
            addWishList={addWishList}
            setAddWishList={setAddWishList}
            listOfPopularData={listOfPopularData}
            shopList={shopList}
            setShopList={setShopList}
          />
        </div>
      </div>

      <div id="nav-bar" className="container-fluid px-0">
        <div className="container">
          <MainMenu />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addWishList={addWishList}
              setAddWishList={setAddWishList}
              listOfPopularData={listOfPopularData}
              shopList={shopList}
              setShopList={setShopList}
            />
          }
        />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={<ProductDetails listOfPopularData={listOfPopularData} />}
        />
      </Routes>
      <Outlet />

      <div id="footer" className="container-fluid px-0">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
