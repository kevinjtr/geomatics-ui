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
          fontSize: '1rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          zIndex: 1250
        },
      },
    },
  },
});

export default function NavBarButtonLinks(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { label, menuItemsData, identifier, variant, sx } = props

    console.log(variant)
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

  return (
          <ThemeProvider key={`${identifier}-tp`} theme={theme}>
          <Button color="inherit"
          {...(variant && {variant: variant})}
          sx={{ zIndex: 1275, ...sx }}
                endIcon={<KeyboardArrowDownIcon />}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              onMouseOver={handleClick}
              onMouseLeave={handleClose}
            >
              {label}
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
      {menuItemsData?.map( (item, i) => (
      <a key={`nbl-mi-${identifier}-${i}`} href={item.url} target="_blank" style={{textDecoration: 'none', color: theme.palette.text.primary}}>
        <MenuItem onClick={(e) =>  handleClose(e)}>{item.label}
        </MenuItem>
      </a>
      ))}
          </Menu>
          </ThemeProvider>
  );
}