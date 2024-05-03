import React from 'react';
import { NavLink } from 'react-router-dom';
import './appnavbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>Overview</NavLink>
      <NavLink to="/environment-variable" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>Environment Variable</NavLink>
      <NavLink to="/alerts" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>Alerts</NavLink>
      <NavLink to="/history" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>Event History</NavLink>
    </nav>
  );
};

export default Navbar;
