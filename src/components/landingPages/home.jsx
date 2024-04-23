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
import { Button, Typography, Box } from "@mui/material"
import JsonData from "../../data/data.json"
import announcementData from "../../data/announcements.json"
import linkData from "../../data/links.json"
import { Announcements } from "../announcements";
import { BasicList } from "../linklist";
import { Contact } from "../contact";
import { Socials } from "../socials";
import TwoColumnComponent from "../two-column";
import { Link } from "react-router-dom";
import HighlightedProjectSection from '../highlighted-project'

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
            <Link to='/geomatics/geospatial'>
            <Button variant="outlined" sx={{color: 'white', borderColor: 'white', height: '4em', width: '15em', fontSize: '1.25rem'}}//className="v-home-btn"
            >Explore Our Services</Button>
            </Link>
        </div>
        <Box sx={{ margin: '50px auto', pl:'10%', pr: '10%' }}>
        <Typography variant="h3" sx={{pb: 1, textAlign: 'center'}} >
        Mission Statement
        </Typography>
        <Typography variant="h5" sx={{pb: 2.5, textAlign: 'left'}} >
        Professional responsibility for acquisition, modeling, analysis and management of spatial data for planning, design, construction and emergencies within the Jacksonville District area of responsibility. We contract spatial data acquisitions to the private sector using indefinite delivery contracts. We use the latest technology in remote sensing for performing aerial, hydrographic and topographic surveys.
        </Typography>
        </Box>


        <TwoColumnComponent/>
        <Socials data={landingPageData.Contact}/>
        <Announcements data={announcementPageData.Announcements}/>
        <HighlightedProjectSection/>
        {/* <About data={landingPageData.About} /> */}
        {/* <BasicList data ={linkListPageData.Links}/> */}
        <Contact data={landingPageData.Contact} />
       
      </>
    );
  };
  
  export default Home;
  