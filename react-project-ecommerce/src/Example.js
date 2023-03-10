import "./App.css";
import React, { useState } from "react";

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
  const [show, setShow] = useState(false);

  return (
    <div className="container-fluid px-0">
      <div className="container">
        <Contact />
      </div>

      <div id="sign-in" className="container-fluid px-0">
        <div className="container">
          <SignIn />
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
