import { Typography } from "@mui/material";
import React from "react";

export const TrainingMaterial = (props) => {
  return (
    <>
     <Typography variant="h4" sx={{py: 2.5, textAlign: 'center'}}>
                Training Materials
            </Typography>
    <body style={{display:"flex", justifyContent:"center"}}>
      <div>
        <h1 style={{textAlign:"center"}}>Standard Operating Procedure</h1>
        <ul>
          <li>
          <h3 style={{textAlign:"center"}}>PDFS</h3>
            <ul>
              {
                props.data ? props.data.map((d,i) => (
                  <div key={`${d.title}-${i}`}>{
              d.category === "pdfs" ?
                <li style={{textAlign:"center"}}>
                  <a href={d.link} download>{d.title}</a>
                </li>
              : null
              }
              </div>
                ))
              : "Loading"}
            </ul>
          </li>
          <li>
            <h3 style={{textAlign:"center"}}>PowerPoint Presentations</h3>
            <ul>
              {
                props.data ? props.data.map((d,i) => (
                  <div key={`${d.title}-${i}`}>{
              d.category === "powerpoints" ?
              <li style={{textAlign:"center"}}>
              <a href={d.link} download>{d.title}</a>
              </li>
              : null
              }
              </div>
                ))
              : "Loading"}
            </ul>
            <h3 style={{textAlign:"center"}}>Videos</h3>
            <ul>
              {
                props.data ? props.data.map((d,i) => (
                  <div key={`${d.title}-${i}`}>{
              d.category === "videos" ?
              <li style={{textAlign:"center"}}>
              <a href={d.link} download>{d.title}</a>
            </li>
              : null
              }
              </div>
                ))
              : "Loading"}
            </ul>
          </li>
          <li>
          </li>
        </ul>
        </div>
    </body>
    </>
  );
};
