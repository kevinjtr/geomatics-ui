import React from "react";
import { Link } from "react-router-dom";
import ButtonAppBar from "./nested-app-bar";

export const Navigation = (props) => {
  return (
    <nav style={{marginBottom: '0px', borderRadius:0}} id="menu" className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <img src="../img/saj_usace_logo.jpg" alt="title" style={{float:"left", width:"80px", paddingRight:"10px"}}/>
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
<<<<<<< Updated upstream
              <Link to="/gisapplications" style={{color:"white"}}>
                GIS Apps
              </Link>
            </li>
            <li>
              <Link to="/gisprojects" style={{color:"white"}}>
                GIS Projects
              </Link>
=======
              <ButtonAppBar/>
              {/* <Link to="/geospatial" style={{color:"white"}}>
                Geospatial
              </Link> */}
>>>>>>> Stashed changes
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
