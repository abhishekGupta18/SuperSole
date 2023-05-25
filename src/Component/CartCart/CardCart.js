import { useCartContext } from "../../Context/CartContext";

import "./CardCart.css";

export const CardCart = ({
  _id,
  image,
  brand,
  name,
  price,
  originalPrice,
  qty,
}) => {
  const { removeFromCart, changeCartQuantity } = useCartContext();
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
          <button
            className="inc_quantity"
            onClick={() => changeCartQuantity(_id, "increment")}
          >
            +
          </button>
          <p className="actual_quantity">{qty}</p>
          <button
            className="dec_quantity"
            disabled={qty === 1}
            onClick={() => changeCartQuantity(_id, "decrement")}
          >
            -
          </button>
        </div>
        <div className="cart_to_wishlist">
          <button>Add to wishlist</button>
        </div>
        <div className="remove_from_cart">
          <button onClick={() => removeFromCart(_id)}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
};
