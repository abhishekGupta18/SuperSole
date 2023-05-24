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
    confirmPassword: true,
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
          <input
            required
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
            required
            onChange={(e) =>
              setSignUpData({
                ...signUpData,
                confirmPassword:
                  signUpData.password === e.target.value ? true : false,
              })
            }
          />
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
