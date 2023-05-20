import { v4 as uuid } from "uuid";

import "./ProductDetails.css";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ProductDetail = () => {
  const singleProduct = {
    id: uuid(),
    name: "Grandstand II Shoe Sneakers For Men  (White)",
    brand: "NIKE",
    image:
      "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/0/7/w/8-5899197-8-bata-blue-original-imaggs5zhgvhexff.jpeg?q=70",
    category: "Sneakers",
    price: "5000",
    originalPrice: "6669",
    rating: "3.5",
    for: "Men",
    inStock: true,
    reviews: "2.9k",
    delivery: "in 6 days",
  };
  return (
    <div className="detail_page">
      <div className="product_detail">
        <div className="img_container">
          <img src={singleProduct.image} alt="shoes" />
          <button className="add_to_wishlist">
            <FavoriteOutlinedIcon />
          </button>
          <button className="star_rating">
            <StarRateRoundedIcon />
            {singleProduct.rating}
          </button>
        </div>
        <div className="shoes_details">
          <h2 className="shoe_detail_brand">{singleProduct.brand}</h2>
          <h4
            className="shoe_detail_name"
            style={{
              fontFamily: "Rokkitt, Georgia, serif",
            }}
          >
            {singleProduct.name}
          </h4>
          <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
            {" "}
            Reviews :{" "}
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              {singleProduct.reviews}
            </span>
          </h4>
          <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
            {" "}
            For :{" "}
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              {singleProduct.for}
            </span>
          </h4>
          <div className="product_detail_prices">
            <p style={{ fontSize: "1.5rem", fontWeight: "700" }}>
              ₹{singleProduct.price}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                textDecoration: "line-through",
                color: "#64748b",
              }}
            >
              ₹{singleProduct.originalPrice}
            </p>
          </div>
          <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
            Availability:{" "}
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              {singleProduct?.inStock ? "In stock" : "Out of stock"}
            </span>
          </h4>
          <h4 style={{ fontFamily: "Rokkitt, Georgia, serif" }}>
            Delivery:{" "}
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>
              {singleProduct.delivery}
            </span>
          </h4>
          <button className="add_cart">
            {" "}
            <ShoppingCartIcon /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
