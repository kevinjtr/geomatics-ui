import React from "react";

export const Services = (props) => {
  return (
    <div className="text-center"> 
    <div className="container">
      <div style={{paddingTop:"60px"}}>
        <img src ="../img/portfolio/01-small.jpg" alt="title" style={{float:"left"}}/>
        <h2>Title 1</h2>
        <p style={{textAlign:"center", paddingLeft:"50px"}}>
          Random Paragraph about the first support service offered. Honestly on  a theoretical level, I could make this dynamic just like the GisProjects page, but I wanna set up design visually first.

        </p>
      </div>
    </div>
    <div className="container">
      <div style={{paddingTop:"60px"}}>
        <img src ="../img/portfolio/02-small.jpg" alt="title" style={{float:"right"}}/>
        <h2>Title 2</h2>
        <p style={{textAlign:"center", paddingLeft:"50px"}}>
          I'd want more spacing between these pages for sure.
        </p>
      </div>
    </div>
    <div className="container">
      <div style={{paddingTop:"60px"}}>
        
        <h2>Title 3</h2>
        <p style={{textAlign:"center", paddingLeft:"50px"}}>
          i think it would be nice if the photos varied in orientation as well. Will talk details with Kevin and co.
        </p>
        <img src ="../img/portfolio/03-small.jpg" alt="title" style={{}}/>
      </div>
    </div>
    
    </div>
  );
};
