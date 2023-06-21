import React from 'react';
import Carousel from 'react-material-ui-carousel'

export const  Announcements = (props) =>
{
    

    return (
        <Carousel navButtonsAlwaysVisible animation='slide' duration='1200' interval={10000} height={700}>
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
            <article style={{  height:'100%', position:'relative', overflow:"hidden", display:"flex", justifyContent:"center"}}>
                <img style={{objectFit:"contain", width:"100%", height:"100%"}} src={props.item.image} alt='announcement'/>
                <h4 style={{fontSize:"80px", color:"white", textAlign:"center", position:"absolute", top:"0",bottom:"250",left:"0", right:"0", height:"fit-content", margin:"auto", textShadow:"0 0 25px black"}}>{props.item.name}</h4>
            </article>
    )
}