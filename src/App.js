import { Route, Routes } from "react-router-dom";

import "./App.css";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { WishlistPage } from "./Pages/WishlistPage/WishlistPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
