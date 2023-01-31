import { useRef, useState } from "react";

import styles from "./Header.module.scss";
import hamburgerButton from "../../images/icon-menu.svg";
import closeButton from "../../images/icon-close.svg";
import companyLogo from "../../images/logo.svg";
import cartButton from "../../images/icon-cart.svg";
import profileImg from "../../images/image-avatar.png";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navClassList = `${styles["menu-nav"]} ${navOpen ? styles.active : ""}`;

  return (
    <header className={styles["header-wrapper"]}>
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
        <button className={styles.cart}>
          <div className={styles["cart-button"]} alt="A cart button"></div>
        </button>
        <Cart />
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
