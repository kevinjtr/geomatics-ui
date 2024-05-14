import { useState, useEffect } from "react";
import Landing from "../../templates/landing"
import { Link, useLocation, useHref } from "react-router-dom";

export function Geospatial(){
        const location = useLocation()
        const href = useHref()
        console.log(location, href)
   return(
    <Landing/>
   )

    //return(
      
            //<Landing 
            //data={projectPageData.Apps}
            ///>
    //)
}