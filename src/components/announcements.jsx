import React from 'react';
import Carousel from 'react-material-ui-carousel'

export const  Announcements = (props) =>
{
    

    return (
        <Carousel navButtonsAlwaysVisible animation='slide' duration='1200' height="500px" interval={10000}>
            {
                props.data?
                props.data.map( (item, i) => <Item key={i} item={item} /> )
                : "Loading"
            }
        </Carousel>

    )
        }

function Item(props)
{
    return (
            <article style={{  height:'100%', position:"relative", overflow:"hidden", display:"flex", justifyContent:"center"}}>
                <container>
                <div style={{float:"left", position:"relative"}}>
                    <img style={{objectFit:"contain", height:"100%"}} src={props.item.image} alt='announcement'/>
                    <h4 style={{objectFit:"contain", fontSize:"40px", color:"white", textAlign:"center", paddingRight:"inherit", width:"20%", position:"absolute", top:"0",bottom:"0",left:"0", right:"0", height:"fit-content", margin:"auto", textShadow:"0 0 25px black"}}>{props.item.name}</h4>
                </div>
                <div style={{float:"right", textAlign:"center", position:"relative", paddingLeft:"20px"}}>
                    <h1 style={{paddingTop:"50px"}}>{props.item.date}</h1>
                    <p style={{paddingTop:"15px"}}>{props.item.agenda1}</p>
                    <p style={{paddingTop:"15px"}}>{props.item.agenda2}</p>
                    <p style={{paddingTop:"15px"}}>{props.item.agenda3}</p>
                </div>
                </container>    
            </article>
    )
}