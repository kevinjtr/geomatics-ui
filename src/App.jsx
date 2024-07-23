import { Navigation } from "./components/navigation";
import { AppView } from "./components/app-view";
import { DisplayApplications } from "./components/display-applications";
import { ProjectView } from "./components/project-view";
import { DisplayProjects } from "./components/display-projects";
import Home from "./components/landingPages/home"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { createHashRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate, useLocation, useHref } from "react-router-dom";
import { SupportServices } from "./components/supportservices";
import { Training } from "./components/training";
import { useState, useEffect } from "react";
import projectData from "./data/projects.json";
import { RequestWork } from "./components/requestwork";
import AboutUs from "./components/about-us";
import { Footer } from "./components/footer";
import  NestedNavBar  from './components/nested-nav-bar';
import  NestedAppBar  from './components/nested-app-bar';
import { Geospatial } from "./components/landingPages/geospatial";
import { RemoteSensing } from "./components/landingPages/remotesensing";
import { DataManagement } from "./components/landingPages/datamanagement";
import { SurveyContracting } from "./components/landingPages/surveycontracting";
import { AppDevelopment } from "./components/landingPages/app-development";
import { GIS } from "./components/landingPages/gis";
import RootLayout from "./root-layout";
import useConfirm from "./components/useConfirm"
import { CoronavirusOutlined } from "@mui/icons-material";
//import './bootstrap.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  //const location = useLocation()
  //const href = useHref()

  const verifyTimeStamp = (ts) => {
    console.log(ts,'time-stampt')
    if(ts === undefined || ts === '' || ts === null || !isFinite(ts)){
      return true
    }
    // 
    let expDate = new Date().getTime() - (30 * 24 * 60 * 60 * 1000);

    if (new Date(Number(ts)).getTime() < expDate) {
      console.log('here')
      return true
      // The yourDate time is more than 1 days from now
  }

    return false
  }

  const [confirm, setConfirm] = useState( () => {
    const temp = localStorage.getItem('geo-confirm')
    const ts = localStorage.getItem('geo-timestamp')

    console.log(ts)
    if(temp === undefined || temp === 'no' || temp === null)
      return 'refresh'

    if(verifyTimeStamp(ts))
      return 'refresh'
    
      return temp
  })
    //() => {
    //return JSON.parse(localStorage.getItem('geo-confirm'))
  //})
  const [Dialog, confirmDelete] = useConfirm(
    'Disclaimer and terms of use',
    "The maps, graphics, and data presented on this website are being displayed for informational purposes only.\n\nData on this website is provided as-is without any warranty or representation that the data is accurate, timely, or complete.\n\nThe Geomatics Section makes no warranty the data, graphics, and maps presented in this website are up to date or that the information shown on the website is reliable for the viewer’s intended purposes or uses.\n\nThe viewer acknowledges and accepts the above limitations on the data portrayed and acknowledges the data is dynamic and in a current updated status.\n\nCaution: By clicking the Accept button below, the viewer is acknowledging they have read the Disclaimer and Terms of Use and have a full understanding of its contents.",
  )

  const handleDialog = async () => {
    let ans = await confirmDelete()
    ans = ans ? 'yes' : 'no'
    localStorage.setItem('geo-confirm', ans)
    localStorage.setItem('geo-timestamp', Number(new Date()))
    setConfirm(ans)
  }

  const router = 
  createBrowserRouter(
  //createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        {/* <Route path="/" element={<Navigate to="/" replace/>}/> */}
   
          <Route index element={ <Home /> }/>

          <Route path="geospatial">

            <Route index element={<Geospatial/> } />

              <Route path="projects">
                <Route index element= {<DisplayProjects data={projectData} />}/>
                <Route path=":id" element={<ProjectView data={projectData.Projects}/>}/>
              </Route>

              <Route path="apps">
                <Route index element= {<DisplayApplications data={projectData}  />}/>
                <Route path=":id" element={<AppView data={projectData.Apps}/>}/>
              </Route>

              <Route path="gis" >
                <Route index element={<GIS />}/>
              </Route>

              <Route path="remote-sensing" >
                <Route index element={<RemoteSensing />}/>
              </Route>

              <Route path="data-management" >
                <Route index element={<DataManagement />}/>
              </Route>

              <Route path="survey-contracting" >
                <Route index element={<SurveyContracting />}/>
              </Route>

              <Route path="application-development" >
                <Route index element={<AppDevelopment />}/>
              </Route>

        </Route>
        <Route path="supportservices" element= {<SupportServices />} />
          <Route path="training" element= {<Training />}/>
          {/* <Route path="requestwork" element= {<RequestWork />}/> */}
          <Route path="aboutus" element= {<AboutUs />}/>
      </Route>
    ), {
      basename: process.env.REACT_APP_BASENAME
    }
  )

  useEffect(() => {
    console.log(confirm)
    if(confirm !== 'yes')
      handleDialog()
  },[confirm])

  //console.log(href)
  
  return (<>
  <Dialog />
   <RouterProvider router={router} />
  </>
    
  );
};

export default App;
