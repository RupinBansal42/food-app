import { facebookURL, instaLogoURL } from "../../config/constants";

const Footer = () => {
  return (
    <div class="flex justify-between bg-blue-400 text-cyan-50 shadow-lg m-2 mb-4 mt-4 px-2">
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
