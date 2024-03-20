
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function AppDevelopment(){
    
   

    return(
        <>
            <h1>
                Application Development Test
            </h1>
            <p>
            <Link to="/adapplications" >
                Test to Application Development Applications
            </Link>
            
            </p>
            <p>
            <Link to="/adprojects" >
                Test to Application Development Projects
            </Link>
            </p>
            
        </>
    )
}