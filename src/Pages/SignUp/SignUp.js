import { NavLink } from "react-router-dom";

import "./SignUp.css";

export const SignUp = () => {
  return (
    <div className="signup_component">
      <div className="signup_page">
        <h3 className="signup_heading">Sign Up</h3>
        <label>
          Name <input type="text" placeholder="name" />
        </label>
        <label>
          Email address <input type="text" placeholder="email" />
        </label>
        <label>
          Password <input type="password" placeholder="password" />
        </label>
        <label>
          Confirm Password{" "}
          <input type="password" placeholder="confirm password" />
        </label>
        <button className="signup_btn">Create new account</button>
        <p>
          Already have an account? <NavLink to="/login">Sign in</NavLink>{" "}
        </p>
      </div>
    </div>
  );
};
