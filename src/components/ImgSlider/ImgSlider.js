import { useContext, useState } from "react";

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

  const [curImg, setCurImg] = useState("1");

  const imgClassList = `${styles["sm-img"]} ${styles.active}`;

  const changeImgOne = () => {
    setCurImg("1");
  };

  const changeImgTwo = () => {
    setCurImg("2");
  };

  const changeImgThree = () => {
    setCurImg("3");
  };

  const changeImgFour = () => {
    setCurImg("4");
  };

  const changeImgAddition = () => {
    setCurImg((prevState) => {
      if (+prevState >= 4) {
        return prevState.toString();
      } else {
        return (+prevState + 1).toString();
      }
    });
  };

  const changeImgSubtraction = () => {
    setCurImg((prevState) => {
      if (+prevState <= 1) {
        return prevState.toString();
      } else return (+prevState - 1).toString();
    });
  };

  return (
    <div className={styles["images-wrapper"]}>
      <div className={styles.imgWrapper}>
        <img
          src={images[`image-product-${curImg}${cartCtx.itemType}.jpg`]}
          className={styles.imgSlider}
        />
        <div className={styles.btnWrapper}>
          <button
            className={`${styles.imgBtn} ${styles["imgBtn-left"]}`}
            onClick={changeImgSubtraction}
          >
            <img
              src={leftArrow}
              className={`${styles.imgBtnIcon} ${styles["imgBtnIcon-left"]}`}
            />
          </button>
          <button
            className={`${styles.imgBtn} ${styles["imgBtn-right"]}`}
            onClick={changeImgAddition}
          >
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
          className={styles["sm-img"]}
          onClick={changeImgOne}
        />
        <img
          src={images[`image-product-2${cartCtx.itemType}.jpg`]}
          className={styles["sm-img"]}
          onClick={changeImgTwo}
        />
        <img
          src={images[`image-product-3${cartCtx.itemType}.jpg`]}
          className={styles["sm-img"]}
          onClick={changeImgThree}
        />
        <img
          src={images[`image-product-4${cartCtx.itemType}.jpg`]}
          className={styles["sm-img"]}
          onClick={changeImgFour}
        />
      </div>
      <div className={styles["color-swatches-wrapper"]}>
        <h2>Color:</h2>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-standard"]} ${styles.active}`}
          type={"standard"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-blue"]}`}
          type={"blue"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-green"]}`}
          type={"green"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-red"]}`}
          type={"red"}
        ></ImgButton>
        <ImgButton
          className={`${styles["shoe-color"]} ${styles["shoe-color-gray"]}`}
          type={"gray"}
        ></ImgButton>
      </div>
    </div>
  );
};

export default ImgSlider;
