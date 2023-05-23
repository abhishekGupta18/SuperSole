import { useReducer } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { authReducer } from "../Reducer/AuthReducer";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    userInfo: {},
    token: "",
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
        localStorage.setItem("userToken", data.encodedToken);
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
        localStorage.setItem("userToken", data.encodedToken);
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ userSignUp, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
