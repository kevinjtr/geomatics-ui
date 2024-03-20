import React, {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import  AppBarMenu  from './app-bar-menu';
import {Adb as NewIcon, Save as SaveIcon, SaveAs as SaveAsIcon, ImportExportRounded as ImportExportRoundedIcon, NewIc } from "@mui/icons-material"


export default function NestedMenu(){
    const [productMenuOpen, setProductMenuOpen] = useState(false);


return(
    <AppBarMenu
    open={productMenuOpen}
    onOpen={() => setProductMenuOpen(true)}
    onClose={() => setProductMenuOpen(false)}
    title={
        <React.Fragment>
            <MenuItem 
            //component={RouteLink} to="/" onClick={() => setProductMenuOpen(false)}
            >
                <ListItemIcon>
                    <Icon fontSize="small" />
                </ListItemIcon>
                Product
            </MenuItem>
            <MenuItem 
            //onClick={() => setProductMenuOpen(false)}
            >
                <ListItemIcon>
                    <Icon fontSize="small" />
                </ListItemIcon>
                Product
            </MenuItem>
        </React.Fragment>
    }
>
    <Button
        //onClick={scrollToTop}
        sx={{ my: 2, color: 'white', display: 'block' }}
        aria-controls={productMenuOpen ? 'product-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={productMenuOpen ? 'true' : undefined}
    >
        Products
    </Button>
</AppBarMenu>
)

   
}

