import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";

import { productReducer } from "../Reducer/ProductReducer";

export const ShoesContext = createContext();

export const ShoesContextProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(true);

  const initialState = { shoesData: [], shoesCategory: [] };

  const [state, productDispatch] = useReducer(productReducer, initialState);

  const getData = async () => {
    try {
      const { status, data } = await axios({
        method: "get",
        url: "/api/products",
      });
      if (status === 200) {
        productDispatch({ type: "set_products", payload: data?.products });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getCategory = async () => {
    try {
      const { status, data } = await axios({
        method: "get",
        url: "/api/categories",
      });
      if (status === 200) {
        productDispatch({ type: "set_category", payload: data?.categories });
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(state?.shoesCategory);
  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const showFiltersHandler = () => {
    setShowFilters(!showFilters);
  };

  return (
    <ShoesContext.Provider value={{ state, showFilters, showFiltersHandler }}>
      {children}
    </ShoesContext.Provider>
  );
};

export const useShoesContext = () => {
  return useContext(ShoesContext);
};
