import "./Footer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_section">
        <div className="footer_sub_section">
          <ul>
            <li>
              <strong>ABOUT COMPANY </strong>
            </li>
            <li>About us </li>
            <li>Contact us </li>
            <li>Press </li>
            <li>Blog </li>
          </ul>
        </div>
        <div className="footer_sub_section">
          <ul>
            <li>
              <strong>ONLINE SHOPPING </strong>
            </li>
            <li>New Arrivals </li>
            <li>Men </li>
            <li>Women </li>
            <li>Kids </li>
          </ul>
        </div>
        <div className="footer_sub_section">
          <ul>
            <li>
              <strong>POLICIES </strong>
            </li>
            <li>Return Policy </li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
            <li>Shiping Information </li>
          </ul>
        </div>
        <div className="footer_sub_section">
          <ul>
            <li>
              <strong>Customer Services </strong>
            </li>
            <li>FAQ</li>
            <li>Track Your Order</li>
            <li>Return Request</li>
          </ul>
        </div>
      </div>
      <div className="social_links">
        <h3>Created By @abhishekGupta</h3>
        <div className="links">
          <GitHubIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <MailOutlineIcon />
        </div>
      </div>
    </footer>
  );
};
