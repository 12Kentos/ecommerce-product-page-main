import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles["cart-name"]}>Cart</p>
      <p className={styles.empty}>Your cart is empty</p>
      {/* <p>Items Here</p> */}
      {/* <button>Checkout</button> */}
    </div>
  );
};

export default Cart;
