import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/CartItem.component";
import Button from "../custom-button/Button.component";

import "./CartDropdown.styles.scss";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))}
      </div>
      <Button>Go To CheckOut</Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
