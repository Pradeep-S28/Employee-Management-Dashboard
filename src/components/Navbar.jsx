import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Employee dashboard</a>
          <button className="btn btn-primary">Add Employee</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
