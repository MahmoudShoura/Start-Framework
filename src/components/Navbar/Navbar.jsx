import { Link, NavLink } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar m-auto navbar-expand-lg bg-main-color py-4">
        <div className="container">
          <Link className="navbar-brand text-white fs-2 fw-bolder text-uppercase" to="/">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink className="nav-link text-white text-uppercase fw-bold" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase fw-bold" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>{" "}
              <li className="nav-item">
                <NavLink className="nav-link text-white text-uppercase fw-bold" to="/contact">
                  Contact
                </NavLink>
              </li>{" "}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
