
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function DataManagement(){
    
   

    return(
        <>
            <h1>
                Data Management Test
            </h1>
            <p>
            <Link to="/dmapplications" >
                Test to Data Management Applications
            </Link>
            
            </p>
            <p>
            <Link to="/dmprojects" >
                Test to Data Management Projects
            </Link>
            </p>
            
        </>
    )
}