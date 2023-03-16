import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
const App = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light fixed-top">
        <img className="logo1" src={logo} alt="logo" />
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" smooth to="#home">
              Home
            </Link>
            <Link className="nav-item nav-link active" smooth to="#services">
              services
            </Link>
            <Link className="nav-item nav-link active" smooth to="#contactus">
              Contact Us
            </Link>
            <div className="p1">
            <div style={{ display: "flex", marginLeft: "800px" }}>
              <form className="form-inline ml-auto ">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <div style={{ marginLeft: "7px"}}>
              <button
                  type="button"
                  className="btn btn-outline-secondary ml-auto "
                  onClick={()=>navigate("/login")}
                >
                  Register
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-auto "
                  onClick={() => navigate("/register")}
                >
                  Login
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  );
};
export default App;
