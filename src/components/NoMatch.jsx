import React from "react";

export const NoMatch = (props) => {
  return (
    <>
    <div className="text-center" style={{marginTop:"25px"}}>
          <h2 >ERROR 4O4</h2>
    </div>
    <body style={{display:"flex", justifyContent:"center"}}>
      <div>
        <h1 style={{textAlign:"center"}}>This page doesn't currently exist!</h1>
        <h1 style={{textAlign:"center", fontSize:"25"}}> Check that the address is correct, or use the previous pages to find what you were looking for.</h1>
        <ul>
        </ul>
        </div>
    </body>
    </>
  );
};
