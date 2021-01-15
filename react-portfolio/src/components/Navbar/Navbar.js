import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import symbol from '../../assets/images/symbol.png';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" >
        <img className="symbol"
            src={symbol}
            alt="deifiedsymbol"
            width="5%"
            height="auto"
        //   display="block"
        />

        <Link className="navbar-brand" to="/about">
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
        >
        About
        </Link>
        <Link
        to="/portfolio"
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
        >
        Contact
        </Link>
      </nav>
    </div>
  );
}
