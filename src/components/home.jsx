import { About } from "./about";
import { useState, useEffect } from "react";
import JsonData from "../data/data.json"
import announcementData from "../data/announcements.json"
import linkData from "../data/links.json"
import { Announcements } from "./announcements";
import { BasicList } from "./linklist";
import { Contact } from "./contact";
import { Socials } from "./socials";


const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const [announcementPageData, setAnnouncementPageData] = useState({});
  useEffect(() => {
  setAnnouncementPageData(announcementData);
  }, []);
  const [linkListPageData, setLinkListPageData] = useState({});
  useEffect(() => {
  setLinkListPageData(linkData);
  }, []);
    
    return (
     <>
       <div>
        <Socials data={landingPageData.Contact}/>
        <Announcements data={announcementPageData.Announcements}/>
        <About data={landingPageData.About} />
        <BasicList data ={linkListPageData.Links}/>
        <Contact data={landingPageData.Contact}/>
        </div>
      </>
    );
  };
  
  export default Home;
  