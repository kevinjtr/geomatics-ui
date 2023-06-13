import React from "react";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Divider } from "@mui/material";

export const BasicList = (props) => {
  return (
    <>
    <div>
        <h1 style={{display:"flex", justifyContent:"center"}}>Reference Links</h1>
      </div>
    <Box sx={{ width: '100%', display:"flex", justifyContent:"center", paddingBottom:"30px"}}>
      
      <List inset sx={{ width: '100%', maxWidth: 250, bgcolor: '#125780' }}
      component="nav"
      subheader={
        <ListSubheader component="h4" sx={{bgcolor: "#125780", color:"white", fontSize:"20px"}}>
          Example Category 1
        </ListSubheader>
      }>
        {props.data
        ? props.data.map((d,i) => (
          <div
            key={`${d.name}-${i}`}
            style={{backgroundColor:"#d5d9db"}}
          >
              {
              d.category === "example 1" ?
              <ListItem disablePadding>
                <ListItemButton a href={d.linkto}>
                <ListItemText primary={d.name} style={{color:"#125780"}}/>
                </ListItemButton>
              </ListItem>
              : null
              }
          </div>
        ))
      :"Loading"}
      </List>
      <Divider orientation="vertical"/>
      <List inset sx={{ width: '100%', maxWidth: 250, bgcolor: '#8a2b1e' }}
      component="nav"
      subheader={
        <ListSubheader component="h4" sx={{bgcolor: "#8a2b1e", color:"white",fontSize:"20px"}}>
          Example Category 2
        </ListSubheader>} >
        {props.data
        ? props.data.map((d,i) => (
          <div 
            key={`${d.name}-${i}`}
            style={{backgroundColor:"#d5d9db"}}
          >
              {
              d.category === "example 2" ?
              <ListItem disablePadding>
                <ListItemButton a href={d.linkto}>
                <ListItemText primary={d.name} style={{color:"#8a2b1e"}}/>
                </ListItemButton>
              </ListItem>
              : null
              }
          </div>
        ))
      :"Loading"}
      </List>
      <Divider orientation="vertical"/>
      <List inset sx={{ width: '100%', maxWidth: 250, bgcolor: '#a68716' }}
      component="nav"
      subheader={
        <ListSubheader component="h4" sx={{bgcolor: "#a68716", color:"white", fontSize:"20px"}}>
          Example Category 3
        </ListSubheader>} >
        {props.data
        ? props.data.map((d,i) => (
          <div 
            key={`${d.name}-${i}`}
            style={{backgroundColor:"#d5d9db"}}
          >
              {
              d.category === "example 3" ?
              <ListItem disablePadding>
                <ListItemButton a href={d.linkto}>
                <ListItemText primary={d.name} style={{color:"#a68716"}}/>
                </ListItemButton>
              </ListItem>
              : null
              }
          </div>
        ))
      :"Loading"}
      </List>
    </Box>
    </>
  );
  
}