import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";

import { useAuthContext } from "../../Context/AuthContext";
import { useFilterContext } from "../../Context/FiltersContext";
import { useCartContext } from "../../Context/CartContext";
import { useWishListContext } from "../../Context/WishListContext";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export const Navbar = () => {
  const { wishListState } = useWishListContext();
  const { cartState } = useCartContext();
  const { authState } = useAuthContext();

  const { filterDispatch, filterState } = useFilterContext();
  console.log(authState.token);
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

          {authState?.token ? (
            <NavLink to="/userProfile" className="user_profile_icon">
              <PersonIcon />
            </NavLink>
          ) : (
            <NavLink to="/login">
              {" "}
              <button className="login_btn">Login</button>
            </NavLink>
          )}

          <NavLink to="/wishlist" className="show_total_wishItem">
            <FavoriteOutlinedIcon />
            <p>{wishListState?.length}</p>
          </NavLink>

          <NavLink to="/cart" className="show_total_cartItem">
            <ShoppingCartIcon />
            <p>{cartState?.length}</p>
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
