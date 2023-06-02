import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAddressContext } from "../../Context/AddressContext";
import { useCartContext } from "../../Context/CartContext";
import { useState } from "react";

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const CheckoutPage = () => {
  const [currentAddress, setCurrentAddress] = useState({});
  const { addressState, setAddressInitialState, resetAddress } =
    useAddressContext();
  const { cartState, totalCartPrice, discount, totalAmount, removeFromCart } =
    useCartContext();

  const navigate = useNavigate();

  const displayRazorpay = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      alert("Razorpay SDK failed to load, check you internet connection");
      return;
    }
    const options = {
      key: "rzp_test_rRBXl8qxWCNl8d",
      amount: Number(totalAmount) * 100,
      currency: "INR",
      name: "Super Sole",
      description: "Thank you for shopping with us",
      handler: function () {
        toast.success(`Payment of Rs. ${totalAmount} is Succesful`);
        navigate("/");
        cartState.map((item) => removeFromCart(item._id));
      },
      theme: {
        color: "#2563eb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
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
          <button
            className="place_order_btn"
            onClick={() => {
              Object.keys(currentAddress).length === 0
                ? toast.error("select an address first")
                : displayRazorpay();
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};
