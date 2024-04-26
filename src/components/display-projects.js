import { ImageGallery } from "./image-gallery";
import { useState, useEffect } from "react";
//import projectData from "../data/projects.json";

export function DisplayProjects({data, discipline}){

    return(
        <>
            {Object.keys(data).length > 0 && <ImageGallery data={data?.[discipline].Projects} discipline={discipline} name="Project"/>}
        </>
    )
}