import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuthContext } from "../../Context/AuthContext";

import "./LoginPage.css";
import { useState } from "react";

export const LoginPage = () => {
  const testUserData = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const { userLogin } = useAuthContext();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const checkLogin = () => {
    if (!loginData?.email.trim() || !loginData?.password.trim()) {
      toast.warning("fill all the credentials");
    } else {
      userLogin(loginData);
      toast.success("Logged In!");
    }
  };

  const checkTestLogin = () => {
    setLoginData(testUserData);
    userLogin(loginData);
    toast.success("Logged In!");
  };

  return (
    <div className="login_component">
      <div className="login_page">
        <h3 className="login_head">Sign In</h3>
        <label>
          Email address{" "}
          <input
            type="email"
            placeholder="email"
            value={loginData?.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </label>
        <label>
          Password{" "}
          <input
            type="password"
            placeholder="password"
            value={loginData?.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </label>
        <button className="login" onClick={() => checkLogin()}>
          Login
        </button>
        <button className="login_as_guest" onClick={() => checkTestLogin()}>
          Login as guest
        </button>
        <p>
          Don't have an account? <NavLink to="/signUp">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
};
