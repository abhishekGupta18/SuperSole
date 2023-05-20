import { Route, Routes } from "react-router-dom";

import "./App.css";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { WishlistPage } from "./Pages/WishlistPage/WishlistPage";
import { ProductDetail } from "./Pages/ProductDetails/ProductDetails";
import { Navbar } from "./Component/Navbar/Navbar";
import { Footer } from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
