import { createContext } from "react";
import { useContext, useEffect, useState } from "react";

export const ShoesContext = createContext();

export const ShoesContextProvider = ({ children }) => {
  const [shoesData, setShoesData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const jsonData = await response.json();
      setShoesData(jsonData?.products);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(shoesData);
  useEffect(() => {
    getData();
  }, []);

  return (
    <ShoesContext.Provider value={{ shoesData }}>
      {children}
    </ShoesContext.Provider>
  );
};

export const useShoesContext = () => {
  return useContext(ShoesContext);
};
