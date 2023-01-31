import styles from "./ImgSlider.module.scss";
import leftArrow from "../../images/icon-previous.svg";
import rightArrow from "../../images/icon-next.svg";

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
  const imgClassList = `${styles["sm-img"]} ${styles.active}`;

  return (
    <div className={styles["images-wrapper"]}>
      <div className={styles.imgWrapper}>
        <img src={images["image-product-1.jpg"]} className={styles.imgSlider} />
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
        <img src={images["image-product-1.jpg"]} className={imgClassList} />
        <img src={images["image-product-2.jpg"]} className={styles["sm-img"]} />
        <img src={images["image-product-3.jpg"]} className={styles["sm-img"]} />
        <img src={images["image-product-4.jpg"]} className={styles["sm-img"]} />
      </div>
    </div>
  );
};

export default ImgSlider;
