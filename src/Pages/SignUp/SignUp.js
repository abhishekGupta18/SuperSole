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
    confirmPassword: true,
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleUserSignUp = (event) => {
    event.preventDefault();
    userSignUp(signUpData);
    toast.success("Signed up!");
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
              placeholder="password"
              value={signUpData?.password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
            />
            {showPassword.password ? (
              <button
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })
                }
              >
                <VisibilityIcon />
              </button>
            ) : (
              <button
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    password: !showPassword.password,
                  })
                }
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
              required
              onChange={(e) =>
                setSignUpData({
                  ...signUpData,
                  confirmPassword:
                    signUpData.password === e.target.value ? true : false,
                })
              }
            />
            {showPassword.confirmPassword ? (
              <button
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirmPassword: !showPassword.confirmPassword,
                  })
                }
              >
                <VisibilityIcon />
              </button>
            ) : (
              <button
                onClick={() =>
                  setShowPassword({
                    ...showPassword,
                    confirmPassword: !showPassword.confirmPassword,
                  })
                }
              >
                <VisibilityOffIcon />
              </button>
            )}
          </div>
        </label>
        {!signUpData.confirmPassword && <p> password doesn't match</p>}
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
