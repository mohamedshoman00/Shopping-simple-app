import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
  // const [state, setState] = useState({ display: "", isActive: false });
  const styled = ({ isActive }) =>
    isActive ? { color: "white" } : { color: "#bdbdbd" };

  const handleToggle = (e) => {
    const btn = e.target.closest("button");
    // if (state.display === "") {
    //   const style = { display: "block" };
    //   setState({ ...state, display: "block" });
    // } else setState({ ...state, display: "" });
  };
  // console.log(state);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          Shopping Chart
        </NavLink>
        <button
          id="btn-toggle"
          onClick={handleToggle}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse .text-light" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" style={styled} to="/">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={styled} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={styled} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={styled} to="/cart">
                Shopping Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={styled} to="admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={styled} to="login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <span id="counter1" className="badge bg-primary">
          {props.productsCount}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
