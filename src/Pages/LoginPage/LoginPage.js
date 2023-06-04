import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";

import "./LoginPage.css";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

  const [showLoginPassword, setShowLoginPassword] = useState(false);

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
          <div className="show_login_password">
            <input
              type={showLoginPassword ? "text" : "password"}
              required
              placeholder="password"
              value={loginData?.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            {showLoginPassword ? (
              <button
                onClick={(e) => {
                  setShowLoginPassword(!showLoginPassword);
                  e.preventDefault();
                }}
              >
                <VisibilityIcon />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  setShowLoginPassword(!showLoginPassword);
                  e.preventDefault();
                }}
              >
                <VisibilityOffIcon />
              </button>
            )}
          </div>
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
