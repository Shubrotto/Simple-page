import "./footer.css";
import { FaSmile } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        CopyRight by Alw<span className="footer_a">a</span>ys
        <FaSmile className="logo_icon" />
      </p>
    </div>
  );
};

export default Footer;
