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
import { Link, useLocation, useHref } from "react-router-dom";
import HighlightedProjectSection from '../highlighted-project'

const Home = () => {
  
const location = useLocation()
  const href = useHref()
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
    

  console.log(location, href)
    return (
     <>
        <div className="v-landingpage">

            <video style={{height: '100%', width: '100%'}} src={BgVideo} autoPlay muted loop className="video-bg" />
            <div className="bg-overlay"></div> 

            <div className="v-home-text">
                <h2 className="v-h1" style={{fontSize: '4rem'}}>Welcome to the Geomatics Website.</h2>
                {/* <p className="v-p">Come live out your ideal vacation with us</p> */}
                
        <Typography variant="h5" sx={{pb: 2.5, textAlign: 'center'}} >
        Professional responsibility for acquisition, modeling, analysis and management of spatial data for planning, design, construction and emergencies within the Jacksonville District area of responsibility. We contract spatial data acquisitions to the private sector using indefinite delivery contracts. We use the latest technology in remote sensing for performing aerial, hydrographic and topographic surveys.
        </Typography>
            </div>
            <Link to='/geospatial'>
            <Button variant="outlined" sx={{color: 'white', borderColor: 'white', height: '4em', width: '15em', fontSize: '1.25rem'}}//className="v-home-btn"
            >Explore Our Services</Button>
           </Link>
           {/*<Typography variant="h5" sx={{pb: 2.5, textAlign: 'center'}} >
            View more information below
            </Typography> */}
        </div>
        <Box sx={{ margin: '50px auto', pl:'10%', pr: '10%' }}>
        <Announcements data={announcementPageData.Announcements}/>
        </Box>
        <Box sx={{ margin: '50px auto', pl:'10%', pr: '10%' }}>
        
        </Box>


        <TwoColumnComponent/>
        {/*<Socials data={landingPageData.Contact}/>*/}
        
        <HighlightedProjectSection/>
        {/* <About data={landingPageData.About} /> */}
        {/* <BasicList data ={linkListPageData.Links}/> */}
        <Contact data={landingPageData.Contact} />
       
      </>
    );
  };
  
  export default Home;
  