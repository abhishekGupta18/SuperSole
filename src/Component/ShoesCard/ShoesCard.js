import { NavLink } from "react-router-dom";

import { useCartContext } from "../../Context/CartContext";
import { useAuthContext } from "../../Context/AuthContext";

import "./ShoesCard.css";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const ShoesCard = (item) => {
  const { addToCart, isPresentInCart } = useCartContext();
  const { authState } = useAuthContext();

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
        <button className="wish_list_btn">
          <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
        </button>
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
              addToCart(item);
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
