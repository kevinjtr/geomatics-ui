import { Features} from "./features";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
export function Training(){
    
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    return(
        <>
            <Features data={landingPageData.Features}/>
        </>
    )
}