import { useContext, useState } from "react";

import styles from "./ImgSlider.module.scss";
import CartContext from "../../store/cart-context";
import ImgButton from "./ImgButton";
import LightBox from "./LightBox";

const ImgSlider = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles["images-wrapper"]}>
      <LightBox clickable={true} />
      {cartCtx.ligthBoxActive && (
        <LightBox className={styles["light-box"]} clickable={false} />
      )}
      {cartCtx.ligthBoxActive && (
        <div className={styles["light-box-background"]}></div>
      )}
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
