import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      {/* LOGO */}
      <div className="nav-left" onClick={() => nav("/")}>
        <img src={logo} alt="CoreBuild" className="nav-logo" />
      </div>

      {/* DESKTOP NAV */}
      <div className="nav-center">
        <span onClick={() => nav("/")}>HOME</span>
        <span onClick={() => nav("/about")}>ABOUT</span>
        <span onClick={() => nav("/services")}>SERVICES</span>
        <span onClick={() => nav("/contact")}>CONTACT</span>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <span onClick={() => { nav("/"); setOpen(false); }}>HOME</span>
        <span onClick={() => { nav("/about"); setOpen(false); }}>ABOUT</span>
        <span onClick={() => { nav("/services"); setOpen(false); }}>SERVICES</span>
        <span onClick={() => { nav("/contact"); setOpen(false); }}>CONTACT</span>
      </div>
    </div>
  );
}