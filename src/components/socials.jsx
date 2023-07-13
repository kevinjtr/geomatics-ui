import React from "react"
import { Link } from "react-router-dom"      


export const Socials = (props) => {
    return(
    
    <div style={{display:"flex", justifyContent:"end", paddingRight:"35px", paddingBottom:'10px'}}>
      <Link to={props.data ? props.data.linkedin : "/"}>
        <i className="fa fa-linkedin" style={{paddingLeft:"30px"}}></i>
      </Link> 
      
      <Link to={props.data ? props.data.facebook : "/"}>
        <i className="fa fa-facebook" style={{paddingLeft:"30px"}}></i>
      </Link>
      <Link to={props.data ? props.data.twitter : "/"}>
        <i className="fa fa-twitter" style={{paddingLeft:"30px"}}></i>
      </Link>
   
      <Link to={props.data ? props.data.youtube : "/"}>
        <i className="fa fa-youtube" style={{paddingLeft:"30px"}}></i>
      </Link>
      
      <Link to={props.data ? props.data.email : "/"}>
        <i className="fa fa-envelope" style={{paddingLeft:"30px"}}></i>
      </Link>                
  </div>
    )
}     
                