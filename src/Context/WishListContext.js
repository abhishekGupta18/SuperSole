import { useContext, useReducer } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

import { wishListReducer } from "../Reducer/WishListReducer";
import axios from "axios";
import { useEffect } from "react";

export const WishListContext = createContext();

export const WishListContextProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(wishListReducer, []);
  const token = localStorage.getItem("userToken");

  const getWishlist = async () => {
    try {
      const { status, data } = await axios({
        method: "get",
        url: "/api/user/wishlist",
        headers: { authorization: token },
      });

      if (status === 200) {
        wishListDispatch({ type: "get_wishList", payload: data?.wishlist });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const addToWishList = async (wishlistData) => {
    try {
      const { status, data } = await axios({
        method: "post",
        url: "/api/user/wishlist",
        headers: { authorization: token },
        data: { product: wishlistData },
      });

      if (status === 201) {
        wishListDispatch({ type: "get_wishList", payload: data?.wishlist });
        toast.success("item is added to the wishlist");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromWishlist = async (dataId) => {
    try {
      const { status, data } = await axios({
        method: "delete",
        url: `/api/user/wishlist/${dataId}`,
        headers: { authorization: token },
      });

      if (status === 200) {
        wishListDispatch({ type: "get_wishList", payload: data?.wishlist });
        toast.error("item is removed from  the wishlist");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const isPresentInWishList = (product) =>
    wishListState?.findIndex((item) => item._id === product._id);

  return (
    <WishListContext.Provider
      value={{
        wishListState,
        addToWishList,
        isPresentInWishList,
        removeFromWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishListContext = () => {
  return useContext(WishListContext);
};
