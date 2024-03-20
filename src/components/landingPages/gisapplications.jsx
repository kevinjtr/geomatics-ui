import { AppGallery } from "../appgallery";
import { useState, useEffect } from "react";
<<<<<<< HEAD:src/components/gisapplications.jsx
import projectData from "../data/projects.json";
import Landing from "../templates/landing"
=======
import projectData from "../../data/projects.json";
>>>>>>> origin/merrittTestBranch:src/components/landingPages/gisapplications.jsx
export function GisApplications(){
    
    // const [projectPageData, setProjectPageData] = useState({});
    // useEffect(() => {
    //   setProjectPageData(projectData);
    // }, []);

    return(
        <>
            <Landing 
            //data={projectPageData.Apps}
            />
        </>
    )
}