import { Image } from "./image";
import React from "react";

export const AppGallery = (props) => {
  return (
    <div id="gis-apps" className="text-center" style={{paddingBottom:"300px"}}>
      <div className="container">
        <div className="section-title">
          <h2>GIS Applications</h2>
        </div>
        <div className="row">
          <div className="gis-app-items"  style={{marginTop:"10px",marginBottom:"50px", marginLeft:"50px",marginRight:"50px", alignContent:"center"}}>
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    style={{maxWidth:"350px", maxHeight:"200px", minHeight:"200px", minWidth:"350px", padding:"15px"}}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                     />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
