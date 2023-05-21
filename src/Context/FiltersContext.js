import { createContext, useContext, useReducer } from "react";

import { useShoesContext } from "../Context/DataContext";
import { filterReducer } from "../Reducer/FilterReducer";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const initialFilters = { category: [], brands: [], sort: "" };
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilters
  );

  const {
    state: { shoesData },
  } = useShoesContext();

  const categoryFilterData =
    filterState?.category?.length > 0
      ? shoesData?.filter((item) =>
          filterState?.category.some(
            (checkCategory) => item?.for === checkCategory
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

  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, sortFilterData }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
