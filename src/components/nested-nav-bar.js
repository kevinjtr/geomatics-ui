import { useState } from 'react';
import { AppBar, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { NestedMenuItem, NestedDropdown, IconMenuItem } from 'mui-nested-menu';
import {
  Adb as NewIcon,
  Save as SaveIcon,
  SaveAs as SaveAsIcon,
  ImportExportRounded as ImportExportRoundedIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavBarButtonLinks from './nav-bar-button-links';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
        },
      },
    },
  },
});

const menuItemsDataWebApplications = [
  {
    label: 'Eng Budget App (EBA)',
    url: 'https://sajgis.saj.usace.army.mil/eba',
  },
  {
    label: 'Project Contract Log (PCL)',
    url: 'https://sajgis.saj.usace.army.mil/pcl',
  },
  {
    label: 'Inventory App',
    url: 'https://sajgis.saj.usace.army.mil/inventory',
  },
  {
    label: 'Data Dictionary Tool',
    url: 'https://sajgis.saj.usace.army.mil/dictionary',
  },
]

const menuItemsGisLinks = [
  {
    label: 'AGOL Experience Builder App',
    url: 'https://experience.arcgis.com/experience/06bb9c98d9184bd9a374a244f6d27474',
  },
  {
    label: 'AGOL WMV',
    url: 'https://cesaj.maps.arcgis.com/home/item.html?id=e5806e66f6244d24ac616462577fa60c',
  },
  {
    label: 'ArcGIS Portal WMV',
    url: 'https://coe-sajgsp01jax.saj.ds.usace.army.mil/k3portal/apps/webappviewer/index.html?id=78590a96cc124751a452666c6773ad66',
  },
]

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

export default function ButtonAppBar() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   function handleClick(event) {
//     if (anchorEl !== event.currentTarget) {
//       setAnchorEl(event.currentTarget);
//     }
//   }

// const handleClose = () => setAnchorEl(null);
// const handlePopoverOpen = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handlePopoverClose = () => {
//   setAnchorEl(null);
// };

// const open = Boolean(anchorEl);



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: grey[800] }} position="static">
        <Toolbar>
          <ThemeProvider theme={theme}>
            <NavBarButtonLinks identifier="web-apps" label={"Web Applications"} menuItemsData={menuItemsDataWebApplications}/>
            <NavBarButtonLinks identifier="gis-links" label={"GIS Links"} menuItemsData={menuItemsGisLinks}/>
            <NavBarButtonLinks identifier="ref-links" label={"Reference Links"} menuItemsData={referenceLinks}/>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
}