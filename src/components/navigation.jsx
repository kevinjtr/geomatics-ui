// import React from "react";
import { NavLink, Link,} from "react-router-dom";
import ButtonAppBar from "./nested-app-bar";
import NavBarButtonLinks from './nav-bar-button-links';

// export const Navigation = (props) => {
//   return (
//     <nav style={{marginBottom: '0px', borderRadius:0}} id="menu" className="navbar navbar-default">
//       <div className="container">
//         <div className="navbar-header">

//         </div>

//         <div
//           className="collapse navbar-collapse"
//           id="bs-example-navbar-collapse-1"
//         >
//           <ul className="nav navbar-nav navbar-right">
//             <li>
              
//               {/* <Link to="/geospatial" style={{color:"white"}}>
//                 Geospatial
//               </Link> */}
//             </li>
//             <li>
//               <Link to="/training" style={{color:"white"}}>
//                 Training
//               </Link>
//             </li>
//             <li>
//               <Link to="/supportservices" style={{color:"white"}} >
//                 Support Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/requestwork" style={{color:"white"}}>
//                 Request Work
//               </Link>
//             </li>
//             <li>
//               <Link to="/aboutus" style={{color:"white"}}>
//                 About Us
//               </Link>
//             </li>
//             <li>
              
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";
import Image from './Image'

const referenceLinks = [
  {
    label: "MARS",
    url: "https://uas.sec.usace.army.mil/",
    "category": "usace-websites"
  },
  {
    label: "NLD",
    url: "https://levees.sec.usace.army.mil/#/",
    "category": "usace-websites"
  },
  {
    label: "Volusia Municipalities / Cities",
    url: "https://google.com",
    "category": "fl-county-webview"
  },
  {
    label: "NOAA",
    url: "https://www.noaa.gov/satellite-imagery-reports-launch-information",
    "category": "local-federal-agencies"
  },
  {
    label: "FEMA",
    url: " https://gis.fema.gov/",
    "category": "other"
  },
  {
    label: "UFWS",
    url: "https://gis-fws.opendata.arcgis.com/",
    "category": "other"
  },
  {
    label: "FWC",
    url: "https://myfwc.com/research/gis/",
    "category": "other"
  },
  {
    label: "FLORIDA DISASTER",
    url: "https://www.floridadisaster.org/weather/",
    "category": "other"
  }
]
const drawerWidth = 240;
const navItems = [{label: 'Training', url: '/training'}, {label: 'Support Services', url: '/supportservices'},
 //{label: 'Request Work', url: '/requestwork'},
  {label: 'About Us', url: '/aboutus'}];


export const Navigation = (props) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{justifyContent: 'space-evenly'}}>
          <Box sx={{pl:5, display: 'flex'}}>
          <Link to={"/"}>
          <Image src={"/img/Army Star.png"} alt="title" style={{float:"left", height:"50px", paddingRight:"10px"}}/>
          <Image src="/img/Castle.png" alt="title" style={{float:"left", width:"70px", paddingRight:"10px"}}/>
          </Link>
          
          
          <Box sx={{pt:1}}>
          <NavLink className="navbar-brand page-scroll" to="/" reloadDocument style={{color:"white", textDecoration: 'none', fontSize: '1.5rem'}}>
            Geomatics
          </NavLink>
          </Box>

          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, pr: 5 }}>
            <ButtonAppBar/>
            {navItems.map((item, i) => (
              <NavLink key={`nav-navlink-${i}`} to={item.url} style={{ textDecoration: 'none' }}>
              <Button variant="text" key={item.label} sx={{color: '#fff', '&:hover': {color: 'text.primary'}}}//onClick={() => navigate(item.url) }
              >
                {item.label}
              </Button>
              </NavLink>
            ))}
            <NavBarButtonLinks variant="outlined" identifier="ref-links" label={"External Links"} sx={{ml: 1}} menuItemsData={referenceLinks}/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
