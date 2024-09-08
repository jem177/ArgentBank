import { Link } from "react-router-dom";
import Navigation from "../Navigation";

import "./style.css";
import logo from "/src/assets/img/argentBankLogo.webp";

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
