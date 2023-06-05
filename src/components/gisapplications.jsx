import { Gallery } from "./gallery";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
export function GisApplications(){
    
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    return(
        <>
            <Gallery data={landingPageData.Gallery}/>
        </>
    )
}