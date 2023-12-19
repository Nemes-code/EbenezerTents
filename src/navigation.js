import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <Link to="/" className="btn btn-primary">
              UseEffect
            </Link>{" "}
            <Link to="/red" className="btn btn-primary">
              UseReducer
            </Link>
            <Link to="/stat" className="btn btn-primary">
              UseState
            </Link>
            <Link to="/cont" className="btn btn-primary">
              UseContext
            </Link>
            <Link to="/imp" className="btn btn-primary">
              UseImperative
            </Link>
            <Link to="/ref" className="btn btn-primary">
              UseRef
            </Link>
            <Link to="/mem" className="btn btn-primary">
              UseContext
            </Link>
            <Link to="/call" className="btn btn-primary">
              UseImperative
            </Link>
            <Link to="/layo" className="btn btn-primary">
              UseRef
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-3">{children}</div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default Header;
