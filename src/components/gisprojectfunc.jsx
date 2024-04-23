import React from "react";
import {  useParams } from "react-router-dom";
import { Stack } from "@mui/material"

export const GisProjectFunc = (props) => {
    const {id} = useParams()
    return(
        <div id="gis-projects" className="text-center">
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
                            <Stack spacing={2} sx={{textAlign: 'center'}}>
                            <a href={d.link} rel="noreferrer" target="_blank"> 
                              <img src={d.smallImage}  alt={d.title} style={{ paddingTop: 25, maxWidth: '1200'}} /> 
                            </a>
                            <h2>{d.title}</h2>
                            <p >
                                {d.text}
                            </p>
                            </Stack>
                              
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