import styles from "./App.module.scss";
import ImgSlider from "./components/ImgSlider/ImgSlider";
import Header from "./components/Layout/Header";
import AddToCart from "./components/Sneakers/AddToCart";
import SneakersInfo from "./components/Sneakers/SneakersInfo";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <ImgSlider />
        <div>
          <SneakersInfo />
          <AddToCart />
        </div>
      </main>
    </CartProvider>
  );
}

export default App;
