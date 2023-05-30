export const addressReducer = (addressState, action) => {
  switch (action.type) {
    case "get_user_address":
      return (addressState = action.payload);
  }
};
