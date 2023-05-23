import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuthContext } from "../../Context/AuthContext";

import "./SignUp.css";
import { useState } from "react";

export const SignUp = () => {
  const { userSignUp } = useAuthContext();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const checkSignUp = () => {
    if (
      !signUpData?.name.trim() ||
      !signUpData?.email.trim() ||
      !signUpData?.password.trim() ||
      !signUpData?.confirmPassword.trim()
    ) {
      toast.warning("fill all the credentials");
    } else if (signUpData?.password !== signUpData?.confirmPassword) {
      toast.warning("password don't match");
    } else {
      userSignUp(signUpData);
      toast.success("Signed up!");
    }
  };

  return (
    <div className="signup_component">
      <div className="signup_page">
        <h3 className="signup_heading">Sign Up</h3>
        <label>
          Name{" "}
          <input
            type="text"
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
            type="text"
            placeholder="email"
            value={signUpData?.email}
            onChange={(e) =>
              setSignUpData({ ...signUpData, email: e.target.value })
            }
          />
        </label>
        <label>
          Password{" "}
          <input
            type="password"
            placeholder="password"
            value={signUpData?.password}
            onChange={(e) =>
              setSignUpData({ ...signUpData, password: e.target.value })
            }
          />
        </label>
        <label>
          Confirm Password{" "}
          <input
            type="password"
            placeholder="confirm password"
            value={signUpData?.confirmPassword}
            onChange={(e) =>
              setSignUpData({ ...signUpData, confirmPassword: e.target.value })
            }
          />
        </label>
        <button className="signup_btn" onClick={() => checkSignUp()}>
          Create new account
        </button>
        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>{" "}
        </p>
      </div>
    </div>
  );
};
