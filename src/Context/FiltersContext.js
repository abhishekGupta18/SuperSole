import { createContext, useContext, useReducer } from "react";

import { useShoesContext } from "../Context/DataContext";
import { filterReducer } from "../Reducer/FilterReducer";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const initialFilters = {
    category: [],
    brands: [],
    sort: "",
    rating: 1,
    price: 0,
    search: "",
  };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilters
  );
  // .sort(() => (Math.random() > .5) ? 1 : -1);
  const {
    state: { shoesData },
  } = useShoesContext();

  const categoryFilterData =
    filterState?.category?.length > 0
      ? shoesData?.filter((item) =>
          filterState?.category.some(
            (checkCategory) => item?.gender === checkCategory
          )
        )
      : shoesData;
  // every for "and" some for "or"

  const brandsFilterData =
    filterState?.brands?.length > 0
      ? categoryFilterData?.filter((item) =>
          filterState?.brands.some((checkbrand) => item?.brand === checkbrand)
        )
      : categoryFilterData;

  const sortFilterData =
    filterState?.sort?.length > 0
      ? filterState?.sort === "lowToHigh"
        ? brandsFilterData?.sort((a, b) => a.price - b.price)
        : brandsFilterData?.sort((a, b) => b.price - a.price)
      : brandsFilterData;

  const ratingFilterData =
    filterState?.rating > 1
      ? sortFilterData?.filter((item) => item.rating >= filterState?.rating)
      : sortFilterData;

  const priceFilterData =
    filterState?.price > 0
      ? ratingFilterData?.filter((item) => item.price >= filterState?.price)
      : ratingFilterData;

  const searchFilterData =
    filterState?.search.length > 0
      ? priceFilterData?.filter(
          (item) =>
            item?.name
              .toLowerCase()
              .includes(filterState?.search.toLowerCase()) ||
            item?.brand
              .toLowerCase()
              .includes(filterState?.search.toLowerCase())
        )
      : priceFilterData;

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, searchFilterData }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
