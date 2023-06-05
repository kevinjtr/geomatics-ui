import { Navigation } from "./components/navigation";
import { GisApplications } from "./components/gisapplications";
import Home from "./components/home"
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SupportServices } from "./components/supportservices";
import { Training } from "./components/training";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  
  return (
   <>
     <div>
      <Navigation />
      </div>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/gisapplications" element= {<GisApplications />} />
      <Route path="/supportservices" element= {<SupportServices />} />
      <Route path="/training" element= {<Training />} />
    </Routes>
    </>
  );
};

export default App;
