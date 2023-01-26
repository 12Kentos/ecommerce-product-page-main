import styles from "./Header.module.scss";
import hamburgerButton from "../../images/icon-menu.svg";
import closeButton from "../../images/icon-close.svg";
import companyLogo from "../../images/logo.svg";
import cartButton from "../../images/icon-cart.svg";
import profileImg from "../../images/image-avatar.png";

const Header = (props) => {
  return (
    <header className={styles["header-wrapper"]}>
      <div className={styles["nav-left"]}>
        <button>
          <img src={hamburgerButton} alt="A hamburger nav menu button" />
        </button>
        <a href="#">
          <img
            src={companyLogo}
            alt="Company Logo"
            className={styles["company-logo"]}
          />
        </a>
        <nav className={styles["menu-nav"]}>
          <button>
            <img src={closeButton} alt="A button that closes the nav bar" />
          </button>
          <a>Collections</a>
          <a>Men</a>
          <a>Women</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </div>
      <div className={styles["nav-right"]}>
        <button>
          <img src={cartButton} alt="A cart button" />
        </button>
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
