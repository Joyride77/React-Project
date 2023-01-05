import "./App.css";

import {
  Contact,
  SignIn,
  MainMenu,
  Hero,
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
    </div>
  );
}

export default App;
