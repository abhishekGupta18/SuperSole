import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";

import { cartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const token = localStorage.getItem("userToken");

  const [cartState, cartDispatch] = useReducer(cartReducer, []);

  const getCart = async () => {
    try {
      const { status, data } = await axios({
        method: "get",
        url: "/api/user/cart",
        headers: { authorization: token },
      });

      if (status === 200) {
        cartDispatch({ type: "get_cart", payload: data?.cart });
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  const isPresentInCart = (product) =>
    cartState?.findIndex((item) => item?._id === product?._id);

  const addToCart = async (cartItem) => {
    try {
      const { status, data } = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: token },
        data: { product: cartItem },
      });

      if (status === 201) {
        cartDispatch({ type: "get_cart", payload: data?.cart });
        toast.success("item is added to the cart");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const { status, data } = await axios({
        method: "delete",
        url: `/api/user/cart/${productId}`,
        headers: { authorization: token },
      });

      if (status === 200) {
        cartDispatch({ type: "get_cart", payload: data?.cart });
        toast.error("item is removed from cart");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        isPresentInCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
