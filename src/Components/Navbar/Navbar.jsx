import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#333", color: "#fff", padding: "25px", position: "fixed", top: 0, width: "100%", textAlign: "center" }}>
      <nav>
        <NavLink to="/home" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>
          About
        </NavLink>
        <NavLink to="/contact" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
