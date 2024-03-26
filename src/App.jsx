import { Navigation } from "./components/navigation";
import { GisAppFunc } from "./components/gisappfunc";
import { GisApplications } from "./components/landingPages/gisapplications";
import { GisProjectFunc } from "./components/gisprojectfunc";
import { GisProjects } from "./components/landingPages/gisprojects";
import Home from "./components/landingPages/home"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SupportServices } from "./components/landingPages/supportservices";
import { Training } from "./components/landingPages/training";
import { useState, useEffect } from "react";
import projectData from "./data/projects.json";
//import { RequestWork } from "./components/requestwork";
import AboutUs from "./components/about-us";
//import { Footer } from "./components/footer";
import  NestedNavBar  from './components/nested-nav-bar';
import  NestedAppBar  from './components/nested-app-bar';
import { RequestWork } from "./components/landingPages/requestwork";
import { Footer } from "./components/footer";
import { Geospatial } from "./components/landingPages/geospatial";
import { GIS } from "./components/landingPages/gis";
import { RemoteSensing } from "./components/landingPages/remotesensing";
import { DataManagement } from "./components/landingPages/datamanagement";
import { SurveyContracting } from "./components/landingPages/surveycontracting";
import { AppDevelopment } from "./components/landingPages/appdevelopment";

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
  
      <NestedAppBar/>
      <NestedNavBar/>
      </div>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/geospatial" element={<Geospatial />} />
      {/*GIS Landing and Project Pages*/}
      <Route path="/gis" element={<GIS/> } />
      <Route path="/gisapplications">
        <Route path="" element= {<GisApplications />}/>
        <Route path=":id" element={<GisAppFunc data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/gisprojects">
        <Route path="" element={<GisProjects />} />
        <Route path=":id" element={<GisProjectFunc data={projectPageData.Projects}/>}/>
      </Route>
      {/*Remote Sensing Landing and Project Pages*/}
      <Route path="/remote-sensing" element={<RemoteSensing/> } />
      <Route path="/rsapplications">
        <Route path="" element= {<GisApplications />}/>
        <Route path=":id" element={<GisAppFunc data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/rsprojects">
        <Route path="" element={<GisProjects />} />
        <Route path=":id" element={<GisProjectFunc data={projectPageData.Projects}/>}/>
      </Route>
      {/*Data Management Landing and Project Pages*/}
      <Route path="/data-management" element={<DataManagement/> } />
      <Route path="/dmapplications">
        <Route path="" element= {<GisApplications />}/>
        <Route path=":id" element={<GisAppFunc data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/dmprojects">
        <Route path="" element={<GisProjects />} />
        <Route path=":id" element={<GisProjectFunc data={projectPageData.Projects}/>}/>
      </Route>
      {/*Survey Contracting Landing and Project Pages*/}
      <Route path="/survey-contracting" element={<SurveyContracting/> } />
      <Route path="/scapplications">
        <Route path="" element= {<GisApplications />}/>
        <Route path=":id" element={<GisAppFunc data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/scprojects">
        <Route path="" element={<GisProjects />} />
        <Route path=":id" element={<GisProjectFunc data={projectPageData.Projects}/>}/>
      </Route>
      {/*Application Development Landing and Project Pages*/}
      <Route path="/application-development" element={<AppDevelopment/> } />
      <Route path="/adapplications">
        <Route path="" element= {<GisApplications />}/>
        <Route path=":id" element={<GisAppFunc data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/adprojects">
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
