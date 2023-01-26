import styles from "./App.module.scss";
import ImgSlider from "./components/ImgSlider/ImgSlider";
import Header from "./components/Layout/Header";
import SneakersInfo from "./components/Sneakers/SneakersInfo";

function App() {
  return (
    <>
      <Header />
      <main>
        <ImgSlider />
        <SneakersInfo />
      </main>
    </>
  );
}

export default App;
