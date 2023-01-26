import styles from "./SneakersInfo.module.scss";

const SneakersInfo = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.company}>Sneaker Company</p>
      <h1 className={styles["page-header"]}>Fall Limited Edition Sneakers</h1>
      <p className={styles.info}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sold, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles["price-wrapper"]}>
        <p className={styles["discount-price"]}>$125.00</p>
        <p className={styles.price}>$250.00</p>
      </div>
    </div>
  );
};

export default SneakersInfo;
