import React from "react";
import {  useParams } from "react-router-dom";

export const GisAppFunc = (props) => {
    const {id} = useParams()
    return(
        <div id="gis-apps" className="text-center">
            <div className="container" >
                <div>
<<<<<<< Updated upstream
=======
                  <p>
                   
                  </p>
>>>>>>> Stashed changes
                    {props.data
                    ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                  >
                    <div >
                        {
                            id === d.largeImage ? 
                            <div style={{paddingTop:"60px", marginBottom:"30px"}}>
                            <a href={d.link} rel="noreferrer" target="_blank"> <img src={d.smallImage}  alt={d.title} style={{float:"left", width:"100%", paddingRight:"20px"}} /> </a>
                            <h2>{d.title}</h2>
                            <p>
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