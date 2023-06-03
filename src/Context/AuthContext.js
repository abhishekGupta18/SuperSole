import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { authReducer } from "../Reducer/AuthReducer";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const localStorageItem = JSON.parse(localStorage.getItem("data"));
  const location = useLocation();
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    userInfo: {},
    token: localStorageItem?.token || null,
  });

  const userSignUp = async (signUpData) => {
    try {
      const { status, data } = await axios({
        method: "POST",
        url: "/api/auth/signup",
        data: signUpData,
      });

      if (status === 201) {
        authDispatch({ type: "user_login", payload: true });
        authDispatch({ type: "user_info", payload: data.createdUser });
        authDispatch({ type: "user_token", payload: data.encodedToken });
        localStorage.setItem(
          "data",
          JSON.stringify({ user: data?.createdUser, token: data?.encodedToken })
        );
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const userLogin = async (loginData) => {
    try {
      const { status, data } = await axios({
        method: "POST",
        url: "/api/auth/login",
        data: loginData,
      });
      if (status === 200) {
        authDispatch({ type: "user_login", payload: true });
        authDispatch({ type: "user_info", payload: data.foundUser });
        authDispatch({ type: "user_token", payload: data.encodedToken });
        localStorage.setItem(
          "data",
          JSON.stringify({ user: data?.foundUser, token: data?.encodedToken })
        );
        navigate(location?.state?.from?.pathname || "/", { replace: true });
        toast.success("logged in!");
      }
    } catch (e) {
      console.error(e);
      toast.error("write correct credentials!");
    }
  };

  const userLogout = () => {
    authDispatch({ type: "user_login", payload: false });
    authDispatch({ type: "user_info", payload: {} });
    authDispatch({ type: "user_token", payload: null });
    localStorage.removeItem("data");
  };

  useEffect(() => {
    if (localStorageItem) {
      authDispatch({ type: "user_info", payload: localStorageItem?.user });
      authDispatch({ type: "user_token", payload: localStorageItem?.token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userSignUp,
        userLogin,
        authState,
        authReducer,
        userLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
