import React from "react";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from "@mui/material";

export const BasicList = (props) => {
  return (
    <Box sx={{ width: '100%', display:"flex", justifyContent:"center", paddingBottom:"30px" }}>
      
      <List>
      <h4>Example Category 1</h4>
        {props.data
        ? props.data.map((d,i) => (
          <div
            key={`${d.name}-${i}`}
          >
              {
              d.category === "example 1" ?
              <ListItem disablePadding>
                <ListItemButton a href={d.linkto}>
                <ListItemText primary={d.name} />
                </ListItemButton>
              </ListItem>
              : null
              }
          </div>
        ))
      :"Loading"}
      </List>
      <Divider />
      <List >
      <h4>Example Category 2</h4>
        {props.data
        ? props.data.map((d,i) => (
          <div 
            key={`${d.name}-${i}`}
          >
              {
              d.category === "example 2" ?
              <ListItem disablePadding>
                <ListItemButton a href={d.linkto}>
                <ListItemText primary={d.name} />
                </ListItemButton>
              </ListItem>
              : null
              }
          </div>
        ))
      :"Loading"}
      </List>
      <Divider />
      <List>
        <h4>Example Category 3</h4>
        {props.data
        ? props.data.map((d,i) => (
          <div 
            key={`${d.name}-${i}`}
          >
              {
              d.category === "example 3" ?
              <ListItem disablePadding>
                <ListItemButton a href={d.linkto}>
                <ListItemText primary={d.name} />
                </ListItemButton>
              </ListItem>
              : null
              }
          </div>
        ))
      :"Loading"}
      </List>
    </Box>
  );
}