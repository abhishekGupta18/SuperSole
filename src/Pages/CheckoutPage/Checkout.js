import "./Checkout.css";
import { useNavigate } from "react-router-dom";

import { useAddressContext } from "../../Context/AddressContext";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";
export const CheckoutPage = () => {
  const [currentAddress, setCurrentAddress] = useState({});
  const { addressState, setAddressInitialState, resetAddress } =
    useAddressContext();
  const { cartState, totalCartPrice, discount, totalAmount } = useCartContext();

  const navigate = useNavigate();
  console.log(currentAddress);

  return (
    <div className="checkout_page">
      <h2 className="checkout_heading">Checkout</h2>
      <div className="checkout_page_content">
        <div className="checkout_address_list">
          <h3>Select Address</h3>
          <div className="checkout_select_address">
            <ul>
              {addressState?.map((address) => (
                <li className="checkout_actual_address">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="selectAddress"
                      value={address._id}
                      checked={currentAddress._id === address._id}
                      onChange={() => setCurrentAddress(address)}
                    />
                    <div className="checkout_address_details">
                      <h3>{address?.name}</h3>
                      <p>{address?.street}</p>
                      <p>
                        {address.city} - {address.zipcode}
                      </p>
                      <p>
                        {address.state} - {address.country}
                      </p>
                      <p>{address.mobile}</p>
                    </div>
                  </label>
                </li>
              ))}
              <button
                className="add_address_btn"
                onClick={() => {
                  navigate("/addNewAddress");
                  setAddressInitialState(resetAddress);
                }}
              >
                + Add New Address
              </button>
            </ul>
          </div>
        </div>
        <div className="order_summary">
          <h2>Order Summary</h2>
          <hr />
          <div className="product_Quantity">
            <p>Shoes</p>
            <p>Quantity</p>
          </div>
          <ul>
            {cartState?.map((item) => (
              <li className="product_summary">
                <p>{item.name}</p>
                <p>{item.qty}</p>
              </li>
            ))}
          </ul>
          <hr />
          <div className="price_summary">
            <h3>Price Details</h3>
            <div>
              <h4>Total Price</h4>
              <h4>₹ {totalCartPrice}</h4>
            </div>
            <div>
              <h4>Total Discount</h4>
              <h4>₹ - {discount}</h4>
            </div>
            <hr />
            <div>
              <h4>Grand Total</h4>
              <h3>₹ {totalAmount}</h3>
            </div>
            <hr />
          </div>
          <div className="delivery_details">
            <h3>Delivery Details</h3>
            <div className="delivery_address">
              <h3>{currentAddress?.name}</h3>
              <p>{currentAddress?.street}</p>
              <p>
                {currentAddress.city} - {currentAddress.zipcode}
              </p>
              <p>
                {currentAddress.state} - {currentAddress.country}
              </p>
              <p>{currentAddress.mobile}</p>
            </div>
          </div>
          <hr />
          <button className="place_order_btn">Place Order</button>
        </div>
      </div>
    </div>
  );
};
