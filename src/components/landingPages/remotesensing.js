
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
  title: 'Remote Sensing',
  description:
    "Sample text for remote sensing...",
  image: '/img/remote-sensing-landing.JPG',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Remote Sensing Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: '/img/remote-sensing-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/remote-sensing/projects",
    },
  {
    title: 'Remote Sensing Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: '/img/remote-sensing-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/remote-sensing/apps"
  },
];

const posts = [post1, post2, post3];
// const featuredProject = {
//   title: 'Featured Project',
// //  date: 'Nov 11',
//   description:
//     'This project has this description.Also a test idea of highlighting certain new projects when they are added.',
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'Image Text',
//   url: "remote-sensing/app/example404"
// };




const defaultTheme = createTheme();


export function RemoteSensing() {
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
          <Box sx={{ margin: '50px auto', pl:'10%', pr: '10%' }}>
            <Typography variant="h4" sx={{pb: 1.5, textAlign: 'center'}} >
            What is Remote Sensing?
            </Typography>
            <Typography variant="p" sx={{ textAlign: 'left' }} >
            Remote sensing is the science of obtaining information about objects or areas from a distance, typically from aircraft or satellites. It involves the detection and measurement of radiation reflected or emitted by objects on Earth’s surface.
            </Typography>

            <Typography variant="h4" sx={{pt: 2.5, textAlign: 'center'}} >
            What technologies do we use?
            </Typography>

            <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
            Satellite Imagery
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Aerial Photography
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Lidar (Light Detection and Ranging)
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Radar (Radio Detection and Ranging)
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            GIS (Geographic Information Systems)
            </ListItem>
            </List>
            <Box sx={{ textAlign:'center' }}>
            <Image style={{height: 100}} src="/img/satellite.PNG"/>
            <Image style={{height: 60, marginBottom: 15}} src="/img/lidar-icon.PNG"/>
            </Box>
            
            <Typography variant="h4" sx={{py: 1.5, textAlign: 'center'}} >
            What is a Remote Sensing Specialist?
            </Typography>
            <Typography variant="p" sx={{ textAlign: 'left' }} >
            A Remote Sensing Specialist uses sensors to analyze data and create detailed maps and models. They often work with satellite imagery, aerial photography, and Lidar data to monitor and assess various environmental and man-made conditions.
            </Typography>
         </Box>
        </main>
      </Container>
    </ThemeProvider>
  );
}