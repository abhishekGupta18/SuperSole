import { toast } from "react-toastify";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { userLogout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/");
    toast.error("Logged out!");
  };

  return (
    <>
      <h1>Welcome user</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};
