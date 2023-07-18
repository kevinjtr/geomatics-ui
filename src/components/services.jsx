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
                <img src ={d.image} alt="title" style={{float:"left"}}/> </a>
                <h2>{d.name}</h2>
                <p style={{textAlign:"center", paddingLeft:"50px"}}>
                {d.text}
                </p>
               
                </div>
                </div>
                : d.type ===  "right" ?
                <div className="container">
                <div style={{paddingTop:"100px"}}>
                
                <a href={d.link}><img src ={d.image} alt="title" style={{float:"right"}}/></a>
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
                <a href={d.link}><img src ={d.image} alt="title" /></a>
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
