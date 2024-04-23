import { AppGallery } from "../appgallery";
import { useState, useEffect } from "react";
import projectData from "../../data/projects.json";
export function DMApplications(){
    const [projectPageData, setProjectPageData] = useState({});
    useEffect(() => {
      setProjectPageData(projectData);
    }, []);

    return(
        <>
         <div className="section-title">
          <h2 style={{textAlign:"center", paddingTop:"25"}}>Date Management / Database Design Apps</h2>
          </div>
            <AppGallery data={projectPageData.DMApps}/>
        </>
    )
}