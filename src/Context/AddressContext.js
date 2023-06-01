import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useReducer, useState, useContext, createContext } from "react";

import { addressReducer } from "../Reducer/AddressReducer";
import { useAuthContext } from "./AuthContext";

import { toast } from "react-toastify";

import { useEffect } from "react";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const resetAddress = {
    name: "",
    street: "",
    city: "",
    zipcode: "",
    state: "",
    country: "",
    mobile: "",
  };
  const [addressInitialState, setAddressInitialState] = useState(resetAddress);

  const navigate = useNavigate();
  const { authState } = useAuthContext();

  const [addressState, addressDispatch] = useReducer(addressReducer, []);

  const getAddresses = async () => {
    try {
      const { status, data } = await axios({
        method: "get",
        url: "/api/user/addresses",
        headers: { authorization: authState?.token },
      });
      console.log(status, data, addressState);

      if (status === 200) {
        addressDispatch({ type: "get_user_address", payload: data.address });
      }
    } catch (e) {
      console.log("hi", addressState);
      console.error(e);
    }
  };

  useEffect(() => {
    getAddresses();
  }, [authState?.token]);

  const addAddress = async (addressInput) => {
    try {
      const { status, data } = await axios({
        method: "post",
        url: "/api/user/address",
        headers: { authorization: authState?.token },
        data: { address: addressInput },
      });

      if (status === 201) {
        addressDispatch({ type: "get_user_address", payload: data?.address });
        toast.success("New addresss is added successfully");
        navigate("/userAddress");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const deleteAddress = async (addressId) => {
    try {
      const { data, status } = await axios({
        method: "delete",
        url: `/api/user/address/${addressId}`,
        headers: { authorization: authState?.token },
      });
      if (status === 200) {
        addressDispatch({ type: "get_user_address", payload: data?.address });
        toast.success("Removed address succesfully!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const editAddresss = async (addressInput, addressId) => {
    try {
      const { status, data } = await axios({
        method: "post",
        url: `/api/user/address/${addressId}`,
        headers: { authorization: authState?.token },
        data: { address: addressInput },
      });
      if (status === 201) {
        addressDispatch({ type: "get_user_address", payload: data?.address });
        navigate("/userAddress");
      }
    } catch (e) {
      console.error(e);
    }
  };
  console.log(addressState);
  return (
    <AddressContext.Provider
      value={{
        addAddress,
        addressState,
        deleteAddress,
        editAddresss,
        addressInitialState,
        setAddressInitialState,
        resetAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  return useContext(AddressContext);
};
