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
import links from '../data/links.json'

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

export default function NestedLinkMenu({sx, ...rest}) {
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
    { label: 'Internal', type: 'internal' },
    { label: 'External', type: 'external' }
]

const open = Boolean(anchorEl);

  return (
    


            <ThemeProvider theme={theme}>
              <Button {...rest} sx={{ ...sx, color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' }, zIndex: 1295 }}
          endIcon={<KeyboardArrowDownIcon />}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onMouseOver={handleClick}
        onMouseLeave={handleClose}

      >
        Links
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
           { menusArray.map((item, i) => 
            <NestedMenuItem
                //leftIcon={<NewIcon />}
                //rightIcon={<SaveAsIcon />}
                label={item.label}
                parentMenuOpen={open}
                // onClick={() => {
                //   navigate(item.top);
                // }}
          >
              {links?.[item.type]?.length === 0 ?
              <MenuItem disabled>
              no links were found.
              </MenuItem> :
              links?.[item.type]?.map((link, i) => (
                <a key={`nlm-ma-${item.type}-${i}`} href={link.url} target="_blank" style={{textDecoration: 'none', color: theme.palette.text.primary}}>
                <MenuItem onClick={(e) =>  handleClose(e)}>{link.label}
                </MenuItem>
                </a>
                ))}
        </NestedMenuItem>)}

      </Menu>
    </ThemeProvider>
  )
}
