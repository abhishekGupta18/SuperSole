import { useCartContext } from "../../Context/CartContext";
import { useWishListContext } from "../../Context/WishListContext";
import "./CardCart.css";

export const CardCart = (item) => {
  const { removeFromCart, changeCartQuantity } = useCartContext();
  const { addToWishList, isPresentInWishList } = useWishListContext();
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
            className="inc_quantity"
            onClick={() => changeCartQuantity(item?._id, "increment")}
          >
            +
          </button>
          <p className="actual_quantity">{item?.qty}</p>
          <button
            className="dec_quantity"
            disabled={item?.qty === 1}
            onClick={() => changeCartQuantity(item?._id, "decrement")}
          >
            -
          </button>
        </div>
        <div className="cart_to_wishlist">
          <button
            disabled={isPresentInWishList(item) !== -1}
            onClick={() => addToWishList(item)}
          >
            Add to wishlist
          </button>
        </div>
        <div className="remove_from_cart">
          <button onClick={() => removeFromCart(item?._id)}>
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};
