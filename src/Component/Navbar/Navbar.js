import { NavLink } from "react-router-dom";

import "./Navbar.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="nav_left">
        <h3 className="logo">SuperSole</h3>

        <div className="nav_btn">
          <NavLink to="/products" className="explore_link">
            Explore
          </NavLink>
          <button className="login_btn">Login</button>

          <NavLink to="/wishlist">
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
          </NavLink>

          <NavLink to="/cart">
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </NavLink>
        </div>
      </div>
      <div className="nav_right">
        <input type="text" placeholder="What are you looking for ?" />
      </div>
    </nav>
  );
};
