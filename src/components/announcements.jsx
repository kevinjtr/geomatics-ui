import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Image } from './image';

export const  Announcements = (props) =>
{
    

    return (
        <Carousel navButtonsAlwaysVisible animation='slide' duration='1200' interval={10000}>
            {
                props.data.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    )
        }

function Item(props)
{
    return (
            <div style={{ display:"flex", justifyContent:"center", height:"350px"}}>
              <h4 style={{padding:"30px"}}>{props.item.description}</h4>
                <Image title={props.item.name}  smallImage={props.item.image}/>
            </div>
    )
}