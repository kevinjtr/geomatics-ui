import { ProjectGallery } from "../projectgallery";
import { useState, useEffect } from "react";
import projectData from "../../data/projects.json";
export function DMProjects(){
    
    const [projectPageData, setProjectPageData] = useState({});
    useEffect(() => {
      setProjectPageData(projectData);
    }, []);

    return(
        <>
         <div className="section-title">
          <h2 style={{textAlign:"center", paddingTop:"25"}}>Data Management / Database Design Projects</h2>
          </div>
            <ProjectGallery data={projectPageData.DMProjects}/>
        </>
    )
}