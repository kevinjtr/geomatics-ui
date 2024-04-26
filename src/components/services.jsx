import React from "react";
import { Typography } from "@mui/material";

export const Services = (props) => {
  return (
    <>
     <Typography variant="h4" sx={{py: 2.5, textAlign: 'center'}}>
                Support Services
            </Typography>
    <body style={{display:"flex", justifyContent:"center"}}>
      <div>
        <ul>
          <li>
          <h3 style={{textAlign:"center"}}>Category 1</h3>
            <ul>
              {
                props.data ? props.data.map((d,i) => (
                  <div key={`${d.title}-${i}`}>{
                <li style={{textAlign:"center", padding:"10px"}}>
                  <a href={d.link}>{d.name}</a>
                </li>
              }
              </div>
                ))
              : "Loading"}
            </ul>
          </li>
        </ul>
        </div>
    </body>
    </>
  );
};
