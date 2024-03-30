import "./navbar.css";
import { CloseOutlined, Menu } from "@material-ui/icons";
import { useState } from "react";
import { FaSmile } from "react-icons/fa";
import { Link } from "react-router-dom";

const menu = [
  { id: 1, to: "/", navTitle: "Home" },
  { id: 2, to: "/blog", navTitle: "Blog" },
  { id: 3, to: "/portfolio", navTitle: "Portfolio" },
  { id: 4, to: "/gallery", navTitle: "Gallery" },
  { id: 5, to: "/contact", navTitle: "Contact" },
  { id: 6, to: "/about", navTitle: "About" },
];

const Navbar = () => {
  const [IsClicked, setIsClicked] = useState(false);
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <Link className="title" to="/">
          Alw<span className="title_center">a</span>ys
          <FaSmile className="logo_icon" />
        </Link>
        <ul className={IsClicked ? "nav_lists_md_sm" : "nav_lists"}>
          {menu.map((item) => (
            <li key={item.id} className="nav_item">
              <Link className="nav_link" to={item.to}>
                {item.navTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {IsClicked === true ? (
        <CloseOutlined
          className="closed_icon"
          onClick={() => setIsClicked(!IsClicked)}
        />
      ) : (
        <Menu
          className="menu_icon"
          style={{ display: "none", width: "30px" }}
          onClick={() => setIsClicked(!IsClicked)}
        />
      )}
    </div>
  );
};

export default Navbar;
