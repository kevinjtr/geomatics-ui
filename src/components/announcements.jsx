import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material';
export const  Announcements = (props) =>
{
    

    return (
        <Box sx={{marginLeft:"2.5%", marginRight:"2.5%"}}>
            <Carousel  navButtonsAlwaysVisible animation='slide' duration='1200' height="500px" interval={10000}>
            {
                props.data?
                props.data.map( (item, i) => <Item key={i} item={item} /> )
                : "Loading"
            }
        </Carousel>
            
        </Box>
        

    )
        }

function Item(props)
{
    return (
        
            <article style={{height:'100%', position:"relative", display:"flex", justifyContent:"center", flexFlow:"row wrap"}}>
                <container>
                <div style={{float:"left", position:"relative" , flexBasis:"50%"}}>
                    <img style={{objectFit:"contain", height:"100%"}} src={props.item.image} alt='announcement'/>
                    <h4 style={{objectFit:"contain", fontSize:"40px", color:"white", textAlign:"center", paddingRight:"inherit", width:"20%", position:"absolute", top:"0",bottom:"0",left:"0", right:"0", height:"fit-content", margin:"auto", textShadow:"0 0 25px black"}}>{props.item.name}</h4>
                </div>
                <div style={{float:"right", textAlign:"center", position:"relative", paddingLeft:"20px", flexBasis:"50%"}}>
                    {props.item.date ? <h1 style={{paddingTop:"50px"}}>{props.item.date}</h1> : null}
                    {props.item.host ? <h5 style={{paddingTop:"50px"}}>{props.item.host}</h5> : null}
                    {props.item.agenda1 ? <p style={{paddingTop:"15px"}}>{props.item.agenda1}</p> : null}
                    {props.item.agenda2 ? <p style={{paddingTop:"15px"}}>{props.item.agenda2}</p> : null}
                    {props.item.agenda3 ? <p style={{paddingTop:"15px"}}>{props.item.agenda3}</p> : null}
                </div>
                </container>    
            </article>
    )
}