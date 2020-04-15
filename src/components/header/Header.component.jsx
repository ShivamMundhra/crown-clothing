import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/CartIcon.component";
import CartDropDown from "../cart-dropdown/CartDropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import styles from "./Header.module.scss";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className={styles.header}>
      <Link className={styles.logo_container} to="/">
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.options}>
        <Link to="/shop" className={styles.option}>
          SHOP
        </Link>
        <Link to="/shop" className={styles.option}>
          Contact
        </Link>
        {currentUser ? (
          <div className={styles.option} onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className={styles.option}>
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {!cartHidden ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
