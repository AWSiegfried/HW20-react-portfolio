import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import symbol from "../../assets/images/symbol.png";
import Background from "../../assets/images/guitarbody.png";
import Background2 from "../../assets/images/0.png";
import Background3 from "../../assets/images/guitarbody2.png";

export default function Navbar({changeBackground}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <img
          className="symbol"
          src={symbol}
          alt="deifiedsymbol"
          width="5%"
          height="auto"

          //   display="block"
        />

        <Link
          className="navbar-brand"
          to="/about"
          onClick={() => changeBackground(Background2)}
        >
          Alexander Wolfgang Siegfried
        </Link>
        <Link
          to="/about"
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => changeBackground(Background3)}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          onClick={() => changeBackground(Background)}
          className={
            window.location.pathname === "/portfolio"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={
            window.location.pathname === "/contact"
              ? "nav-link active"
              : "nav-link"
          }
          onClick={() => changeBackground(Background2)}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
