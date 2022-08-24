import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Место" className="header__logo" />
      <Link to="" className="header__link">
        <p className="header__link-text">Войти</p>
      </Link>
    </header>
  );
}
export default Header;
