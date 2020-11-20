import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className=''><p className='text-white'>UseContext</p></Link>

      <div className="collapse navbar-collapse ml-5" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            exact
            activeClassName="active"
            className="nav-link"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            exact
            activeClassName="active"
            className="nav-link"
            to="/login"
          >
            Login
          </NavLink>

          <NavLink
            exact
            activeClassName="active"
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
