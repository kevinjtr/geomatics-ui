import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { NestedDropdown, NestedMenuItem } from 'mui-nested-menu';
import {Adb as NewIcon, Save as SaveIcon, SaveAs as SaveAsIcon, ImportExportRounded as ImportExportRoundedIcon, NewIc } from "@mui/icons-material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Menu, MenuItem } from '@mui/material';
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
    MuiMenuItem: {
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

const handleClose = () => setAnchorEl(null);
const handlePopoverOpen = (event) => {
  setAnchorEl(event.currentTarget);
};

const handlePopoverClose = () => {
  setAnchorEl(null);
};

const open = Boolean(anchorEl);

  return (
    


            <ThemeProvider theme={theme}>
            <Button sx={{color: 'white', fontSize: '1.5rem', padding: '15px 0'}}
          endIcon={<KeyboardArrowDownIcon />}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        Geospatial
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
         <Link to='/geospatial'>
         <MenuItem sx={{color: 'blue', textDecoration:'underline'}}>
          View all
          </MenuItem>
           </Link>
          
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="GIS"
                parentMenuOpen={open}
                onClick={() => {
                  navigate("/gis");
                }}
        >
          <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="GIS Projects"
                parentMenuOpen={open}
                onClick={() => {
                  navigate("/gisprojects");
                }}
        ></NestedMenuItem>
        <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="GIS Apps"
                parentMenuOpen={open}
                onClick={() => {
                  navigate("/gisapplications");
                }}
        ></NestedMenuItem>
        </NestedMenuItem>
                <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label="Remote Sensing"
                onClick={() => {
                  navigate("/remote-sensing");
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
                  navigate("/survey-contracting");
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
                  navigate("/data-management");
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
                  navigate("/application-development");
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
        </NestedMenuItem>
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
