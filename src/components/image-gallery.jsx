import Image from "./Image";
import React, { useState } from "react";
import {Grid} from '@mui/material'
import './image-gallery.css'
import { Link } from 'react-router-dom'
import { Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Paper, InputBase, Divider, IconButton, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import filter from 'lodash/filter'
import ClearIcon from '@mui/icons-material/Clear';

const currDir = '/geospatial'

const nameDictionary = {
  project: 'projects',
  application: 'apps'
}

const disciplineLabels = {
  gis: {label: "GIS", url: (name) => `/${nameDictionary?.[name.toLowerCase()]}/`},
  remoteSensing: {label: "Remote Sensing", url: (name) => `/${nameDictionary?.[name.toLowerCase()]}/`},
  surveyContracting: {label: "Survey/Contracting", url: (name) => `/${nameDictionary?.[name.toLowerCase()]}/`},
  dataManagement: {label: "Data Management/Database Design", url: (name) => `/${nameDictionary?.[name.toLowerCase()]}/`},
  applicationDevelopment: {label: "Application Development", url: (name) => `/${nameDictionary?.[name.toLowerCase()]}/`},
}

const radioButtonFilters = [
  {val: 'all', label: 'View All'}, 
  {val: 'jax', label: 'Jacksonville Civil Works'}, 
  {val: 'em', label: 'Emergency Management'}, 
  {val: 'other', label: 'National and Other District Support'}
]

export const ImageGallery = (props) => {
  console.log(props)
  const { name, discipline } = props
  const [filterVal, setFilterVal] = useState('all')
  const [searchVal, setSearchVal] = useState('')
  const [cards, setCards] = useState(props.data)

  return (
    <div id="gis-apps" className="text-center" style={{paddingBottom:"320px"}}>
      <div className="container">
        <div className="section-title" style={{textAlign:'center', fontSize: '1.25rem'}}>
          <h2>{name}s</h2>
        </div>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          sx={{py: 3.5}}
        >
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={`Search ${name}s`}
            inputProps={{ 'aria-label': `search ${name}s` }}
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          {searchVal && <IconButton onClick={() => setSearchVal('')} title={'clear'} type="button" sx={{ p: '10px' }} aria-label="clear">
            <ClearIcon  sx={{color: 'red', height: 'inherit'}} />
          </IconButton>}
          <Badge  sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </Badge>
        </Paper>
        <FormControl sx={{pt: 3.5}}>
          <FormLabel id="demo-row-radio-buttons-group-label">Filter {name}s</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={filterVal}
            onChange={(e) => setFilterVal(e.target.value)}
          >
            { radioButtonFilters.map((x,i) => <FormControlLabel key={`fcl-${i}`} value={x.val} control={<Radio />} label={x.label} /> )}
          </RadioGroup>
        </FormControl>
        </Grid>
        <div className="row">
          {/* <div className="gis-app-items"  style={{display: "flex", direction: "column", marginTop:"10px",marginBottom:"50px", marginLeft:"50px",marginRight:"50px", alignContent:"center"}}> */}
          <Grid container spacing={0}>
            {cards ?
              filter(filter(cards,function(c){
                if(filterVal === "all")
                  return true

                  return c.type === filterVal
              }),function(c){
                if(searchVal)
                  return c.title.toUpperCase().includes(searchVal.toUpperCase())

                  return true
              })?.map((d, i) => (
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
                  <Grid key={`ig-g-${i}`} item sx={{px: 1.5, py:1.5}}>
        <article className="pgcard">
            <header className="pgcard__thumb">
                <Link to={currDir + disciplineLabels?.[d.unit]?.url(name) + d.largeImage}><Image src={d.smallImage}/></Link>
            </header>
            {/* <date className="pgcard__date">
                <span className="pgcard__date__day">11</span>
                <br/>
                <span className="pgcard__date__month">Jan</span>
            </date> */}
            <div className="pgcard__body">
                <div className="pgcard__category"><Link to={currDir + disciplineLabels?.[d.unit]?.url(name) + d.largeImage}>{name}</Link></div>
                <h2 className="pgcard__title"><Link to={currDir + disciplineLabels?.[d.unit]?.url(name) + d.largeImage}>{d.title}</Link></h2>
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

