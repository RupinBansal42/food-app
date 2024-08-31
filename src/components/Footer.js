import { facebookURL, instaLogoURL } from "../../config/constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="nav-items">
        <ul>
          <li>Policies</li>
          <li>About Us</li>
          <li> Contact Us</li>
          <li> Contact Details</li>
        </ul>
      </div>
      <div className="logo-footer">
        <img className="facebook-logo" src={facebookURL}></img>
        <img className="insta-logo" src={instaLogoURL}></img>
      </div>
    </div>
  );
};

export default Footer;
