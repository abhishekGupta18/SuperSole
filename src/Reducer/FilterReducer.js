export const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "filter_by_category":
      return {
        ...filterState,
        category: filterState?.category?.includes(action.payload)
          ? filterState?.category?.filter((item) => item !== action.payload)
          : [...filterState?.category, action.payload],
      };

    case "filter_by_brand":
      return {
        ...filterState,
        brands: filterState?.brands?.includes(action.payload)
          ? filterState?.brands?.filter((item) => item !== action.payload)
          : [...filterState?.brands, action.payload],
      };

    case "sort_by_price":
      return {
        ...filterState,
        sort: action.payload,
      };
  }
};
