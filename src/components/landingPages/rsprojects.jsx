import { ProjectGallery } from "../projectgallery";
import { useState, useEffect } from "react";
import projectData from "../../data/projects.json";
export function RSProjects(){
    
    const [projectPageData, setProjectPageData] = useState({});
    useEffect(() => {
      setProjectPageData(projectData);
    }, []);

    return(
        <>
         <div className="section-title">
          <h2 style={{textAlign:"center", paddingTop:"25"}}>Remote Sensing Projects</h2>
          </div>
            <ProjectGallery data={projectPageData.RSProjects}/>
        </>
    )
}