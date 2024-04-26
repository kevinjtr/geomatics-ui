import { Navigation } from "./components/navigation";
import { AppView } from "./components/app-view";
import { DisplayApplications } from "./components/display-applications";
import { ProjectView } from "./components/project-view";
import { DisplayProjects } from "./components/display-projects";
import Home from "./components/landingPages/home"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
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
import { AppDevelopment } from "./components/landingPages/appdevelopment";
import { GIS } from "./components/landingPages/gis";
import RootLayout from "./root-layout";
//import './bootstrap.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Navigate to="/geomatics" replace/>}/>
        <Route path="geomatics">
          <Route index element={ <Home /> }/>
          <Route path="geospatial">

            <Route index element={<Geospatial/> } />

              <Route path="gis" >
                <Route index element={<GIS />}/>
                <Route path="apps">
                  <Route index element= {<DisplayApplications discipline="gis" data={projectData}  />}/>
                  <Route path=":id" element={<AppView data={projectData.gis.Apps}/>}/>
                </Route>
                <Route path="projects">
                  <Route index element= {<DisplayProjects discipline="gis" data={projectData} />}/>
                  <Route path=":id" element={<ProjectView data={projectData.gis.Projects}/>}/>
                </Route>
              </Route>

              <Route path="remote-sensing" >
                <Route index element={<RemoteSensing />}/>
                <Route path="apps">
                  <Route index element= {<DisplayApplications discipline="remoteSensing" data={projectData}  />}/>
                  <Route path=":id" element={<AppView data={projectData.remoteSensing.Apps}/>}/>
                </Route>
                <Route path="projects">
                  <Route index element= {<DisplayProjects discipline="remoteSensing" data={projectData} />}/>
                  <Route path=":id" element={<ProjectView data={projectData.remoteSensing.Projects}/>}/>
                </Route>
              </Route>

              <Route path="data-management" >
                <Route index element={<DataManagement />}/>
                <Route path="apps">
                  <Route index element= {<DisplayApplications discipline="dataManagement" data={projectData}  />}/>
                  <Route path=":id" element={<AppView data={projectData.dataManagement.Apps}/>}/>
                </Route>
                <Route path="projects">
                  <Route index element= {<DisplayProjects discipline="dataManagement" data={projectData} />}/>
                  <Route path=":id" element={<ProjectView data={projectData.dataManagement.Projects}/>}/>
                </Route>
              </Route>

              <Route path="survey-contracting" >
                <Route index element={<SurveyContracting />}/>
                <Route path="apps">
                  <Route index element= {<DisplayApplications discipline="surveyContracting" data={projectData} />}/>
                  <Route path=":id" element={<AppView data={projectData.surveyContracting.Apps}/>}/>
                </Route>
                <Route path="projects">
                  <Route index element= {<DisplayProjects discipline="surveyContracting" data={projectData} />}/>
                  <Route path=":id" element={<ProjectView data={projectData.surveyContracting.Projects}/>}/>
                </Route>
              </Route>

              <Route path="application-development" >
                <Route index element={<AppDevelopment />}/>
                <Route path="apps">
                  <Route index element= {<DisplayApplications discipline="applicationDevelopment" data={projectData}  />}/>
                  <Route path=":id" element={<AppView data={projectData.applicationDevelopment.Apps}/>}/>
                </Route>
                <Route path="projects">
                  <Route index element= {<DisplayProjects discipline="applicationDevelopment" data={projectData} />}/>
                  <Route path=":id" element={<ProjectView data={projectData.applicationDevelopment.Projects}/>}/>
                </Route>
              </Route>

        </Route>
        <Route path="supportservices" element= {<SupportServices />} />
          <Route path="training" element= {<Training />}/>
          <Route path="requestwork" element= {<RequestWork />}/>
          <Route path="aboutus" element= {<AboutUs />}/>
        </Route>
      </Route>
    ), {
      basename: process.env.REACT_APP_BASENAME
    }
  )
  
  return (
   <RouterProvider router={router} />
  );
};

export default App;
