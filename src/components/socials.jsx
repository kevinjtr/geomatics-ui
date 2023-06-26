import React from "react"
                
export const Socials = (props) => {
    return(
    <div style={{display:"flex", justifyContent:"end", paddingRight:"35px"}}>
      <a href={props.data ? props.data.facebook : "/"}>
        <i className="fa fa-facebook" ></i>
      </a>
      <a href={props.data ? props.data.twitter : "/"}>
        <i className="fa fa-twitter"></i>
      </a>
   
      <a href={props.data ? props.data.youtube : "/"}>
        <i className="fa fa-youtube"></i>
      </a>
  </div>
    )
}     
                