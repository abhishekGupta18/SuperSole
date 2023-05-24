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

  const handleUserLogin = (event) => {
    event.preventDefault();
    userLogin(loginData);
  };

  return (
    <div className="login_component">
      <form onSubmit={handleUserLogin} className="login_page">
        <h3 className="login_head">Sign In</h3>
        <label>
          Email address{" "}
          <input
            type="email"
            required
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
            required
            placeholder="password"
            value={loginData?.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </label>
        <button type="submit" className="login">
          Login
        </button>
        <button
          type="submit"
          className="login_as_guest"
          onClick={() => setLoginData(testUserData)}
        >
          Login as guest
        </button>
        <p>
          Don't have an account? <NavLink to="/signUp">Sign up</NavLink>
        </p>
      </form>
    </div>
  );
};
