import React from "react";
import { Link } from "react-router-dom";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/" reloadDocument>
            React Landing Page
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/gisapplications" className="page-scroll">
                GIS Applications
              </Link>
            </li>
            <li>
              <a href="#training" className="page-scroll">
                Training
              </a>
            </li>
            <li>
              <a href="#support-services" className="page-scroll">
                Support Services
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Request Work
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
