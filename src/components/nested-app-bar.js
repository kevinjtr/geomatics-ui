import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { NestedDropdown } from 'mui-nested-menu';
import {Adb as NewIcon, Save as SaveIcon, SaveAs as SaveAsIcon, ImportExportRounded as ImportExportRoundedIcon, NewIc } from "@mui/icons-material"
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
    label: 'Geospatial',
    callback: (event, item) => window.open("/geospatial"), 
    items: [
      {
        label: "Geospatial Overview",
        leftIcon: <SaveIcon />,
        sx: {"&.Mui-Popover": {sx: {fontSize: '50px !important'}}},
        callback: (event, item) => window.open("/geospatial", "_self"), 
      },
      {
        label: "GIS",
        leftIcon: <SaveIcon />,
        sx: {"&.Mui-Popover": {sx: {fontSize: '50px !important'}}},
        callback: (event, item) => window.open("/gis"), 
        items: [
          {
            label: "GIS Apps",
            leftIcon: <SaveAsIcon />,
            callback:(event, item) => window.open("/gisapplications", "_self"),
            /*items: [
              {
                label: 'Individual App Description',
              leftIcon: <SaveAsIcon />,
              
            }
            ]*/
          },
          {
            label: "GIS Projects",
            leftIcon: <SaveAsIcon />,
            callback:(event, item) => window.open("/gisprojects", "_self"),            
          },
        ]
        //callback: (event, item) => console.log('Save clicked', event, item),
      },
      {
        label: 'Remote Sensing',
        leftIcon: <SaveAsIcon />,
        items: [
          {
            label: 'Remote Sensing Apps',
            leftIcon: <SaveAsIcon />,
          },
          {
            label: 'Remote Sensing Projects',
            leftIcon: <SaveAsIcon />,
          }
        ]
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
      {
        label: 'Survey/Contracting',
        leftIcon: <SaveAsIcon />,
        items: [
          {
            label: 'S/C Apps',
            leftIcon: <SaveAsIcon />,
          },
          {
            label: 'S/C Projects',
            leftIcon: <SaveAsIcon />,
          }
        ]
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
      {
        label: 'Data Management / Database Design',
        leftIcon: <SaveAsIcon />,
        items: [
          {
            label: 'Data Management Apps',
            leftIcon: <SaveAsIcon />,
          },
          {
            label: 'Data Management Projects',
            leftIcon: <SaveAsIcon />,
          }
        ]
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
      {
        label: 'Application Development',
        leftIcon: <SaveAsIcon />,
        items: [
          {
            label: 'Application Development Apps',
            leftIcon: <SaveAsIcon />,
          },
          {
            label: 'Application Development Projects',
            leftIcon: <SaveAsIcon />,
          }
        ]
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
    ],
  };

export default function ButtonAppBar() {
  return (
    
<Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
             <img src="..\img\Army Star.png" alt="title" style={{float:"left", width:"60px", paddingRight:"10px"}}/>
          <img src="..\img\Castle.png" alt="title" style={{float:"left", width:"80px", paddingRight:"10px"}}/>
            <Button href="\"sx={{fontSize: '1.5rem'}} color="inherit">Geomatics</Button>
            <ThemeProvider theme={theme}>
      <NestedDropdown
        menuItemsData={menuItemsData2}
        MenuProps={{elevation: 3}}
        ButtonProps={{variant: 'text', sx:{ fontSize: '1.5rem', color: 'white'}}}
        onClick={() => console.log('Clicked')}
      />
      </ThemeProvider>
      <Link to="/training">
      <Button sx={{fontSize: '1.5rem', color:"white"}} color="inherit">Training</Button>
      </Link>
      <Link to="/supportservices">
      <Button  sx={{fontSize: '1.5rem', color:"white"}} color="inherit">Support Services</Button>
      </Link>
      <Link to="/requestwork">
      <Button sx={{fontSize: '1.5rem', color:"white"}} color="inherit">Request Work</Button>
      </Link>
      <Link to="/aboutus">
      <Button sx={{fontSize: '1.5rem', color:"white"}} color='inherit'>About Us</Button>
      </Link>
      
          {/* </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
