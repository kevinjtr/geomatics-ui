import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Image } from './image';

export const  Announcements = (props) =>
{
    

    return (
        <Carousel navButtonsAlwaysVisible animation='slide' duration='1200' interval={10000} height={350}>
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
            <div style={{ display:"flex", justifyContent:"center"}}>
              <h4 style={{padding:"30px"}}>{props.item.description}</h4>
                <Image title={props.item.name}  smallImage={props.item.image}/>
            </div>
    )
}