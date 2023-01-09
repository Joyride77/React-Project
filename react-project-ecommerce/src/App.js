import "./App.css";

import {
  Contact,
  SignIn,
  MainMenu,
  Hero,
  HeroSlider,
  PopularProduct,
  Ads,
  Advantage,
  Sponsor,
  Footer,
} from "./components";

function App() {
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

      <div id="hero-slider" className="container">
        <HeroSlider />
      </div>

      <div id="popular-product" className="container">
        <PopularProduct />
      </div>

      <div id="ads-section" className="container">
        <Ads />
      </div>

      <div
        id="advantage"
        className="container d-flex justify-content-center align-items-center"
      >
        <Advantage />
      </div>

      <div
        id="sponsor"
        className="container d-flex justify-content-center align-items-center my-4"
      >
        <Sponsor />
      </div>

      <div id="sign-in" className="container-fluid px-0">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
