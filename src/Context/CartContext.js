import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";

import { useAuthContext } from "./AuthContext";
import { cartReducer } from "../Reducer/CartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { authState } = useAuthContext();

  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const [cartLoading, setCartLoading] = useState(false);

  const getCart = async () => {
    setCartLoading(true);
    try {
      const { status, data } = await axios({
        method: "get",
        url: "/api/user/cart",
        headers: { authorization: authState?.token },
      });

      if (status === 200) {
        cartDispatch({ type: "get_cart", payload: data?.cart });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCartLoading(false);
    }
  };
  useEffect(() => {
    if (authState?.token) {
      getCart();
    }
  }, [authState?.token]);

  const isPresentInCart = (product) =>
    cartState?.findIndex((item) => item?._id === product?._id);

  const addToCart = async (cartItem) => {
    try {
      const { status, data } = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: authState?.token },
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
        headers: { authorization: authState?.token },
      });

      if (status === 200) {
        cartDispatch({ type: "get_cart", payload: data?.cart });
        // toast.error("item is removed from cart");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const changeCartQuantity = async (productId, updateType) => {
    try {
      const { status, data } = await axios({
        method: "post",
        url: `/api/user/cart/${productId}`,
        data: { action: { type: updateType } },
        headers: { authorization: authState?.token },
      });
      if (status === 200) {
        cartDispatch({ type: "get_cart", payload: data?.cart });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const totalCartPrice = cartState?.reduce(
    (acc, crr) => (acc += crr.qty * crr.price),
    0
  );

  const discount = Math.trunc((40 / 100) * totalCartPrice);

  const totalAmount = totalCartPrice - discount;

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addToCart,
        isPresentInCart,
        removeFromCart,
        changeCartQuantity,
        totalCartPrice,
        discount,
        totalAmount,
        cartLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
