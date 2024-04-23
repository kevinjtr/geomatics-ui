import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate  } from "react-router-dom";

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
    items: [
      {
        label: 'GIS',
        leftIcon: <SaveIcon />,
        sx: {"&.Mui-Popover": {sx: {fontSize: '50px !important'}}},
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

const geoDir = 'geomatics/geospatial/'

const menusArray = [
  { label: 'GIS', top: geoDir + 'gis', projects: geoDir + 'remote-sensing/projects', apps: geoDir + 'remote-sensing/apps' },
  { label: 'Remote Sensing', top: geoDir + 'remote-sensing', projects: geoDir + 'remote-sensing/projects', apps: geoDir + 'remote-sensing/apps' },
  { label: 'Survey/Contracting', top: geoDir + 'survey-contracting', projects: geoDir + 'survey-contracting/projects' , apps: geoDir + 'survey-contracting/apps' },
  { label: 'Data Management/Database Desgin', top: geoDir + 'data-management', projects: geoDir + 'data-management/projects', apps: geoDir + 'data-management/apps' },
  { label: 'Application Development', top: geoDir + 'application-development', projects: geoDir + 'application-development/projects', apps: geoDir + 'application-development/apps' }
]

const open = Boolean(anchorEl);

  return (
    


            <ThemeProvider theme={theme}>
            <Button sx={{color: 'white', zIndex: (theme) => theme.zIndex.modal + 1500}}
          endIcon={<KeyboardArrowDownIcon />}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleClose}

      >
        Geospatial
      </Button>
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
         <Link to='/geomatics/geospatial'>
         <MenuItem sx={{color: 'blue', textDecoration:'underline'}}>
          View all
          </MenuItem>
           </Link>
          
           {menusArray.map(item => <>
            <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label={item.label}
                parentMenuOpen={open}
                onClick={() => {
                  navigate(item.top);
                }}
          >
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label={item.label + " Projects"}
                parentMenuOpen={open}
                onClick={() => {
                  navigate(item.projects);
                }}
        ></NestedMenuItem>
        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label={item.label + " Apps"}
                parentMenuOpen={open}
                onClick={() => {
                  navigate(item.apps);
                }}
        ></NestedMenuItem>
        </NestedMenuItem>
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
