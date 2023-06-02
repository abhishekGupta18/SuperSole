import "./PageNotFound.css";

import ErrorImage from "../../Asset/pageNotFound.png";
import { useNavigate } from "react-router-dom";
export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page_not_found">
      <img src={ErrorImage} alt="page-not-found" />
      <button onClick={() => navigate("/")}>Go to home</button>
    </div>
  );
};
