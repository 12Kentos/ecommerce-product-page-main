import { useContext, useState } from "react";

import styles from "./LightBox.module.scss";
import leftArrow from "../../images/icon-previous.svg";
import rightArrow from "../../images/icon-next.svg";
import CartContext from "../../store/cart-context";

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

const LightBox = (props) => {
  const cartCtx = useContext(CartContext);

  const changeImgOne = () => {
    cartCtx.changeNumber("1");
  };

  const changeImgTwo = () => {
    cartCtx.changeNumber("2");
  };

  const changeImgThree = () => {
    cartCtx.changeNumber("3");
  };

  const changeImgFour = () => {
    cartCtx.changeNumber("4");
  };

  const changeImgAddition = () => {
    cartCtx.addImgNumber(cartCtx.imgNumber);
  };

  const changeImgSubtraction = () => {
    cartCtx.subImgNumber(cartCtx.imgNumber);
  };

  const changeLightBox = () => {
    cartCtx.changeLightBoxActive();
  };

  return (
    <div className={props.className}>
      <div className={styles.imgWrapper}>
        <img
          src={
            images[`image-product-${cartCtx.imgNumber}${cartCtx.itemType}.jpg`]
          }
          className={styles.imgSlider}
          onClick={changeLightBox}
        />
        <button>
          <div
            className={styles["light-box-close"]}
            alt="A button that closes the light box"
            onClick={changeLightBox}
          ></div>
        </button>
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
    </div>
  );
};

export default LightBox;
