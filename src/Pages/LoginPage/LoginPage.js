import { NavLink } from "react-router-dom";

import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="login_component">
      <div className="login_page">
        <h3 className="login_head">Sign In</h3>
        <label>
          Email address <input type="text" placeholder="email" />
        </label>
        <label>
          Password <input type="password" placeholder="password" />
        </label>
        <button className="login">Login</button>
        <button className="login_as_guest">Login as guest</button>
        <p>
          Don't have an account? <NavLink to="/signUp">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
};
