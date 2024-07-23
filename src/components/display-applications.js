import { ImageGallery } from "./image-gallery";
import { useState, useEffect } from "react";
//import projectData from "../data/projects.json";

export function DisplayApplications({data, discipline}){

    return(
        <>
            {Object.keys(data).length > 0 && <ImageGallery data={data?.Apps} name="Application"/>}
        </>
    )
}