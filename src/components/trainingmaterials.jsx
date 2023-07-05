import React from "react";

export const TrainingMaterial = (props) => {
  return (
    <>
    <div className="text-center">
          <h2>Training Materials</h2>
    </div>
    <body style={{display:"flex", justifyContent:"center"}}>
      <div>
        <h2 style={{textAlign:"center"}}>SOP</h2>
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
