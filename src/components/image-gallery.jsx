import Image from "./Image";
import React from "react";
import {Grid} from '@mui/material'
import './image-gallery.css'
import { Link } from 'react-router-dom'

const currDir = '/geospatial'

const nameDictionary = {
  project: 'projects',
  application: 'apps'
}

const disciplineLabels = {
  gis: {label: "GIS", url: (name) => `/gis/${nameDictionary?.[name.toLowerCase()]}/`},
  remoteSensing: {label: "Remote Sensing", url: (name) => `/remote-sensing/${nameDictionary?.[name.toLowerCase()]}/`},
  surveyContracting: {label: "Survey/Contracting", url: (name) => `/survey-contracting/${nameDictionary?.[name.toLowerCase()]}/`},
  dataManagement: {label: "Data Management/Database Design", url: (name) => `/data-management/${nameDictionary?.[name.toLowerCase()]}/`},
  applicationDevelopment: {label: "Application Development", url: (name) => `/application-development/${nameDictionary?.[name.toLowerCase()]}/`},
}

export const ImageGallery = (props) => {
  const { name, discipline } = props
  return (
    <div id="gis-apps" className="text-center" style={{paddingBottom:"320px"}}>
      <div className="container">
        <div className="section-title" style={{textAlign:'center', fontSize: '1.25rem'}}>
          <h2>{disciplineLabels?.[discipline].label} {name}s</h2>
        </div>
        <div className="row">
          {/* <div className="gis-app-items"  style={{display: "flex", direction: "column", marginTop:"10px",marginBottom:"50px", marginLeft:"50px",marginRight:"50px", alignContent:"center"}}> */}
          <Grid container spacing={0}>
            {props.data
              ? props.data.map((d, i) => (
                  // <div
                  //   key={`${d.title}-${i}`}
                  //   className="col-sm-6 col-md-4 col-lg-4"
                  //   style={{maxWidth:"350px", maxHeight:"200px", minHeight:"200px", minWidth:"350px", padding:"15px"}}
                  // >
                  //   <Image
                  //     title={d.title}
                  //     largeImage={d.largeImage}
                  //     smallImage={d.smallImage}
                  //    />
                  // </div>
                  <Grid item sx={{px: 1.5, py:1.5}}>
        <article className="pgcard">
            <header className="pgcard__thumb">
                <Link to={currDir + disciplineLabels?.[discipline]?.url(name) + d.largeImage}><Image src={d.smallImage}/></Link>
            </header>
            {/* <date className="pgcard__date">
                <span className="pgcard__date__day">11</span>
                <br/>
                <span className="pgcard__date__month">Jan</span>
            </date> */}
            <div className="pgcard__body">
                <div className="pgcard__category"><Link to={currDir + disciplineLabels?.[discipline]?.url(name) + d.largeImage}>{name}</Link></div>
                <h2 className="pgcard__title"><Link to={currDir + disciplineLabels?.[discipline]?.url(name) + d.largeImage}>{d.title}</Link></h2>
                {/* <div className="pgcard__subtitle">an ice cream sundae party！</div> */}
                <p style={{overflowY: 'auto', height: 125}} className="pgcard__description">{d.text}</p>
            </div>
            {/* <footer className="pgcard__footer">
                <span className="icon ion-clock"></span> 10 mins ago
                <span className="icon ion-chatbox"></span><a href="#"> 145 comments</a>
            </footer> */}
        </article>
                  </Grid>

                ))
              : "Loading..."}
          </Grid>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};