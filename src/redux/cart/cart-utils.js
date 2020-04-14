export const addItemToCart = (cartItems, newCartItem) => {
  const existingItem = cartItems.find((item) => item.id === newCartItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === newCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...newCartItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
