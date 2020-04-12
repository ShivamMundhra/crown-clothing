import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = (type) => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});
