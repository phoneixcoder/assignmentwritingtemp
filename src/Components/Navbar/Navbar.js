import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Footer/logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top  navbar-expand-lg py-2">
        <div className="container-fluid px-lg-5 px-sm-2">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt="assignmentcure-logo" />
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav navbarLink mb-2 mb-lg-0 gap-lg-3 gap-sm-1">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/code">
                      Coding Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/homework">
                      HomeWork Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/essaywrite">
                      Essay Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dissertation">
                      Dissertation Writing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/casestudy">
                      Case Study
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/research">
                      Research Paper
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  BLOGS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  WRITERS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  WRITING TOOLS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/about">
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <Link to="/quote">
              <button type="button" className="hire-btn btn">
                Get A Quote
              </button>
            </Link>
            <button type="button" className="btn login-btn">
              LOGIN
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
