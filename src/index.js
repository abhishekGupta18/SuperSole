import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";

import { ShoesContextProvider } from "./Context/DataContext";
import { FilterContextProvider } from "./Context/FiltersContext";
import { AuthContextProvider } from "./Context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ShoesContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </ShoesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
