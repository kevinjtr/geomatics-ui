import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import  NestedNavBar  from './components/nested-nav-bar';
import { useEffect } from "react";

function ScrollToTop() {
    const pathName = useLocation();
  
    // This effect runs whenever the path name changes
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathName]);
  
    return null;
  }

export default function RootLayout() {
    return(
        <div>
            <ScrollToTop />
            <Navigation/>
            {/*<NestedNavBar/>*/}
            <Outlet />
        </div>
        
    )
}