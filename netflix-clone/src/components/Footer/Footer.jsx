import React from "react";
// The CSS is correctly imported here, making the <style> block unnecessary.
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  // Data structure for the four columns of links
  const links = [
    ["Audio Description", "Investor Relations", "Legal Notices", "Help Center"],
    ["Gift Cards", "Terms of Use", "Cookie Preferences", "Jobs"],
    ["Media Center", "Privacy", "Contact Us", "Account"],
    ["Redeem Gift Cards", "Buy Gift Cards", "Ways to Watch", "Information"],
  ];

  const socialIcons = [
    { Icon: FacebookIcon, link: "#" },
    { Icon: InstagramIcon, link: "#" },
    { Icon: TwitterIcon, link: "#" },
    { Icon: YouTubeIcon, link: "#" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      {/* The line <style>{FOOTER_STYLES}</style> was REMOVED. 
        The CSS is already included via 'import "./footer.css";'.
      */}

      <div className="footer-content">
        {/* Social Icons Section */}
        <div className="social-icons">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* MUI Icons are used here */}
              <item.Icon className="MuiSvgIcon-root" />
            </a>
          ))}
        </div>

        {/* Links Grid Section */}
        <div className="links-grid">
          {links.map((column, colIndex) => (
            <ul key={colIndex} className="link-list">
              {column.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Service Code and Language */}
        <div className="footer-actions">
          <button className="service-code-btn">Service Code</button>

          {/* Language Selector (using MUI Language icon) */}
          <div className="language-selector-group">
            {/* Using className is often preferred over inline style in components */}
            <LanguageIcon
              className="MuiSvgIcon-root"
              style={{ fontSize: "16px" }}
            />
            <select className="language-selector">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          © 1997-{currentYear} Netflix, Inc. (Clone Demo)
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component directly
export default Footer;
