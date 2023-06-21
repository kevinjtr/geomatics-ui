import { Gallery } from "./gallery";
import { useState, useEffect } from "react";
import projectData from "../data/projects.json";
export function GisApplications(){
    
    const [projectPageData, setProjectPageData] = useState({});
    useEffect(() => {
      setProjectPageData(projectData);
    }, []);

    return(
        <>
            <Gallery data={projectPageData.Projects}/>
        </>
    )
}