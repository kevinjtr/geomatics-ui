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
<<<<<<< Updated upstream
            <AppGallery data={projectPageData.Apps}/>
=======
            <AppGallery data={projectPageData.GISApps}/>
>>>>>>> Stashed changes
        </>
    )
}