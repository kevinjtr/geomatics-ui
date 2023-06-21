import { About } from "./about";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import { Announcements } from "./announcements";
import { BasicList } from "./linklist";
import { Contact } from "./contact";


const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    
    return (
     <>
       <div>
        <Announcements data={landingPageData.Announcements}/>
        <About data={landingPageData.About} />
        <BasicList data ={landingPageData.Links}/>
        <Contact data={landingPageData.Contact}/>
        </div>
      </>
    );
  };
  
  export default Home;
  