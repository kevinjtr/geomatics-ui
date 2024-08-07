import React from "react";
import {  useParams } from "react-router-dom";
import { Stack, Grid } from "@mui/material";
import Image from './Image'

export const AppProjectView = (props) => {
    const {id} = useParams()
    return(
        <div className="text-center">
            <div className="container" >
                <div>
                    {props.data
                    ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                  >
                    <div >
                    <Stack sx={{textAlign: 'center'}}>
                        {
                            id === d.largeImage && 
                            <div style={{paddingTop:"60px", marginBottom:"30px"}}>
                              <a href={d.link} rel="noreferrer" target="_blank"> 
                                <Image src={d.smallImage}  alt={d.title} style={{maxWidth: "800px", paddingRight:"20px"}} /> 
                              </a>
                              <h2>{d.title}</h2>
                              <div style={{display: 'block', margin: 'auto', width: '1000px'}}>
                                  {d.text}
                              </div>
                              {d.url1 && <div style={{paddingTop: '25px'}}><strong>{d.url1Name ? d.url1Name : 'URL'}: </strong><a href={d.url1} target="_blank">{d.url1}</a></div>}
                              {d.url2 && <div style={{paddingTop: '25px'}}><strong>{d.url2Name ? d.url2Name : 'URL'}: </strong><a href={d.url2} target="_blank">{d.url2}</a></div>}
                            </div>
                        }
                      </Stack>    
                    </div>
                  </div>
                ))
              : "Loading..."}
                </div>
            </div>
        </div>
    )
}