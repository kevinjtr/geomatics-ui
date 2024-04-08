import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import{ Box } from "@mui/material";



export const TrainingMaterial = (props) => {
  const columns =
  [
    {field: 'title', headerName:"Title", width:400,},
    {field:"discipline", headerName:"Discipline", width:250},
    {field:"fileType", headerName:"File Type", width:140},
    {field:"dateAdded", headerName:"Date Uploaded", width:200},
    {field:"link", headerName:"Download Link", width:505, sortable: false, renderCell: (params) =>(
      <a download href={(params.value)}>{params.value}</a>
    )}
    
  ]
  const rows = 
  [
    {
      id: 1,
      title: "Example Title NO FILE",
      fileType: "PDF",
      dateAdded: "04/04/2024",
      discipline: "Geomatics General"
    },
    {
      id: 2,
      title: "Overview of Geomatics Section",
      fileType: "PDF",
      link: "../training/Geomatics_QMS_Chief_update.pdf",
      dateAdded: "07/25/2023",
      discipline: "Geomatics General"
    },
    {
      id: 3,
      fileType: "PDF",
      title: "Data Management Best Practices",
      link: "../training/DB_Overview_SAJ_ForInternalUseV2.1.17.2023.pdf",
      dateAdded: "07/26/2023",
      discipline: "Data Management"
    },
    {
      id: 4,
      fileType: "MP4",
      title: "Introduction to Geomatics",
      link: "../training/17 Geomatics Section (EN-DG) 2023-04-12.mp4",
      dateAdded: "07/30/2023",
      discipline: "Geomatics General"
    }
  
]
  return (
    <>
    <div className="text-center" style={{paddingTop:"25px"}}>
          <h2>Training Materials</h2>
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
