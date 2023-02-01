import { useContext } from "react";

import styles from "./Cart.module.scss";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={styles.items}>
      {[
        {
          id: "standard",
          name: "Fall Limited Edition Sneakers",
          amount: 3,
          price: 125.0,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles["cart-header"]}>
        <p className={styles["cart-name"]}>Cart</p>
        <p className={styles.cost}>{`Total Cost: $${cartCtx.totalAmount.toFixed(
          2
        )}`}</p>
      </div>
      {/* <p className={styles.empty}>Your cart is empty</p> */}
      <div className={styles["items-btn-wrapper"]}>
        <div className={styles["items-wrapper"]}>{cartItems}</div>
        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
