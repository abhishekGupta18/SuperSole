export const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "get_cart":
      return (cartState = action.payload);
  }
};
