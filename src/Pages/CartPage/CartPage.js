import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import { CardCart } from "../../Component/CartCart/CardCart";

import { useCartContext } from "../../Context/CartContext";

import emptyCart from "../../Asset/empty_cart.png";

export const CartPage = () => {
  const navigate = useNavigate();
  const { cartState, totalCartPrice, discount, totalAmount } = useCartContext();
  return (
    <div className="cart_page">
      <ul className="cart_items_list">
        {cartState?.length === 0 ? (
          <div className="empty_cart">
            {" "}
            <img src={emptyCart} alt="" /> <p>Your Cart Is Empty!</p>
            <button onClick={() => navigate("/products")}>
              Explore the store
            </button>
          </div>
        ) : (
          cartState?.map((item) => (
            <li>
              <CardCart {...item} />
            </li>
          ))
        )}
      </ul>

      {cartState?.length > 0 && (
        <div className="total_price_details">
          <h3 className="total_price_heading">Price Details</h3>
          <hr />
          <div className="total_price">
            <p>Total price ({cartState?.length} item)</p>
            <p>₹ {totalCartPrice}</p>
          </div>
          <div className="discounted_price">
            <p>Discount (40% off)</p>
            <p>₹ - {discount}</p>
          </div>
          <hr />
          <div className="final_total_price">
            <p>Total Amount</p>
            <p>₹ {totalAmount}</p>
          </div>
          <hr />
          <button
            className="checkout_btn"
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};
