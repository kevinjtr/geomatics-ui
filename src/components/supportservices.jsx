import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import { Services } from "./services";
export function SupportServices(){
    
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    return(
        <>
            <Services data={landingPageData.Services}/>
        </>
    )
}