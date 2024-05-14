import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { NestedDropdown, NestedMenuItem, IconMenuItem } from 'mui-nested-menu';
import {Adb as NewIcon, Save as SaveIcon, SaveAs as SaveAsIcon, ImportExportRounded as ImportExportRoundedIcon, NewIc } from "@mui/icons-material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate, useHref  } from "react-router-dom";
import projectData from "../data/projects.json";

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          zIndex: 1285
        },
      },
    },
    // MuiModal: {
    //   styleOverrides: {
    //     root: {
    //       zIndex: (theme) => theme.zIndex.modal
    //     },
    //   },
    // },
  },
});

const menuItemsData2 = {
    label: 'Geospatial',
    items: [
      {
        label: 'GIS',
        leftIcon: <SaveIcon />,
        items: [
          {
            label: 'GIS Apps',
            leftIcon: <SaveAsIcon />,
            items: [
              {
                label: 'Individual App Description',
                leftIcon: <SaveAsIcon />,
              }
            ]
          },
          {
            label: 'GIS Projects',
            leftIcon: <SaveAsIcon />,
            items:[
              {
                label: 'Individual Project Description',
                leftIcon: <SaveAsIcon />,
              }
            ]
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
        label: 'Data Management',
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

  const GetItemMenus = (label, open) => {
    return(
      <NestedMenuItem
        //leftIcon={<NewIcon />}
        //rightIcon={<SaveAsIcon />}
        label={label}
        parentMenuOpen={open}
        >
        <NestedMenuItem
              //leftIcon={<NewIcon />}
              //rightIcon={<SaveAsIcon />}
              label={`${label} Projects`}
              parentMenuOpen={open}
        >

        </NestedMenuItem>
        <NestedMenuItem
              //leftIcon={<NewIcon />}
              //rightIcon={<SaveAsIcon />}
              label={`${label} Apps`}
              parentMenuOpen={open}
        >

        </NestedMenuItem>
      </NestedMenuItem>
    )
  }
export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

//const handleClose = () => setAnchorEl(null);
let timeoutId = null;

const handleClose = () => {
if (!!timeoutId) {
  clearTimeout(timeoutId);
}
timeoutId = setTimeout(() => {
  setAnchorEl(null);
}, 0);
};

const handleMenuClose = () => {
setAnchorEl(null);
};

const handleMenuEnter = () => {
if (!!timeoutId) {
  clearTimeout(timeoutId);
}
};

const geoDir = '/geospatial/'

const menusArray = [
  { discipline:'gis', label: 'GIS', top: geoDir + 'gis', projects: geoDir + 'gis/projects', apps: geoDir + 'gis/apps' },
  { discipline:'remoteSensing', label: 'Remote Sensing', top: geoDir + 'remote-sensing', projects: geoDir + 'remote-sensing/projects', apps: geoDir + 'remote-sensing/apps' },
  { discipline:'surveyContracting', label: 'Survey/Contracting', top: geoDir + 'survey-contracting', projects: geoDir + 'survey-contracting/projects' , apps: geoDir + 'survey-contracting/apps' },
  { discipline:'dataManagement', label: 'Data Mgmt/Database Desgin', top: geoDir + 'data-management', projects: geoDir + 'data-management/projects', apps: geoDir + 'data-management/apps' },
  { discipline:'applicationDevelopment', label: 'Application Development', top: geoDir + 'application-development', projects: geoDir + 'application-development/projects', apps: geoDir + 'application-development/apps' }
]

const open = Boolean(anchorEl);

  return (
    


            <ThemeProvider theme={theme}>
              <Link to={"/geospatial"}>
              <Button sx={{color: 'white', zIndex: 1295, '&:hover': {color: 'text.primary'}}}
          endIcon={<KeyboardArrowDownIcon />}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleClose}

      >
        Geospatial
      </Button>
              </Link>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        disableRestoreFocus={true}
      MenuListProps={{
        onMouseLeave: handleMenuClose,
        onMouseEnter: handleMenuEnter
      }}
      >
         <Link to='/geospatial'>
         <MenuItem sx={{color: 'blue', textDecoration:'underline'}}>
          View all
          </MenuItem>
           </Link>
          
           {menusArray.map(item => <>
           <Link to={item.top} style={{textDecoration: 'none', color: theme.palette.text.primary}}>

            <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label={item.label}
                parentMenuOpen={open}
                // onClick={() => {
                //   navigate(item.top);
                // }}
          >

            <Link to={item.projects} style={{textDecoration: 'none', color: theme.palette.text.primary}}>
                <NestedMenuItem
                    //leftIcon={<NewIcon />}
                    //rightIcon={<SaveAsIcon />}
                    label={item.label + " Projects"}
                    parentMenuOpen={open}
                    // onClick={() => {
                    //   navigate(item.projects);
                    // }}
            >
              {projectData?.[item.discipline].Projects.length === 0 ?
              <MenuItem disabled>
              no projects were found.
              </MenuItem> :
              projectData?.[item.discipline].Projects.map(proj => (
              <Link to={`${item.projects}/${proj.largeImage}`} style={{textDecoration: 'none', color: theme.palette.text.primary}}>
                  <MenuItem>
                  {proj.largeImage}
                  </MenuItem>
                </Link>
                ))}
            </NestedMenuItem>
            </Link>

            <Link to={item.apps} style={{textDecoration: 'none', color: theme.palette.text.primary}}>
                <NestedMenuItem
                    //leftIcon={<NewIcon />}
                    //rightIcon={<SaveAsIcon />}
                    label={item.label + " Apps"}
                    parentMenuOpen={open}
                    // onClick={() => {
                    //   navigate(item.apps);
                    // }}
            >
              {projectData?.[item.discipline].Apps.length === 0 ?
              <a>
                            <MenuItem onClick={(e) => {e.preventDefault(); e.stopPropagation();}} disabled>
              no apps were found.
              </MenuItem>
              </a> : 
              projectData?.[item.discipline].Apps.map(app => (
              <Link to={`${item.apps}/${app.largeImage}`} style={{textDecoration: 'none', color: theme.palette.text.primary}}>
                  <MenuItem>
                  {app.largeImage}
                  </MenuItem>
                </Link>
                ))}
            </NestedMenuItem>
            </Link>
        </NestedMenuItem>
        </Link>
           </>)}

          {/* <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="GIS"
                parentMenuOpen={open}
                onClick={() => {
                  navigate("geomatics/geospatial/gis");
                }}
          >
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="GIS Projects"
                parentMenuOpen={open}
                onClick={() => {
                  navigate("geomatics/geospatial/gis/projects");
                }}
        ></NestedMenuItem>
        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="GIS Apps"
                parentMenuOpen={open}
                onClick={() => {
                  navigate("geomatics/geospatial/gis/apps");
                }}
        ></NestedMenuItem>
        </NestedMenuItem>
                <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Remote Sensing"
                onClick={() => {
                  navigate("geomatics/geospatial/remote-sensing");
                }}
                parentMenuOpen={open}
        >
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Remote Sensing Projects"
                parentMenuOpen={open}
        ></NestedMenuItem>
        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Remote Sensing Apps"
                parentMenuOpen={open}
        ></NestedMenuItem>
        </NestedMenuItem>

        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Survey/Contracting"
                onClick={() => {
                  navigate("geomatics/geospatial/survey-contracting");
                }}
                parentMenuOpen={open}
        >
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Survey/Contracting Projects"
                parentMenuOpen={open}
        ></NestedMenuItem>
        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Survey/Contracting Apps"
                parentMenuOpen={open}
        ></NestedMenuItem>
        </NestedMenuItem>

        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Data Management/Database Design"
                onClick={() => {
                  navigate("geomatics/geospatial/data-management");
                }}
                parentMenuOpen={open}
        >
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Data Management/Database Design Projects"
                parentMenuOpen={open}
        ></NestedMenuItem>
        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Data Management/Database Apps"
                parentMenuOpen={open}
        ></NestedMenuItem>
        </NestedMenuItem>

        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Application Development"
                onClick={() => {
                  navigate("geomatics/geospatial/application-development");
                }}
                parentMenuOpen={open}
        >
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Application Development Projects"
                parentMenuOpen={open}
        ></NestedMenuItem>
        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Application Development Apps"
                parentMenuOpen={open}
        ></NestedMenuItem>
        </NestedMenuItem> */}
      </Menu>
{/*       <NestedDropdown
        menuItemsData={menuItemsData2}
        MenuProps={{elevation: 3}}
        ButtonProps={{variant: 'text', sx:{ fontSize: '1.5rem', color: 'white'},
        color: "inherit",
        endIcon: <KeyboardArrowDownIcon />,
        "aria-owns":anchorEl ? "simple-menu" : undefined,
        "aria-haspopup":"true",
        onClick:handleClick,
        onMouseOver:handleClick}}
        onClick={() => console.log('Clicked')}
      /> */}
          </ThemeProvider>
  )
      {/* <Button sx={{fontSize: '1.5rem'}} color="inherit">Training</Button>
      <Button sx={{fontSize: '1.5rem'}} color="inherit">Support Services</Button>
      <Button sx={{fontSize: '1.5rem'}} color="inherit">Request Work</Button>
      <Button sx={{fontSize: '1.5rem'}} color="inherit">About Us</Button> */}
          {/* </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        {/* </Toolbar>
      </AppBar> */}
      {/* <AppBar  position="static">
        <Toolbar> */}
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <Button sx={{fontSize: '1.5rem'}} color="inherit">Home</Button> */}
}
