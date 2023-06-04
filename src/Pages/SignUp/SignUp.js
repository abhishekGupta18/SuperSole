import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";

import "./SignUp.css";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const SignUp = () => {
  const { userSignUp } = useAuthContext();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleUserSignUp = (event) => {
    event.preventDefault();
    if (signUpData?.confirmPassword === signUpData?.password) {
      userSignUp(signUpData);
    } else {
      toast.error("write correct passwords");
    }
  };

  return (
    <div className="signup_component">
      <form onSubmit={handleUserSignUp} className="signup_page">
        <h3 className="signup_heading">Sign Up</h3>
        <label>
          Name{" "}
          <input
            type="text"
            required
            name="name"
            placeholder="name"
            value={signUpData?.name}
            onChange={(e) =>
              setSignUpData({ ...signUpData, name: e.target.value })
            }
          />
        </label>
        <label>
          Email address{" "}
          <input
            required
            type="email"
            name="email"
            placeholder="email"
            value={signUpData?.email}
            onChange={(e) =>
              setSignUpData({ ...signUpData, email: e.target.value })
            }
          />
        </label>
        <label>
          Password{" "}
          <div className="show_signup_password">
            <input
              required
              type={showPassword?.password ? "text" : "password"}
              name="password"
              placeholder="password"
              value={signUpData?.password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
            />
            {showPassword.password ? (
              <button
                onClick={(e) => {
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  });
                  e.preventDefault();
                }}
              >
                <VisibilityIcon />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  });
                  e.preventDefault();
                }}
              >
                <VisibilityOffIcon />
              </button>
            )}
          </div>
        </label>
        <label>
          Confirm Password{" "}
          <div className="show_signup_confirm_Password">
            <input
              type={showPassword?.confirmPassword ? "text" : "password"}
              placeholder="confirm password"
              name="confirmPassword"
              required
              onChange={(e) =>
                setSignUpData({
                  ...signUpData,
                  confirmPassword: e.target.value,
                })
              }
            />
            {showPassword.confirmPassword ? (
              <button
                type="submit"
                onClick={(e) => {
                  setShowPassword({
                    ...showPassword,
                    confirmPassword: !showPassword.confirmPassword,
                  });
                  e.preventDefault();
                }}
              >
                <VisibilityIcon />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  setShowPassword({
                    ...showPassword,
                    confirmPassword: !showPassword.confirmPassword,
                  });
                  e.preventDefault();
                }}
              >
                <VisibilityOffIcon />
              </button>
            )}
          </div>
        </label>
        <button type="submit" className="signup_btn">
          Create new account
        </button>
        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};
