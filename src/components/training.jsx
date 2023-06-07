import { TrainingMaterial } from "./trainingmaterials";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
export function Training(){
    
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    return(
        <>
            <TrainingMaterial data={landingPageData.Features}/>
        </>
    )
}