import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter } from "react-router-dom";

import { ShoesContextProvider } from "./Context/DataContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShoesContextProvider>
        <App />
      </ShoesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
