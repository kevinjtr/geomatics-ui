import { Navigation } from "./components/navigation";
import { GisAppFunc } from "./components/gisappfunc";
import { GisApplications } from "./components/gisapplications";
import { GisProjectFunc } from "./components/gisprojectfunc";
import { GisProjects } from "./components/gisprojects";
import Home from "./components/home"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SupportServices } from "./components/supportservices";
import { Training } from "./components/training";
import { useState, useEffect } from "react";
import projectData from "./data/projects.json";
import { RequestWork } from "./components/requestwork";
import AboutUs from "./components/about-us";
import { Footer } from "./components/footer";
import  NestedNavBar  from './components/nested-nav-bar';
<<<<<<< Updated upstream
import  NestedAppBar  from './components/nested-app-bar';
=======
// import  NestedAppBar  from './components/nested-app-bar';
import { RequestWork } from "./components/landingPages/requestwork";
import { Footer } from "./components/footer";
import { Geospatial } from "./components/landingPages/geospatial";
import { GIS } from "./components/landingPages/gis";
import { RemoteSensing } from "./components/landingPages/remotesensing";
import { DataManagement } from "./components/landingPages/datamanagement";
import { SurveyContracting } from "./components/landingPages/surveycontracting";
import { AppDevelopment } from "./components/landingPages/appdevelopment";
>>>>>>> Stashed changes

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [projectPageData, setProjectPageData] = useState({});
  useEffect(() => {
    setProjectPageData(projectData);
  }, []);
  
  return (
   <>
     <div>
     <Navigation/>
{/*   
      // <NestedAppBar/> */}
      <NestedNavBar/>
      </div>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/gisapplications">
        <Route path="" element= {<GisApplications />}/>
        <Route path=":id" element={<GisAppFunc data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/gisprojects">
        <Route path="" element={<GisProjects />} />
        <Route path=":id" element={<GisProjectFunc data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/supportservices" element= {<SupportServices />} />
      <Route path="/training" element= {<Training />}/>
      <Route path="/requestwork" element= {<RequestWork />}/>
      <Route path="/aboutus" element= {<AboutUs />}/>
    </Routes>
      <Footer />
    </>
    
  );
};

export default App;
