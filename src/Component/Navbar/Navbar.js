import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navigation">
      <div className="nav_left">
        <h3 onClick={() => navigate("/")} className="logo">
          SuperSole
        </h3>

        <div className="nav_btn">
          <NavLink to="/products" className="explore_link">
            Explore
          </NavLink>
          <NavLink to="/login">
            {" "}
            <button className="login_btn">Login</button>
          </NavLink>

          <NavLink to="/wishlist">
            <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
          </NavLink>

          <NavLink to="/cart">
            <ShoppingCartIcon></ShoppingCartIcon>
          </NavLink>
        </div>
      </div>
      <div className="nav_right">
        <input type="text" placeholder="What are you looking for ?" />
      </div>
    </nav>
  );
};
