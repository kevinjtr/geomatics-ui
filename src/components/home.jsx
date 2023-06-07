import { Header } from "./header";
import { About } from "./about";
import { Contact } from "./contact";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import { Announcements } from "./announcements";
import { BasicList } from "./linklist";


const Home = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    
    return (
     <>
       <div>
        <Header data={landingPageData.Header} />
        <Announcements />
        <About data={landingPageData.About} />
        <BasicList data ={landingPageData.Links}/>
        <Contact data={landingPageData.Contact} />
        </div>
      </>
    );
  };
  
  export default Home;
  