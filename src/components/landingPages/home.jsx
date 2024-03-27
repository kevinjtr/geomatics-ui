import { About } from "../about";
import { useState, useEffect } from "react";
//import JsonData from "../data/data.json"
//import announcementData from "../data/announcements.json"
//import linkData from "../data/links.json"
//import { Announcements } from "./announcements";
//import { BasicList } from "./linklist";
//import { Contact } from "./contact";
//import { Socials } from "./socials";
import './landingpage.css'
import BgVideo from '../../videos/geo.mp4'
import { Button } from "@mui/material"
import JsonData from "../../data/data.json"
import announcementData from "../../data/announcements.json"
import linkData from "../../data/links.json"
import { Announcements } from "../announcements";
import { BasicList } from "../linklist";
import { Contact } from "../contact";
import { Socials } from "../socials";
import TwoColumnComponent from "../two-column";
import { Link } from "react-router-dom";

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
        <div className="v-landingpage">

            <video style={{height: '100%', width: '100%'}} src={BgVideo} autoPlay muted loop class="video-bg" />
            <div className="bg-overlay"></div> 

            <div className="v-home-text">
                <h1 className="v-h1">Welcome to the Geomatics Website.</h1>
                {/* <p className="v-p">Come live out your ideal vacation with us</p> */}
            </div>
            <Link to='/geospatial'>
            <Button variant="outlined" sx={{color: 'white', borderColor: 'white', height: '5em', width: '15em', fontSize: '2rem'}}//className="v-home-btn"
            >Explore Our Services</Button>
           </Link>
            
        </div>
        <TwoColumnComponent/>
        <Socials data={landingPageData.Contact}/>
        <Announcements data={announcementPageData.Announcements}/>
        <About data={landingPageData.About} />
        <BasicList data ={linkListPageData.Links}/>
        <Contact data={landingPageData.Contact} />
       
      </>
    );
  };
  
  export default Home;
  