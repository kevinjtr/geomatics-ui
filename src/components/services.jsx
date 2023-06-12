import React from "react";

export const Services = (props) => {
  return (
    <div className="text-center">
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
                <img src ={d.image} alt="title" style={{float:"left"}}/>
                <h2>{d.name}</h2>
                <p style={{textAlign:"center", paddingLeft:"50px"}}>
                {d.text}
                </p>
                </div>
                </div>
                : d.type ===  "right" ?
                <div className="container">
                <div style={{paddingTop:"100px"}}>
                <img src ={d.image} alt="title" style={{float:"right"}}/>
                <h2>{d.name}</h2>
                <p style={{textAlign:"center", paddingLeft:"50px"}}>
                {d.text}
                </p>
                </div>
                </div>
                : d.type === "top" ? 
                <div className="container">
                <div style={{paddingTop:"100px"}}>
                <h2>{d.name}</h2>
                <p style={{textAlign:"center", paddingLeft:"50px"}}>
                {d.text}
                </p>
                <img src ={d.image} alt="title" />
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
