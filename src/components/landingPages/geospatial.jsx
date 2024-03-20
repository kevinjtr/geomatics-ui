
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function Geospatial(){
    
   

    return(
        <>
            <h1>
                Geospatial Test
            </h1>
            <li>
            <Link to="/gis" >
                Test to GIS
            </Link>
            </li>
            <li>
            <Link to="/remote-sensing" >
                Test to Remote Sensing
            </Link>
            </li>
            <li>
            <Link to="/data-management" >
                Test to Data Management
            </Link>
            </li>
            <li>
            <Link to="/survey-contracting" >
                Test to Survey/Contracting
            </Link>
            </li>
            <li>
            <Link to="/application-development" >
                Test to Application Development
            </Link>
            </li>
        </>
    )
}