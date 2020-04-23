import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue darken-3 px1">
      <NavLink to="/" className="brand-logo">
        React + TS
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Todo List</NavLink>
        </li>
        <li>
          <a href="/">Info</a>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
