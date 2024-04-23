import { useState, useEffect } from "react";
import supportData from "../data/support.json";
import { Services } from "./services";
export function SupportServices(){
    
    const [supportPageData, setSupportPageData] = useState({});
    useEffect(() => {
      setSupportPageData(supportData);
    }, []);

    return(
        <>
            <Services data={supportData.Services}/>
        </>
    )
}