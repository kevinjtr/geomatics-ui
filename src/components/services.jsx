import React from "react";

export const Services = (props) => {
  return (
    <>
    <div className="text-center">
          <h2>Support Services</h2>
    </div>
    <body style={{display:"flex", justifyContent:"center"}}>
      <div>
        <ul>
          <li>
          <h3 style={{textAlign:"center"}}>Category 1</h3>
            <ul>
              {
                props.data ? props.data.map((d,i) => (
                  <div key={`${d.title}-${i}`}>{
                <li style={{textAlign:"center", padding:"10px"}}>
                  <a href={d.link}>{d.name}</a>
                </li>
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
