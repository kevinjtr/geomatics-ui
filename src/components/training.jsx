import { TrainingMaterial } from "./trainingmaterials";
import { useState, useEffect } from "react";
import trainingData from "../data/training.json";
export function Training(){
    
    const [trainingPageData, setTrainingPageData] = useState({});
    useEffect(() => {
      setTrainingPageData(trainingData);
    }, []);

    return(
        <>
            <TrainingMaterial data={trainingPageData.Training}/>
        </>
    )
}