import "./navbar.css";
import { CloseOutlined, Menu } from "@material-ui/icons";
import { useState } from "react";
import { FaSmile } from "react-icons/fa";

const menu = [
  { id: 1, navTitle: "Home" },
  { id: 2, navTitle: "Blog" },
  { id: 3, navTitle: "Portfolio" },
  { id: 4, navTitle: "Gallery" },
  { id: 5, navTitle: "Contact" },
  { id: 6, navTitle: "About" },
];

const Navbar = () => {
  const [IsClicked, setIsClicked] = useState(false);
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <a className="title" href="#">
          Alw<span className="title_center">a</span>ys
          <FaSmile className="logo_icon" />
        </a>
        <ul className={IsClicked ? "nav_lists_md_sm" : "nav_lists"}>
          {menu.map((item) => (
            <li key={item.id} className="nav_item">
              <a>{item.navTitle}</a>
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
