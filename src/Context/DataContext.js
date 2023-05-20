import axios from "axios";
import { createContext } from "react";
import { useContext, useEffect, useState } from "react";

export const ShoesContext = createContext();

export const ShoesContextProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(true);

  const [shoesData, setShoesData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios({ method: "get", url: "/api/products" });
      if (response?.status === 200) {
        setShoesData(response?.data?.products);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(shoesData);
  useEffect(() => {
    getData();
  }, []);

  const showFiltersHandler = () => {
    setShowFilters(!showFilters);
  };

  return (
    <ShoesContext.Provider
      value={{ shoesData, showFilters, showFiltersHandler }}
    >
      {children}
    </ShoesContext.Provider>
  );
};

export const useShoesContext = () => {
  return useContext(ShoesContext);
};
