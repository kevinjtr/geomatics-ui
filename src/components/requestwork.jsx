import { Contact } from "./contact"
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
export function RequestWork(){
    
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    return(
        <>
            <Contact data={landingPageData.Gallery}/>
        </>
    )
}