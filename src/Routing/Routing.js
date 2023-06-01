import { useLocation, Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export const ReqRouting = ({ children }) => {
  const {
    authState: { token },
  } = useAuthContext();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
