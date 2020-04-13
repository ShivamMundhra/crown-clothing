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
