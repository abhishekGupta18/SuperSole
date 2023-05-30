import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { addressReducer } from "../Reducer/AddressReducer";
import { useAuthContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const { authState } = useAuthContext();

  const [addressState, addressDispatch] = useReducer(addressReducer, []);

  const getAddresses = async () => {
    try {
      console.log(authState?.token);
      const { status, data } = await axios({
        method: "get",
        url: "/user/addresses",
        headers: { authorization: authState?.token },
      });
      if (status === 200) {
        addressDispatch({ type: "get_user_address", payload: data.address });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAddresses();
  }, []);

  console.log(addressState);

  const addAddress = async (addressInput) => {
    try {
      const {
        status,
        data: { address },
      } = await axios({
        method: "post",
        url: "user/address",
        headers: { authorization: authState?.token },
        address: addressInput,
      });
      if (status === 201) {
        addressDispatch({ type: "get_user_address", payload: address });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AddressContext.Provider value={{ addAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  return useContext(AddressContext);
};
