import * as React from "react";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { Link } from "@mui/material";

export const TrainingMaterial = (props) => {
  return (
    <>
    <div className="text-center" style={{paddingTop:"25px"}}>
          <h2>Training Materials</h2>
    </div>
    <body style={{display:"flex", justifyContent:"center", paddingTop:"50px"}}>
      <div>
      <ul>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:"20"}}>Title</TableCell>
            <TableCell sx={{fontSize:"20"}}>Discipline</TableCell>
            <TableCell sx={{fontSize:"20"}}>File Type</TableCell>
            <TableCell sx={{fontSize:"20"}}>Date Uploaded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data ? props.data.map((d,i) => (
            
            
            <TableRow
              key={d.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontSize:"15"}}> 
                {d.title}
              </TableCell>
              <TableCell sx={{fontSize:"15"}}>{d.discipline}</TableCell>
              <TableCell sx={{fontSize:"15"}}><a href={d.link} download>{d.fileType}</a></TableCell>
              <TableCell sx={{fontSize:"15"}}>{d.dateAdded}</TableCell>

              
            </TableRow>
            
          ))
        : "Loading"}
        </TableBody>
      </Table>
    </TableContainer>
              
            </ul>
        
        </div>
    </body>
    </>
  );
};
