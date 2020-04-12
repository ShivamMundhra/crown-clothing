import React from "react";

import Button from "../custom-button/Button.component";

import "./CartDropdown.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="card-items" />
      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CartDropDown;
