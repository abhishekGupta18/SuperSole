import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";

import { ShoesContextProvider } from "./Context/DataContext";
import { FilterContextProvider } from "./Context/FiltersContext";
import { AuthContextProvider } from "./Context/AuthContext";
import { CartContextProvider } from "./Context/CartContext";
import { WishListContextProvider } from "./Context/WishListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ShoesContextProvider>
          <CartContextProvider>
            <WishListContextProvider>
              <FilterContextProvider>
                <App />
              </FilterContextProvider>
            </WishListContextProvider>
          </CartContextProvider>
        </ShoesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
