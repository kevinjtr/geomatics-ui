import React from "react";
import { Link } from "react-router-dom";

export const TrainingMaterial = (props) => {
  return (
    <>
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Training Materials</h2>
        </div>
      </div>
    </div>
    <body style={{display:"flex", justifyContent:"center"}}>
      <div>
        <h2 style={{textAlign:"center"}}>SOP</h2>
        <ul>
          <li>
            <h3 style={{textAlign:"center"}}>Videos</h3>
            <ul>
              {
                props.data ? props.data.map((d,i) => (
                  <div key={`${d.title}-${i}`}>{
              d.category === "videos" ?
              <li>
              <Link to={d.link} download>{d.title}</Link>
            </li>
              : null
              }
              </div>
                ))
              : "Loading"}
            </ul>
          </li>
          <li>
          <h3 style={{textAlign:"center"}}>PDFS</h3>
            <ul>
              {
                props.data ? props.data.map((d,i) => (
                  <div key={`${d.title}-${i}`}>{
              d.category === "pdfs" ?
                <li>
                  <Link to={d.link} download>{d.title}</Link>
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
              <li>
              <Link to={d.link} download>{d.title}</Link>
              </li>
              : null
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
