/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Employee Management System
        </a>
        <Link to="/allEmployees" className="btn btn-dark text-decoration-none">
          List of all Employees
        </Link>
      </div>
    </nav>
  );
};
