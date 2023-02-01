import { useContext } from "react";

import styles from "./ImgSlider.module.scss";
import leftArrow from "../../images/icon-previous.svg";
import rightArrow from "../../images/icon-next.svg";
import CartContext from "../../store/cart-context";
import ImgButton from "./ImgButton";

// Below code imports all of the images form the image folder

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images/shoes", false, /\.(png|jpe?g|svg)$/)
);

const ImgSlider = () => {
  const cartCtx = useContext(CartContext);

  const imgClassList = `${styles["sm-img"]} ${styles.active}`;

  const changeColor = () => {
    cartCtx.changeItemType("");
  };

  const changeColorBlue = () => {
    cartCtx.changeItemType("-blue");
  };

  const changeColorGreen = () => {
    cartCtx.changeItemType("-green");
  };

  const changeColorRed = () => {
    cartCtx.changeItemType("-red");
  };

  const changeColorGray = () => {
    cartCtx.changeItemType("-gray");
  };

  return (
    <div className={styles["images-wrapper"]}>
      <div className={styles.imgWrapper}>
        <img
          src={images[`image-product-1${cartCtx.itemType}.jpg`]}
          className={styles.imgSlider}
        />
        <div className={styles.btnWrapper}>
          <button className={`${styles.imgBtn} ${styles["imgBtn-left"]}`}>
            <img
              src={leftArrow}
              className={`${styles.imgBtnIcon} ${styles["imgBtnIcon-left"]}`}
            />
          </button>
          <button className={`${styles.imgBtn} ${styles["imgBtn-right"]}`}>
            <img
              src={rightArrow}
              className={`${styles.imgBtnIcon} ${styles["imgBtnIcon-right"]}`}
            />
          </button>
        </div>
      </div>
      <div className={styles["sm-img-wrapper"]}>
        <img
          src={images[`image-product-1${cartCtx.itemType}.jpg`]}
          className={imgClassList}
        />
        <img
          src={images[`image-product-2${cartCtx.itemType}.jpg`]}
          className={styles["sm-img"]}
        />
        <img
          src={images[`image-product-3${cartCtx.itemType}.jpg`]}
          className={styles["sm-img"]}
        />
        <img
          src={images[`image-product-4${cartCtx.itemType}.jpg`]}
          className={styles["sm-img"]}
        />
      </div>
      <div className={styles["color-swatches-wrapper"]}>
        <h2>Color:</h2>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-standard"]} ${styles.active}`}
          onClick={changeColor}
          type={"standard"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-blue"]}`}
          onClick={changeColorBlue}
          type={"blue"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-green"]}`}
          onClick={changeColorGreen}
          type={"green"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-red"]}`}
          onClick={changeColorRed}
          type={"red"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-gray"]}`}
          onClick={changeColorGray}
          type={"gray"}
        ></ImgButton>
      </div>
    </div>
  );
};

export default ImgSlider;
