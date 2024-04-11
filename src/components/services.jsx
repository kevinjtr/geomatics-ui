import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";


export const Services = (props) => {
  
  const columns = 
  [
    {field: 'title', headerName:"Title", width:400,},
    {field:"category", headerName:"Category", width:250},
    {field:"link", headerName:"External Link", width:805, sortable: false, renderCell: (params) =>(
      <a  href={(params.value)}>{params.value}</a>
    )}
  ]

  const rows = 
  [
    
    {
      id: 1 ,
      title: "HQ Geospatial Engineering Cop Site", 
      link: "https://usace.dps.mil/sites/KMP-GS",
      category:"CoP Sites"
    },
    {
      id: 2,
      title: "UOC Common Operating Picture", 
      link: "https://arcportal-ucop-corps.usace.army.mil/s0portal/home/",
      category:"CoP Sites"
    },
    {
      id: 3,
      title: "Florida Hydrologic Unit Code Basins Viewer", 
      link: "https://geodata.dep.state.fl.us/datasets/FDEP::florida-hydrologic-unit-code-huc-basins-areas/explore?location=28.023093%2C-83.755400%2C6.51",
      category:"Viewers"
    }
  
]

  return (
    
    <>
    <div className="text-center" style={{paddingTop:"25px"}}>
          <h2>Support Services</h2>
    </div>
    <body style={{display:"flex", justifyContent:"center", paddingTop:"50px"}}>
      <div>
        <ul>
        <Box sx={{width:1500}}>
    <DataGrid
      autoHeight
      rowHeight={50}
     disableColumSelector
     disableColumnMenu
     disableColumnResize
     disableRowSelectionOnClick
        sx={{fontSize:16}}
        rows={rows}
        columns={columns}
      />       
    </Box>
        </ul>
        </div>
    </body>
    </>
  );
};
