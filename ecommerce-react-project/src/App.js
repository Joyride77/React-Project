import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./style";

import { SignIn, Navbar, Hero, Footer } from "./components";

function App() {
  return (
    <div className="overflow-hidden w-full">
      <div className="bg-primary">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <SignIn />
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <SignIn />
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>{/* <Navbar /> */}</div>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>{/* <Hero /> */}</div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
