
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from '../../templates/landing/Main';
import FeaturedPost from '../../templates/landing/FeaturedPost';
import post1 from "../../templates/landing/blog-post.1.md";
import post2 from "../../templates/landing/blog-post.2.md";
import post3 from "../../templates/landing/blog-post.3.md";
import MainFeaturedPost from '../../templates/landing/MainFeaturedPost';
import DisciplineFeaturedPost from '../../templates/landing/DisciplineFeaturedPost';
import DisciplineMainFeaturedPost from '../../templates/landing/DisciplineMainFeaturedPost';
import { Box, Typography, List, ListItem } from '@mui/material';
import Image from '../Image'

const mainFeaturedPost = {
  title: 'GIS',
  description:
    "Geographic Information Systems are computer-based software tools that allow users the ability to analyze, store, map, model, and display data (whether in vector or raster format) related to geographic positions on the Earth’s surface.",
  image: '/img/gis-landing.JPG',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'GIS Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: '/img/gis-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/gis/projects",
    },
  {
    title: 'GIS Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: '/img/gis-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/gis/apps"
  },
];

const posts = [post1, post2, post3];
// const featuredProject = {
//   title: 'Featured Project Showcase',
//   //date: '',
//   description:
//     'Jacksonville District - Geomatics Section GIS Emergency Management Support',
//   image: '../../img/projects/fiona-ian storyboard.png',
//   imageText: 'geomatics-gis-emergency-support',
//   url: "gis/projects/geomatics-gis-emergency-support"
// };



const defaultTheme = createTheme();


export function GIS(){
  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline />
      <Container maxWidth="lg">
 
        <main>
          
          <Grid sx={{py: 2.5}} container spacing={6}>
            {featuredPosts.map((post) => (
              <DisciplineFeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <DisciplineMainFeaturedPost post={mainFeaturedPost} />
          <Box sx={{ margin: '50px auto', pl: '10%', pr: '10%' }}>
            <Typography variant="h4" sx={{ pb: 1.5 }}>
              What is GIS?
            </Typography>
            <Typography variant="p" sx={{  }}>
              Geographic Information Systems (GIS) are systems designed to capture, store, manipulate, analyze, manage, and present spatial or geographic data. GIS applications are tools that allow users to create interactive queries, analyze spatial information, and edit data in maps.
            </Typography>

            <Typography variant="h4" sx={{ py: 2.5 }}>
              Key Technologies We Use
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>
                GIS Software (ArcGIS, ArcPro, Blue Marble, QGIS)
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Remote Sensing
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Spatial Databases
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                GPS Technology
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Data Visualization Tools
              </ListItem>
            </List>
            <Box sx={{ textAlign: 'center' }}>
              <Image style={{ height: 100 }} src="/img/arc-gis.png" alt="GIS Software"/>
              <Image style={{ height: 75 }} src="/img/bmgs.png" alt="Blue Marble Geographics Software"/>
              <Image style={{ height: 75 }} src="/img/esri.png" alt="ESRI"/>
              <Image style={{ height: 75 }} src="/img/qgis.png" alt="QGIS"/>
              {/* <img style={{ height: 60, marginBottom: 15 }} src="/img/remote-sensing.png" alt="Remote Sensing"/> */}
            </Box>

            <Typography variant="h4" sx={{ py: 2.5 }}>
              What is a GIS Specialist?
            </Typography>
            <Typography variant="p" sx={{ pb: 2.5 }}>
              A GIS Specialist is an expert in spatial data and technologies, capable of creating and analyzing maps and models to support decision-making in various fields, such as urban planning, environmental science, and transportation.
            </Typography>
          </Box>
          {/* <DisciplineFeaturedPost post={featuredProject}/> */}
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            
          </Grid> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}