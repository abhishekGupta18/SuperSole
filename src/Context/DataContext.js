import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";

import { productReducer } from "../Reducer/ProductReducer";

export const ShoesContext = createContext();

export const ShoesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const initialState = { shoesData: [], shoesCategory: [] };

  const [state, productDispatch] = useReducer(productReducer, initialState);

  const getData = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const showFiltersHandler = () => {
    setShowFilters(!showFilters);
  };

  return (
    <ShoesContext.Provider
      value={{ state, showFilters, showFiltersHandler, isLoading }}
    >
      {children}
    </ShoesContext.Provider>
  );
};

export const useShoesContext = () => {
  return useContext(ShoesContext);
};
