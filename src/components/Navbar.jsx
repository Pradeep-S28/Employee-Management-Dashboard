import React from "react";

const Navbar = ({ onAddEmployee }) => {
  return (
    <nav className="navbar bg-body-tertiary shadow-sm app-navbar">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Employee Dashboard</span>

        <button
          type="button"
          className="btn btn-primary"
          onClick={onAddEmployee}
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add Employee
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
