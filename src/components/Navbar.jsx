import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
          <button class="btn btn-outline-success me-2" type="button">
            <a class="nav-link" href="/">
              Home
            </a>
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            <a class="nav-link" href="/add">
              Add Employee
            </a>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;