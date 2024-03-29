import "./navbar.css";
import { Menu } from "@material-ui/icons";
import { FaSmile } from "react-icons/fa";

const menu = [
  { id: 1, navTitle: "Home" },
  { id: 2, navTitle: "Blog" },
  { id: 3, navTitle: "Portfolio" },
  { id: 4, navTitle: "Contact" },
  { id: 5, navTitle: "About" },
];

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <h1 className="title">
          Alw<span className="title_center">a</span>ys
          <FaSmile className="logo_icon" />
        </h1>
        <Menu
          className="menu_icon"
          style={{ display: "none", width: "30px" }}
        />
        <ul className="nav_lists">
          {menu.map((item) => (
            <li key={item.id} className="nav_item">
              <a>{item.navTitle}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
