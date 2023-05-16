import "./ShoesCard.css";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const ShoesCard = ({
  id,
  name,
  brand,
  image,
  price,
  originalPrice,
  category,
  rating,
  reviews,
}) => {
  return (
    <div className="shoes_card">
      <div className="image_container">
        <img src={image} alt="shoes" />
        <div className="rating_review">
          <p className="rating">
            <StarRateRoundedIcon />
            {rating}
          </p>
          <p>| {reviews}</p>
        </div>
        <button className="wish_list_btn">
          <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
        </button>
      </div>
      <div className="shoes_detail">
        <p className="barnd_name">{brand}</p>
        <p className="product_name">{name}</p>
        <div className="prices">
          <p className="cur_price">₹{price}</p>
          <p className="orig_price">₹{originalPrice}</p>
        </div>

        <button className="add_cart_btn">
          <ShoppingCartIcon />
          Add to cart
        </button>
      </div>
    </div>
  );
};
