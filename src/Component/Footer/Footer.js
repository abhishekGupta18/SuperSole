import "./Footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_section">
        <div className="social_links">
          <h3>CONNECT WITH ME</h3>
          <div className="social_btn">
            <button>
              <InstagramIcon />
            </button>
            <button>
              <TwitterIcon />
            </button>
            <button>
              <LinkedInIcon />
            </button>
            <button>
              <GitHubIcon />
            </button>
          </div>
        </div>
        <div className="tag_line">
          <h2>SuperSole</h2>
          <p>The essence of perfect shoes.</p>
        </div>
        <div className="policies">
          <h3>POLICIES</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Shipping & Return Policy</li>
            <li>Privacy Policy</li>
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
        }}
      >
        Copyright ©2023 All rights reserved | This template is made by{" "}
        <span style={{ color: "#2563eb" }}>Abhishek Gupta❤️</span>
      </p>
    </div>
  );
};
