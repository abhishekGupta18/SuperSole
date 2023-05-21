export const productReducer = (state, action) => {
  switch (action.type) {
    case "set_products":
      return {
        ...state,
        shoesData: action.payload,
      };

    case "set_category":
      return {
        ...state,
        shoesCategory: action.payload,
      };
  }
};
