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

export default function NavBarButtonLinks(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { label, menuItemsData } = props

    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
          setAnchorEl(event.currentTarget);
        }
      }

    const handleClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);

  return (
          <ThemeProvider theme={theme}>
          <Button sx={{fontSize: '1.5rem'}} color="inherit"
                endIcon={<KeyboardArrowDownIcon />}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              {label}
          </Button>
          <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{ onMouseLeave: handleClose }}
    >
      {menuItemsData?.map( item => (<MenuItem onClick={(e) => { handleClose(e); window.open(item.url, '_blank');}}>{item.label}</MenuItem>))}
          </Menu>
          </ThemeProvider>
  );
}