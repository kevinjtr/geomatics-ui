import { Outlet } from "react-router-dom";
import { Navigation } from "./components/navigation";
import  NestedNavBar  from './components/nested-nav-bar';

export default function RootLayout() {
    return(
        <div>
            <Navigation/>
            {/* <NestedNavBar/> */}
            <Outlet />
        </div>
        
    )
}