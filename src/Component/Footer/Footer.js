import "./Footer.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

export const Footer = () => {
  const goToTopBtnHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer_section">
        <div className="social_links">
          <h3>CONNECT WITH ME</h3>
          <div className="social_btn">
            <NavLink to="https://twitter.com/Abhishek12703">
              {" "}
              <button>
                <TwitterIcon />
              </button>
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/abhishekgupta12703/">
              {" "}
              <button>
                <LinkedInIcon />
              </button>
            </NavLink>
            <NavLink to="https://github.com/abhishekGupta18">
              {" "}
              <button>
                <GitHubIcon />
              </button>
            </NavLink>
          </div>
        </div>
        <div className="tag_line">
          <h2>SuperSole</h2>
          <p>The essence of perfect shoes.</p>
        </div>
        <div className="policies">
          <h3>QUICK LINKS</h3>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/products")}>Explore</li>
            <li onClick={() => navigate("/cart")}>Cart</li>
            <li onClick={() => navigate("/wishlist")}>Wishlist</li>
          </ul>
        </div>
      </div>
      <p
        style={{
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "1rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        Copyright ©2023 All rights reserved | This template is made by Abhishek
        Gupta.
      </p>{" "}
      <div className="upward_icon" onClick={goToTopBtnHandler}>
        <ArrowCircleUpOutlinedIcon />
      </div>
    </div>
  );
};
