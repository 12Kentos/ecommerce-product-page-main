import { useContext } from "react";

import styles from "./Cart.module.scss";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles.items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.type}
          name={item.name}
          type={item.type}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.type)}
        />
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
      {!hasItems && <p className={styles.empty}>Your cart is empty</p>}
      {hasItems && (
        <div className={styles["items-btn-wrapper"]}>
          <div className={styles["items-wrapper"]}>{cartItems}</div>
          <button className={styles.checkout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
