import { v4 as uuid } from "uuid";

import "./CardCart.css";

export const CardCart = ({ image, brand, name, price, originalPrice }) => {
  return (
    <div className="cart_card">
      <div className="cart_img_container">
        <img src={image} alt="cart" />
      </div>
      <div className="cart_detail_container">
        <h3 className="cart_card_brand">{brand}</h3>
        <p className="cart_card_name">{name}</p>
        <div className="cart_price">
          <p className="cart_curr_price">₹{price}</p>
          <p className="cart_orig_price">₹{originalPrice}</p>
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
