import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/CartIcon.component";
import CartDropDown from "../cart-dropdown/CartDropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

// import styles from "./Header.module.scss";

import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  LogoContainer,
} from "./Header.styles";

const Header = ({ currentUser, cartHidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">Contact</OptionLink>
        {currentUser ? (
          // <OptionLink as="div" onClick={() => auth.signOut()}>
          <OptionLink as="div" onClick={signOutStart}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!cartHidden ? <CartDropDown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
