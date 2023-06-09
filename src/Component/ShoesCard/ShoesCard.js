import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import { useCartContext } from "../../Context/CartContext";
import { useAuthContext } from "../../Context/AuthContext";
import { useWishListContext } from "../../Context/WishListContext";

import "./ShoesCard.css";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const ShoesCard = (item) => {
  const addCartRef = useRef();
  const { addToCart, isPresentInCart } = useCartContext();
  const { addToWishList, isPresentInWishList, removeFromWishlist } =
    useWishListContext();
  const { authState } = useAuthContext();
  const navigate = useNavigate();

  const DelayHandler = (actionHandler, duration) => {
    clearTimeout(addCartRef.current);
    addCartRef.current = setTimeout(() => {
      actionHandler(item);
    }, duration);
  };

  const DelayHandleRemoveWishlist = (actionHandler, duration) => {
    clearTimeout(addCartRef.current);
    addCartRef.current = setTimeout(() => {
      actionHandler(item?._id);
    }, duration);
  };

  return (
    <NavLink className="shoes_card" to={`/shoeDetails/${item?._id}`}>
      <div className="image_container">
        <img src={item?.image} alt="shoes" />
        <div className="rating_review">
          <p className="rating">
            <StarRateRoundedIcon />
            {item?.rating}
          </p>
          <p>| {item?.reviews}</p>
        </div>

        {isPresentInWishList(item) === -1 ? (
          <button
            className="wish_list_btn"
            onClick={(e) => {
              e.preventDefault();
              authState?.token
                ? DelayHandler(addToWishList, 600)
                : navigate("/login");
            }}
          >
            <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
          </button>
        ) : (
          <button
            className="remove_from_wishlist"
            onClick={(e) => {
              e.preventDefault();
              DelayHandleRemoveWishlist(removeFromWishlist, 600);
            }}
          >
            <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
          </button>
        )}
      </div>
      <div className="shoes_detail">
        <p className="barnd_name">{item?.brand}</p>
        <p className="product_name">{item?.name}</p>
        <div className="prices">
          <p className="cur_price">₹{item?.price}</p>
          <p className="orig_price">₹{item?.originalPrice}</p>
        </div>

        {isPresentInCart(item) !== -1 ? (
          <button className="go_to_cart" onClick={(e) => e.preventDefault()}>
            {" "}
            <ShoppingCartIcon /> <NavLink to="/cart">Go to cart</NavLink>
          </button>
        ) : (
          <button
            className="add_cart_btn"
            onClick={(e) => {
              e.preventDefault();
              authState?.token
                ? DelayHandler(addToCart, 600)
                : navigate("/login");
            }}
          >
            <ShoppingCartIcon />
            Add to cart
          </button>
        )}
      </div>
    </NavLink>
  );
};
