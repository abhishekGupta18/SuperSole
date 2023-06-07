import { useCartContext } from "../../Context/CartContext";
import { useWishListContext } from "../../Context/WishListContext";
import { useRef } from "react";
import { toast } from "react-toastify";
import "./CardCart.css";
import { duration } from "@mui/material";

export const CardCart = (item) => {
  const cartQuantityRef = useRef();
  const { removeFromCart, changeCartQuantity } = useCartContext();
  const { addToWishList, isPresentInWishList } = useWishListContext();

  const cartDecDelayHandler = (actionHandler, duration) => {
    clearTimeout(cartQuantityRef.current);
    cartQuantityRef.current = setTimeout(() => {
      actionHandler(item?._id, "decrement");
    }, duration);
  };
  const cartIncDelayHandler = (actionHandler, duration) => {
    clearTimeout(cartQuantityRef.current);
    cartQuantityRef.current = setTimeout(() => {
      actionHandler(item?._id, "increment");
    }, duration);
  };

  const delayInWishList = (actionHandler, duration) => {
    clearTimeout(cartQuantityRef.current);
    cartQuantityRef.current = setTimeout(() => {
      actionHandler(item);
    }, duration);
  };

  return (
    <div className="cart_card">
      <div className="cart_img_container">
        <img src={item?.image} alt="cart" />
      </div>
      <div className="cart_detail_container">
        <h3 className="cart_card_brand">{item?.brand}</h3>
        <p className="cart_card_name">{item?.name}</p>
        <div className="cart_price">
          <p className="cart_curr_price">₹{item?.price}</p>
          <p className="cart_orig_price">₹{item?.originalPrice}</p>
        </div>
        <div className="cart_quantity">
          <p style={{ fontSize: "1rem" }}>Quantity:</p>
          <button
            className="dec_quantity"
            disabled={item?.qty === 1}
            onClick={() => cartDecDelayHandler(changeCartQuantity, 600)}
          >
            -
          </button>
          <p className="actual_quantity">{item?.qty}</p>
          <button
            className="inc_quantity"
            onClick={() => cartIncDelayHandler(changeCartQuantity, 600)}
          >
            +
          </button>
        </div>
        <div className="cart_to_wishlist">
          {isPresentInWishList(item) !== -1 ? (
            <button className="cart_to_wishlist">Added to wishlist</button>
          ) : (
            <button onClick={() => delayInWishList(addToWishList, 600)}>
              Add to wishlist
            </button>
          )}
        </div>
        <div className="remove_from_cart">
          <button
            onClick={() => {
              removeFromCart(item?._id);
              toast.error("item is removed from cart");
            }}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};
