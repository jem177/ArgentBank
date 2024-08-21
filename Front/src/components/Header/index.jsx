import { Link } from "react-router-dom";
import Navigation from "../Navigation";

import logo from "/src/assets/img/argentBankLogo.png";
import "./style.css";

export default function Header() {
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Navigation />
      </nav>
    </>
  );
}
