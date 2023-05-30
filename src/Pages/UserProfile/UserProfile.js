import { NavLink } from "react-router-dom";

import { toast } from "react-toastify";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./UserProfile.css";

export const UserProfile = () => {
  const {
    userLogout,
    authState: {
      userInfo: { name, email },
    },
  } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/");
    toast.error("Logged out!");
  };

  return (
    <div className="profile_page">
      <div className="my_account">
        <h2>My Account</h2>
        <div className="user_profile">
          <div className="profile_heading">
            <h3>User Profile</h3>

            <NavLink to="/userAddress">
              {" "}
              <button>Manage Address</button>{" "}
            </NavLink>
          </div>
          <p>
            <strong>Name: </strong>
            {name}
          </p>
          <p>
            {" "}
            <strong>Email: </strong>
            {email}
          </p>
          <button className="logout_btn" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
