import { v4 as uuid } from "uuid";

import "./CardCart.css";
const singleProduct = {
  id: uuid(),
  name: "Grandstand II Shoe Sneakers For Men  (White)",
  brand: "NIKE",
  image:
    "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/i/d/p/-original-imagg3m8qtqrkga8.jpeg?q=70",
  category: "Sneakers",
  price: "5000",
  originalPrice: "6669",
  rating: "3.5",
  for: "Men",
  inStock: true,
  reviews: "2.9k",
  delivery: "in 6 days",
};
export const CardCart = () => {
  return (
    <div className="cart_card">
      <div className="cart_img_container">
        <img src={singleProduct.image} alt="cart" />
      </div>
      <div className="cart_detail_container">
        <h3 className="cart_card_brand">{singleProduct.brand}</h3>
        <p className="cart_card_name">{singleProduct.name}</p>
        <div className="cart_price">
          <p className="cart_curr_price">₹{singleProduct.price}</p>
          <p className="cart_orig_price">₹{singleProduct.originalPrice}</p>
        </div>
        <div className="cart_quantity">
          <p style={{ fontSize: "1rem" }}>Quantity:</p>
          <button className="inc_quantity">+</button>
          <p className="actual_quantity">10</p>
          <button className="dec_quantity">-</button>
        </div>
        <div className="cart_to_wishlist">
          <button>Add to wishlist</button>
        </div>
        <div className="remove_from_cart">
          <button>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};
