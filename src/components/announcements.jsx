import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, ListItemSecondaryAction } from '@mui/material';
import { Container } from "@mui/material";
import Image from './Image'

export const  Announcements = (props) =>
{
    

    return (
        <Box sx={{marginLeft:"2.5%", marginRight:"2.5%"}}>
            <Carousel  navButtonsAlwaysVisible animation='slide' duration='1200' height="500px" interval={10000} stopAutoPlayOnHover>
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
            props.item.template == "standard" ?
            <article style={{height:'100%', position:"relative", display:"flex", justifyContent:"center", boxShadow:'0px 0px 12px lightgray',}}>
                <Container>
                <div style={{ float:"left", position:"relative" , flexBasis:"auto", width:"50%"}}>
                    <a href={props.item.link}>
                    <Image style={{ height:"500px", width:"100%"}} src={props.item.image} alt='announcement'/>
                    
                    <h4 style={{ fontSize:"40px", color:"white", textAlign:"center", paddingRight:"inherit", width:"20%", position:"absolute", top:"0",bottom:"0",left:"0", right:"0", height:"fit-content", margin:"auto", textShadow:"0 0 25px black"}}>{props.item.name}</h4>
                    </a>
                </div>
                <div style={{ float:"right", textAlign:"center",  position:"relative", paddingLeft:"20%", flexBasis:"50%", textWrap:"wrap", width:"50%"}}>
                   
                    {props.item.date ? <h1 style={{paddingTop:"25px"}}>{props.item.date}</h1> : null}
                    {props.item.host ? <h5 style={{paddingTop:"25px"}}>{props.item.host}</h5> : null}
                    <p style={{ paddingTop:"10px", fontSize:"14px", overflowY:"auto", lineHeight: '150%' }}>
                        {props.item.agenda1 ? props.item.agenda1 : null}
                        {props.item.agenda2 ? [<br/>, props.item.agenda2] : null}
                        {props.item.agenda3 ? [<br/>, props.item.agenda3] : null}
                        {props.item.agenda4 ? [<br/>, props.item.agenda4] : null}
                        {props.item.agenda5 ? [<br/>, props.item.agenda5] : null}
                        {props.item.agenda6 ? [<br/>, props.item.agenda6] : null}
                    </p>
                </div>
                </Container>    
            </article>
            : 
            props.item.template == "link-only" ?
            <article style={{height:'100%', position:"relative", display:"flex", justifyContent:"center", boxShadow:'0px 0px 12px lightgray',}}>
            <Container>
            <div style={{ float:"left", position:"relative" , flexBasis:"auto", width:"50%"}}>
                <a href={props.item.link}>
                <Image style={{ height:"500px", width:"100%"}} src={props.item.image} alt='announcement'/>
                
                <h4 style={{ fontSize:"40px", color:"white", textAlign:"center", paddingRight:"inherit", width:"20%", position:"absolute", top:"0",bottom:"0",left:"0", right:"0", height:"fit-content", margin:"auto", textShadow:"0 0 25px black"}}>{props.item.imageText}</h4>
                </a>
            </div>
            <div style={{ float:"right", textAlign:"center",  position:"relative", paddingLeft:"20%", flexBasis:"50%", textWrap:"wrap", width:"50%"}}>
               
                {props.item.name ? <h1 style={{paddingTop:"25px"}}>{props.item.name}</h1> : null}
                <p style={{ paddingTop:"50px", fontSize:"20px", overflowY:"auto", lineHeight: '150%' }}>
                    {props.item.instruction ? props.item.instruction : null}
                </p>
            </div>
            </Container>    
        </article>
        : 
        props.item.template == "event" ?
            <article style={{height:'100%', position:"relative", display:"flex", justifyContent:"center", boxShadow:'0px 0px 12px lightgray',}}>
            <Container>
            <div style={{ float:"left", position:"relative" , flexBasis:"auto", width:"50%"}}>
                <a href={props.item.link}>
                <Image style={{ height:"500px", width:"100%"}} src={props.item.image} alt='announcement'/>
                
                <h4 style={{ fontSize:"40px", color:"white", textAlign:"center", paddingRight:"inherit", width:"20%", position:"absolute", top:"0",bottom:"0",left:"0", right:"0", height:"fit-content", margin:"auto", textShadow:"0 0 25px black"}}>{props.item.name}</h4>
                </a>
            </div>
            <div style={{ float:"right", textAlign:"center",  position:"relative", paddingLeft:"20%", flexBasis:"50%", textWrap:"wrap", width:"50%"}}>
               
                {props.item.name ? <h1 style={{paddingTop:"25px", fontSize:"40px"}}>{props.item.name}</h1> : null}
                <p style={{ fontSize:"20px", overflowY:"auto", lineHeight: '150%' }}>
                {props.item.date ? <h1>{props.item.date}</h1> : null}
                    {props.item.details ? props.item.details : null}
                </p>
            </div>
            </Container>    
        </article>
        : props.item.template == "multi-schedule" ?
        <article style={{height:'100%', position:"relative", display:"flex", justifyContent:"center", boxShadow:'0px 0px 12px lightgray',}}>
            <Container>
            <div style={{ float:"left", position:"relative" , flexBasis:"auto", width:"50%"}}>
                <a href={props.item.link}>
                <Image style={{ height:"500px", width:"100%"}} src={props.item.image} alt='announcement'/>
                
                <h4 style={{ fontSize:"40px", color:"white", textAlign:"center", paddingRight:"inherit", width:"20%", position:"absolute", top:"0",bottom:"0",left:"0", right:"0", height:"fit-content", margin:"auto", textShadow:"0 0 25px black"}}>{props.item.name}</h4>
                </a>
            </div>
            <div style={{ float:"right", textAlign:"center",  position:"relative", paddingLeft:"20%", flexBasis:"50%", textWrap:"wrap", width:"50%"}}>
               
                <p style={{paddingTop:"100px", fontSize:"14px", overflowY:"auto", lineHeight: '150%', paddingBottom:"25px" }}>
                    {props.item.day1 ? <b>{props.item.day1}</b> : null}
                    {props.item.time1 ? [<br/>, props.item.time1] : null}
                    {props.item.day2 ? [<br/>, <b>{props.item.day2}</b>] : null}
                    {props.item.time2 ? [<br/>, props.item.time2] : null}
                    {props.item.day3 ? [<br/>, <b>{props.item.day3}</b>] : null}
                    {props.item.time3 ? [<br/>, props.item.time3] : null}
                    {props.item.day4 ? [<br/>, <b>{props.item.day4}</b>] : null}
                    {props.item.time4 ? [<br/>, props.item.time4] : null}
                    {props.item.day5 ? [<br/>, <b>{props.item.day5}</b>] : null}
                    {props.item.time5 ? [<br/>, props.item.time5] : null}
                </p>
            </div>
            </Container>    
        </article> :
        <h1 style={{textAlign:"center", paddingTop:"200px"}}>Slide isn't properly categorized! Check the JSON for examples.</h1>

    )
}