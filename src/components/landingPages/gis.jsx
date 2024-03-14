
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function GIS(){
    
   

    return(
        <>
            <h1>
                GIS Test
            </h1>
            <p>
            <Link to="/gisapplications" >
                Test to GIS Applications
            </Link>
            
            </p>
            <p>
            <Link to="/gisprojects" >
                Test to GIS Projects
            </Link>
            </p>
            
        </>
    )
}