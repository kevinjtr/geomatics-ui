import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import{ Box } from "@mui/material";


export const TrainingMaterial = (props) => {
  const columns =
  [
    {field: 'title', headerName:"Title", width:400,},
    {field:"discipline", headerName:"Discipline", width:250},
    {field:"fileType", headerName:"File Type", width:140},
    {field:"dateCreated", headerName:"Date Created", sortable: false, width:200},
    {field:"link", headerName:"Download Link", width:505, sortable: false, renderCell: (params) =>(
      <a download href={(params.value)}>{params.value.includes('/') ? params.value.split('/').slice(-1) : params.value}</a>
    )}
  ]
  const rows = 
  [
    {
      id: 1 ,
      title: "Overview of Geomatics Section", 
      fileType: "PDF",
      link: "../training/Geomatics_QMS_Chief_update.pdf",
      dateCreated: "",
      discipline: "Geomatics General"
    },
    {
      id: 2,
      fileType: "PDF",
      title: "Data Management Best Practices",
      link: "../training/DB_Overview_SAJ_ForInternalUseV2.1.17.2023.pdf",
      dateCreated: "01/17/2023",
      discipline: "Data Management"
    },
    {
      id: 3,
      fileType: "MP4",
      title: "Introduction to Geomatics",
      link: "../training/17 Geomatics Section (EN-DG) 2023-04-12.mp4",
      dateCreated: "04/12/2023",
      discipline: "Geomatics General"
    },
    {
      id: 4,
      fileType: "PDF",
      title: "How to Build a Data Dictionary",
      link: "../training/How to Build a Data Dictionary.pdf",
      dateCreated: "",
      discipline: "Database Design"
    }
]
  return (
    <>
    <div className="text-center" style={{paddingTop:"25px", textAlign:"center"}}>
      <h2>Training Materials</h2>
    </div>
    <body style={{display:"flex",  paddingTop:"50px", justifyContent:"center"}}>
      <div style={{textAlign:"center"}}>
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
