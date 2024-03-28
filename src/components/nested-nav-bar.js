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
    label: 'Calculator Tool',
    url: 'https://sajgis.saj.usace.army.mil/pcl',
  },
]

const menuItemsGisLinks = [
  {
    label: 'USGS',
    url: 'https://www.usgs.gov/',
  },
  {
    label: 'NOAA',
    url: 'https://www.noaa.gov/',
  },
]

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: grey[800] }} position="static">
        <Toolbar>
          <ThemeProvider theme={theme}>
            <NavBarButtonLinks label={"Web Applications"} menuItemsData={menuItemsDataWebApplications}/>
            <NavBarButtonLinks label={"GIS Links"} menuItemsData={menuItemsGisLinks}/>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
}