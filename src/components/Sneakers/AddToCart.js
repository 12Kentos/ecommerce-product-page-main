import styles from "./AddToCart.module.scss";
import minusBtn from "../../images/icon-minus.svg";
import plusBtn from "../../images/icon-plus.svg";

const AddToCart = () => {
  return (
    <form className={styles.wrapper}>
      <div className={styles["input-wrapper"]}>
        <button>
          <img src={minusBtn} alt="Minus button" />
        </button>
        <input
          type="number"
          min="1"
          step="1"
          defaultValue="1"
          className={styles["number-input"]}
        />
        <button>
          <img src={plusBtn} alt="Plus button" />
        </button>
      </div>
      <button className={styles["add-to-crt-btn"]}>
        <div
          className={styles["add-to-crt-img"]}
          alt="Cart image for add to cart button"
        ></div>
        <p className={styles["add-to-crt-text"]}>Add to cart</p>
      </button>
    </form>
  );
};

export default AddToCart;
