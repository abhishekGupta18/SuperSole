import { v4 as uuid } from "uuid";

import "./ProductDetails.css";

import { useShoesContext } from "../../Context/DataContext";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { state } = useShoesContext();
  const { shoeId } = useParams();

  const findShoe = state?.shoesData?.find((item) => item?._id == shoeId);

  const {
    image,
    rating,
    brand,
    name,
    reviews,
    price,
    originalPrice,
    inStock,
    delivery,
    gender,
  } = findShoe;

  return (
    <div className="detail_page">
      {findShoe && (
        <div className="product_detail">
          <div className="img_container">
            <img src={image} alt="shoes" />
            <button className="add_to_wishlist">
              <FavoriteOutlinedIcon />
            </button>
            <button className="star_rating">
              <StarRateRoundedIcon />
              {rating}
            </button>
          </div>
          <div className="shoes_details">
            <h2 className="shoe_detail_brand">{brand}</h2>
            <h4
              className="shoe_detail_name"
              style={{
                fontFamily: "Rokkitt, Georgia, serif",
              }}
            >
              {name}
            </h4>
            <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
              {" "}
              Reviews :{" "}
              <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                {reviews}
              </span>
            </h4>
            <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
              {" "}
              For :{" "}
              <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                {gender}
              </span>
            </h4>
            <div className="product_detail_prices">
              <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>₹{price}</p>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  textDecoration: "line-through",
                  color: "#64748b",
                }}
              >
                ₹{originalPrice}
              </p>
            </div>
            <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
              Availability:{" "}
              <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                {inStock ? "In stock" : "Out of stock"}
              </span>
            </h4>
            <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
              Delivery:{" "}
              <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                {delivery}
              </span>
            </h4>
            <button className="add_cart">
              {" "}
              <ShoppingCartIcon /> Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
