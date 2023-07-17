import React from "react";

export const Services = (props) => {
  return (
    <div className="text-center" style={{paddingBottom:"75px"}}>
      {props.data
      ? props.data.map((d,i) => (
        <div
          key={`${d.title}-${i}`}
          >
            <div>
              {
                d.type === "left" ?
                <div className="container">
                <div style={{paddingTop:"100px"}}>
                <a href={d.link}>
                <img src ={d.image} alt="title" style={{float:"left"}}/>
                <h2>{d.name}</h2>
                <p style={{textAlign:"center", paddingLeft:"50px"}}>
                {d.text}
                </p>
                </a>
                </div>
                </div>
                : d.type ===  "right" ?
                <div className="container">
                <div style={{paddingTop:"100px"}}>
                <a href={d.link}>
                <img src ={d.image} alt="title" style={{float:"right"}}/>
                <h2>{d.name}</h2>
                <p style={{textAlign:"center", paddingLeft:"50px"}}>
                {d.text}
                </p>
                </a>
                </div>
                </div>
                : d.type === "top" ? 
                <div className="container">
                <div style={{paddingTop:"100px"}}>
                <a href={d.link}>
                <h2>{d.name}</h2>
                <p style={{textAlign:"center", paddingLeft:"50px"}}>
                {d.text}
                </p>
                <img src ={d.image} alt="title" /></a>
                </div>
                </div>
                : null
              }
            </div>
            </div>
      )): "Loading..."} 
   </div>
    
  );
};
