import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export function RemoteSensing(){



    return(
        <>
            <h1>
                Remote Sensing Test
            </h1>
            <p>
            <Link to="/rsapplications" >
                Test to RS Applications
            </Link>

            </p>
            <p>
            <Link to="/rsprojects" >
                Test to RS Projects
            </Link>
            </p>

        </>
    )
}