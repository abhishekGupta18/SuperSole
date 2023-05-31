import Mockman from "mockman-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";

import "./App.css";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProductsPage } from "./Pages/ProductsPage/ProductsPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { WishlistPage } from "./Pages/WishlistPage/WishlistPage";
import { ProductDetail } from "./Pages/ProductDetails/ProductDetails";
import { Navbar } from "./Component/Navbar/Navbar";
import { Footer } from "./Component/Footer/Footer";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignUp } from "./Pages/SignUp/SignUp";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { AddressPage } from "./Pages/AddressPage/AddressPage";
import { AddressModal } from "./Component/AddressModal/AddressModal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Routes>
        <Route path="/mockMan" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shoeDetails/:shoeId" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/userAddress" element={<AddressPage />} />
        <Route path="/addNewAddress" element={<AddressModal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
