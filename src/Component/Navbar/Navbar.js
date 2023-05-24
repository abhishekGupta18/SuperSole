import { NavLink, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../Context/AuthContext";

import "./Navbar.css";

import { useFilterContext } from "../../Context/FiltersContext";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export const Navbar = () => {
  const { authState } = useAuthContext();

  const { filterDispatch, filterState } = useFilterContext();

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

          {authState?.isLoggedIn ? (
            <NavLink to="/userProfile">
              <PersonIcon />
            </NavLink>
          ) : (
            <NavLink to="/login">
              {" "}
              <button className="login_btn">Login</button>
            </NavLink>
          )}

          <NavLink to="/wishlist">
            <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
          </NavLink>

          <NavLink to="/cart">
            <ShoppingCartIcon></ShoppingCartIcon>
          </NavLink>
        </div>
      </div>
      <div className="nav_right">
        <input
          type="text"
          placeholder="What are you looking for ?"
          onChange={(e) =>
            filterDispatch({
              type: "filter_by_search",
              payload: e.target.value,
            })
          }
          onKeyPress={(e) => e.which === 13 && navigate("/products")}
        />
      </div>
    </nav>
  );
};
