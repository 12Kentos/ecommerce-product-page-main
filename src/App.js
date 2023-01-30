import styles from "./App.module.scss";
import ImgSlider from "./components/ImgSlider/ImgSlider";
import Header from "./components/Layout/Header";
import AddToCart from "./components/Sneakers/AddToCart";
import SneakersInfo from "./components/Sneakers/SneakersInfo";

function App() {
  return (
    <div className={styles.testing}>
      <Header />
      <main className={styles.main}>
        <ImgSlider />
        <div>
          <SneakersInfo />
          <AddToCart />
        </div>
      </main>
    </div>
  );
}

export default App;
