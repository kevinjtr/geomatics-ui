import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";


export const Services = (props) => {
  
  const columns = 
  [
    {field: 'title', headerName:"Title", width:400,},
    {field:"category", headerName:"Category", width:250},
    {field:"link", headerName:"External Link", width:805, sortable: false, renderCell: (params) =>(
      <a  href={(params.value)} target="_blank" rel="noreferrer">{params.value}</a>
    )}
  ]

  const rows = 
  [
    
    {
      id: 1 ,
      title: "HQ Geospatial Engineering Cop Site", 
      link: "https://usace.dps.mil/sites/KMP-GS",
      category:"COP Sites"
    },
    {
      id: 2,
      title: "UOC Common Operating Picture", 
      link: "https://arcportal-ucop-corps.usace.army.mil/s0portal/home/",
      category:"COP Sites"
    },
    {
      id: 3,
      title: "Florida Hydrologic Unit Code Basins Viewer", 
      link: "https://geodata.dep.state.fl.us/datasets/FDEP::florida-hydrologic-unit-code-huc-basins-areas/explore?location=28.023093%2C-83.755400%2C6.51",
      category:"Viewers"
    },
    {
      id: 4,
      title: "E-HYDRO COP", 
      link: "https://usace.dps.mil/sites/KMP-HS",
      category:"COP Sites"
    },
    {
      id: 5,
      title: "GIS COP", 
      link: "https://usace.dps.mil/sites/TDL-CECW-EC-GIS-CoP",
      category:"COP Sites"
    },
    {
      id: 6,
      title: "UAS COP", 
      link: "https://usace.dps.mil/sites/TDL-CELRB-TDO-NS-UAS",
      category:"COP Sites"
    },
    {
      id: 7,
      title: "Engineer Manuals",
      link: "https://www.publications.usace.army.mil/USACE-Publications/Engineer-Manuals/",
      category: "External List"
    }
  
]

  return ( 
    
    <>
    <div className="text-center" style={{paddingTop:"25px"}}>
          <h2>Support Services</h2>
    </div>
    <body style={{display:"flex", justifyContent:"center", paddingTop:"50px"}}>

      <div>
      <p style={{display:"flex", justifyContent:"center", paddingBottom:"25px", wordWrap:"normal", marginInline:"25%", textAlign:"center"}}>
        Listed below is a continually growing list of external sources. From COP sites and web viewers to USACE published engineering manuals, external sources can be found here. If you do not see a service that would be beneficial, please contact us for it to be potentially added.
      </p>

        <ul>
        <Box sx={{width:1800, justifyContent:"center", }}>
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
