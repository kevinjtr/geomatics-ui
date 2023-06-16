import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Image } from './image';

export function Announcements(props)
{
    var items = [
        {
            name: "Announcement 1",
            image: "img/portfolio/01-small.jpg",
            link: "img/portfolio/01-large.jpg",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Announcement 2",
            image: "img/portfolio/02-small.jpg",
            link: "img/portfolio/02-large.jpg",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Announcement 3",
            image: "img/portfolio/01-small.jpg",
            link: "img/portfolio/01-large.jpg",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Announcement 4",
            image: "img/portfolio/02-small.jpg",
            link: "img/portfolio/02-large.jpg",
            description: "Probably the most random thing you have ever seen!"
        }
    ]

    return (
        <Carousel navButtonsAlwaysVisible animation='slide' duration='1200'>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
            <div style={{ display:"flex", justifyContent:"center", height:"350px", width:"100%"}}>
                <Image title={props.item.name}  smallImage={props.item.image} />
            </div>
    )
}