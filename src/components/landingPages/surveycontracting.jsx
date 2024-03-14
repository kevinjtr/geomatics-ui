
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function SurveyContracting(){
    
   

    return(
        <>
            <h1>
                Survey/Contracting Test
            </h1>
            <p>
            <Link to="/scapplications" >
                Test to Survey/Contracting Applications
            </Link>
            
            </p>
            <p>
            <Link to="/scprojects" >
                Test to Survey/Contracting Projects
            </Link>
            </p>
            
        </>
    )
}