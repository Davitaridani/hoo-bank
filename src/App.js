import styles from "./style";
import {
  NavbarCompt,
  Hero,
  Stats,
  Business,
  Billing,
  Testimoni,
  CardDeal,
  Clients,
  Cta,
  Footer,
} from "./components/sections";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavbarCompt />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimoni />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
