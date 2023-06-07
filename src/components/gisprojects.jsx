import React from "react";
import {  useParams } from "react-router-dom";

export const GisProjects = (props) => {
    const {id} = useParams()
    return(
        <div id="gis-apps" className="text-center">
            <div className="container">
                <div className="section-title">
                    {props.data
                    ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                  >
                    <div >
                        {
                            id === d.largeImage ? 
                            <div style={{paddingTop:"60px"}}>
                            <img src={d.smallImage}  alt={d.title} style={{float:"left"}}/>
                            <h2>{d.title}</h2>
                            <p style={{textAlign:"center"}}>
                                {d.text}
                            </p>
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