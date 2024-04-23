import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
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

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1.25rem',
        },
      },
    },
  },
});

const menuItemsData2 = {
    label: 'Web Applications',
    items: [
      {
        label: 'Budget Tool',
        leftIcon: <NewIcon />,
        callback: (event, item) => window.open("https://sajgis.saj.usace.army.mil/eba", "_blank"),
      },
      {
        label: 'PCL',
        leftIcon: <SaveIcon />,
        callback: (event, item) => window.open("https://sajgis.saj.usace.army.mil/pcl", "_blank"),
      },
      {
        label: 'Inventory',
        leftIcon: <SaveAsIcon />,
        callback: (event, item) => window.open("https://sajgis.saj.usace.army.mil/inventory", "_blank"),
        // items: [
        //   {
        //     label: 'Option 1',
        //     rightIcon: <SaveAsIcon />,
        //     callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        //   },
        //   {
        //     label: 'Option 2',
        //     leftIcon: <SaveAsIcon />,
        //     callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
        //     disabled: true,
        //   },
        // ],
      },
      // {
      //   label: 'Survey/Contracting',
      //   leftIcon: <SaveAsIcon />,
      //   // items: [
      //   //   {
      //   //     label: 'Option 1',
      //   //     rightIcon: <SaveAsIcon />,
      //   //     callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
      //   //   },
      //   //   {
      //   //     label: 'Option 2',
      //   //     leftIcon: <SaveAsIcon />,
      //   //     callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
      //   //     disabled: true,
      //   //   },
      //   // ],
      // },
      // {
      //   label: 'Data Management',
      //   leftIcon: <SaveAsIcon />,
      //   // items: [
      //   //   {
      //   //     label: 'Option 1',
      //   //     rightIcon: <SaveAsIcon />,
      //   //     callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
      //   //   },
      //   //   {
      //   //     label: 'Option 2',
      //   //     leftIcon: <SaveAsIcon />,
      //   //     callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
      //   //     disabled: true,
      //   //   },
      //   // ],
      // },
      // {
      //   label: 'Application Development',
      //   leftIcon: <SaveAsIcon />,
      //   // items: [
      //   //   {
      //   //     label: 'Option 1',
      //   //     rightIcon: <SaveAsIcon />,
      //   //     callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
      //   //   },
      //   //   {
      //   //     label: 'Option 2',
      //   //     leftIcon: <SaveAsIcon />,
      //   //     callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
      //   //     disabled: true,
      //   //   },
      //   // ],
      // },
    ],
  };


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
      <AppBar  sx={{backgroundColor: grey[800]}} position="static">
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
