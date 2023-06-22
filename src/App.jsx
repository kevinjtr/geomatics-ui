import { Navigation } from "./components/navigation";
import { GisProjects } from "./components/gisprojects";
import { GisApplications } from "./components/gisapplications";
import Home from "./components/home"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SupportServices } from "./components/supportservices";
import { Training } from "./components/training";
import { useState, useEffect } from "react";
import projectData from "./data/projects.json";
import { RequestWork } from "./components/requestwork";

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
      <Navigation />
      </div>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/gisapplications">
        <Route path="" element= {<GisApplications />}/>
        <Route path=":id" element={<GisProjects data={projectPageData.Projects}/>}/>
      </Route>
      <Route path="/supportservices" element= {<SupportServices />} />
      <Route path="/training" element= {<Training />} />
      <Route path="/requestwork" element= {<RequestWork />}/>
    </Routes>
      
    </>
    
  );
};

export default App;
