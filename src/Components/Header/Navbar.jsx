import { useAuthContext } from "Context/AuthContext";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuth, dispatch } = useAuthContext()


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Navbar
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link active">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex navbar-dashbord">
              {!isAuth ?
                <li className="nav-item bg-danger">
                  <Link to="/Dashbord" className="nav-link active">
                    Dashbord
                  </Link></li>
                :
                
                <li className="nav-item bg-success">
                  <Link to="/Auth" className="nav-link active">
                    Login
                  </Link> 
                  </li>
              }

               
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
