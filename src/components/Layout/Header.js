import { useState, useContext } from "react";

import styles from "./Header.module.scss";
import hamburgerButton from "../../images/icon-menu.svg";
import closeButton from "../../images/icon-close.svg";
import companyLogo from "../../images/logo.svg";
import profileImg from "../../images/image-avatar.png";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const navClassList = `${styles["menu-nav"]} ${navOpen ? styles.active : ""}`;

  return (
    <header className={styles["header-wrapper"]}>
      {navOpen && <div className={styles.backdrop}></div>}
      <div className={styles["nav-left"]}>
        <button className={styles["nav-open"]} onClick={toggleNav}>
          <img src={hamburgerButton} alt="A hamburger nav menu button" />
        </button>
        <a href="#">
          <img
            src={companyLogo}
            alt="Company Logo"
            className={styles["company-logo"]}
          />
        </a>
        <nav className={navClassList}>
          <ul className={styles["menu-nav-list"]}>
            <button className={styles["nav-close"]} onClick={toggleNav}>
              <img src={closeButton} alt="A button that closes the nav bar" />
            </button>
            <li>
              <a href="#" className={styles["menu-nav-item"]}>
                Collections
              </a>
            </li>
            <li>
              <a href="#" className={styles["menu-nav-item"]}>
                Men
              </a>
            </li>
            <li>
              <a href="#" className={styles["menu-nav-item"]}>
                Women
              </a>
            </li>
            <li>
              <a href="#" className={styles["menu-nav-item"]}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles["menu-nav-item"]}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["nav-right"]}>
        <button className={styles.cart} onClick={toggleCart}>
          <div className={styles["cart-button"]} alt="A cart button"></div>
          <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
        {cartOpen && <Cart />}
        <img
          src={profileImg}
          alt="Profile picture"
          className={styles["profile-img"]}
        />
      </div>
    </header>
  );
};

export default Header;
