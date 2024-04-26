import { ImageGallery } from "./image-gallery";
import { useState, useEffect } from "react";
import projectData from "../data/projects.json";
export function GisProjects(){
    
    const [projectPageData, setProjectPageData] = useState({});
    useEffect(() => {
      setProjectPageData(projectData);
    }, []);

    return(
        <>
            <ImageGallery data={projectPageData.Projects} name="Project"/>
        </>
    )
}