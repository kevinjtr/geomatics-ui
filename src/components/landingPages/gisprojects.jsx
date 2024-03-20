import { ProjectGallery } from "../projectgallery";
import { useState, useEffect } from "react";
import projectData from "../../data/projects.json";
export function GisProjects(){
    
    const [projectPageData, setProjectPageData] = useState({});
    useEffect(() => {
      setProjectPageData(projectData);
    }, []);

    return(
        <>
            <ProjectGallery data={projectPageData.Projects}/>
        </>
    )
}