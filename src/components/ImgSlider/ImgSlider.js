import styles from "./ImgSlider.module.scss";

// Below code imports all of the images form the image folder

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

const leftBtnIcon = `${styles.imgBtnIcon} ${styles["imgBtnIcon-left"]}`;
const rightBtnIcon = `${styles.imgBtnIcon} ${styles["imgBtnIcon-right"]}`;
const leftBtn = `${styles.imgBtn} ${styles["imgBtn-left"]}`;
const rightBtn = `${styles.imgBtn} ${styles["imgBtn-right"]}`;

const ImgSlider = () => {
  return (
    <div className={styles.imgWrapper}>
      <img src={images["image-product-1.jpg"]} className={styles.imgSlider} />
      <div className={styles.btnWrapper}>
        <button className={leftBtn}>
          <img src={images["icon-previous.svg"]} className={leftBtnIcon} />
        </button>
        <button className={rightBtn}>
          <img src={images["icon-next.svg"]} className={rightBtnIcon} />
        </button>
      </div>
    </div>
  );
};

export default ImgSlider;
