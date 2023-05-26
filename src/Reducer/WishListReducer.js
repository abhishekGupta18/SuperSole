export const wishListReducer = (wishListState, action) => {
  switch (action.type) {
    case "get_wishList":
      return (wishListState = action.payload);
  }
};
