import { AppGallery } from "../appgallery";
import { useState, useEffect } from "react";
import projectData from "../../data/projects.json";
export function GisApplications(){
    const [projectPageData, setProjectPageData] = useState({});
    useEffect(() => {
      setProjectPageData(projectData);
    }, []);

    return(
        <>

        <div className="section-title">
          <h2 style={{textAlign:"center", paddingTop:"25"}}>GIS Apps</h2>
          </div>
            <AppGallery data={projectPageData.GISProjects}/>
        </>
    )
}