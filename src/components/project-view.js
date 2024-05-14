import React from "react";
import {  useParams } from "react-router-dom";
import { Stack, Grid } from "@mui/material";

export const ProjectView = (props) => {
    const {id} = useParams()
    return(
        <div id="gis-apps" className="text-center">
            <div className="container" >
                <div>
                    {props.data
                    ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                  >
                    <div >
                        {
                            id === d.largeImage ? 
                            <div style={{paddingTop:"60px", marginBottom:"30px"}}>
                              <Stack sx={{textAlign: 'center'}}>
                              <a href={d.link} rel="noreferrer" target="_blank"> <img src={d.smallImage}  alt={d.title} style={{maxWidth: "800px", paddingRight:"20px"}} /> </a>
                            <h2>{d.title}</h2>
                            <div style={{display: 'block', margin: 'auto', width: '1000px'}}>
                                {d.text}
                            </div>
                              </Stack>

                            </div>
                              
                            : null
                        }    
                    </div>
                  </div>
                ))
              : "Loading..."}
                </div>
            </div>
        </div>
    )
}