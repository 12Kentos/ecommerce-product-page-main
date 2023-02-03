import styles from "./CartItem.module.scss";
import deleteIcon from "../../images/icon-delete.svg";

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

const CartItem = (props) => {
  return (
    <li className={styles["li-items"]}>
      <div className={styles["cart-item-wrapper"]}>
        <img
          src={images[`image-product-1${props.type}.jpg`]}
          className={styles["cart-img"]}
        />
        <div>
          <p className={styles["cart-item-info"]}>{props.name}</p>
          <p className={styles["cart-item-info"]}>
            ${props.price} x {props.amount}{" "}
            <span className={styles["product-total-amount"]}>{`$${(
              props.price * props.amount
            ).toFixed(2)}`}</span>
          </p>
        </div>
        <button onClick={props.onRemove}>
          <img src={deleteIcon} />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
