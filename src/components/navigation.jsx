import React from "react";
import { Link } from "react-router-dom";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <img src="..\img\Army Star.png" alt="title" style={{float:"left", width:"60px", paddingRight:"10px"}}/>
          <img src="..\img\Castle.png" alt="title" style={{float:"left", width:"80px", paddingRight:"10px"}}/>
          <Link className="navbar-brand page-scroll" to="/" reloadDocument style={{color:"white"}}>
            Geomatics
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/geospatial" style={{color:"white"}}>
                Geospatial
              </Link>
            </li>
            <li>
              <Link to="/training" style={{color:"white"}}>
                Training
              </Link>
            </li>
            <li>
              <Link to="/supportservices" style={{color:"white"}} >
                Support Services
              </Link>
            </li>
            <li>
              <Link to="/requestwork" style={{color:"white"}}>
                Request Work
              </Link>
            </li>
            <li>
              <Link to="/aboutus" style={{color:"white"}}>
                About Us
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
