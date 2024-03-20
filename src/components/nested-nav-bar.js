import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
//import { NestedDropdown } from 'mui-nested-menu';
//import {Adb as NewIcon, Save as SaveIcon, SaveAs as SaveAsIcon, ImportExportRounded as ImportExportRoundedIcon } from "@mui/icons-material"
//import BasicMenu from './nested-menu'
import { NestedDropdown } from 'mui-nested-menu';
import {Adb as NewIcon, Save as SaveIcon, SaveAs as SaveAsIcon, ImportExportRounded as ImportExportRoundedIcon, NewIc } from "@mui/icons-material"

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


export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{backgroundColor: grey[800]}} position="static">
        <Toolbar>
        <NestedDropdown
        menuItemsData={menuItemsData2}
        MenuProps={{elevation: 3}}
        ButtonProps={{variant: 'text', sx:{ fontSize: '1.5rem', color: 'white'}}}
        onClick={() => console.log('Clicked')}
      />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
