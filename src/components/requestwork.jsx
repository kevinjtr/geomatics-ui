import { Contact } from "./contact"
import { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import { Typography } from "@mui/material";
export function RequestWork(){
    
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);

    return(
        <>
            <Typography variant="h4" sx={{py: 2.5, textAlign: 'center'}}>
                Request Work
            </Typography>
        </>
    )
}