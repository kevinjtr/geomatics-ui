
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
import ScrollToTop from '../ScrollToTop';
const mainFeaturedPost = {
  title: 'Remote Sensing',
  description:
    "Remote sensing is a vital technology used by the U.S. Army Corps of Engineers to collect and analyze data about the Earth's surface from a distance. By employing advanced sensors on satellites, aircraft, and unmanned aerial systems, we can obtain detailed imagery and information crucial for infrastructure planning, environmental management, and disaster response.",
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
      <ScrollToTop/>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          {/* <Grid sx={{py: 2.5}} container spacing={6}>
            {featuredPosts.map((post) => (
              <DisciplineFeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <DisciplineMainFeaturedPost post={mainFeaturedPost} />
          <Box sx={{ margin: '50px auto', pl: '10%', pr: '10%' }}>
<Typography variant="h4" sx={{ py: 2.5, textAlign: 'center' }}>
  Why Remote Sensing is Important
</Typography>
<List sx={{ listStyleType: 'disc' }}>
  <ListItem sx={{ display: 'list-item' }}>
    Environmental Monitoring: Enables the observation and analysis of natural disasters, deforestation, climate change, and other environmental phenomena.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Resource Management: Assists in the management of natural resources like water, minerals, and forests, ensuring sustainable use.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Urban Planning: Provides detailed imagery and data for the development and planning of urban areas, infrastructure, and transportation systems.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Agriculture: Enhances crop monitoring, soil analysis, and precision farming, leading to increased agricultural productivity.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Disaster Response: Facilitates rapid assessment and response to natural disasters, such as floods, hurricanes, and earthquakes, aiding in emergency management and recovery efforts.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    National Security: Supports military operations, border surveillance, and homeland security by providing critical geospatial intelligence.
  </ListItem>
</List>

<Typography variant="h4" sx={{ py: 2.5, textAlign: 'center' }}>
  Technology and Software Used for Remote Sensing
</Typography>
<List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
            DAT/EM Summit
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Terrasolid
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            QT Modeler
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Agisoft Metashape
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            Geocue LP360
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            INPHO Orthobox
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            GeoExpress
            </ListItem>
</List>

<Box sx={{ textAlign:'center' }}>
  <Image style={{height: 100, paddingRight: 20}} src="/img/terrasolid.png" alt="Terrasolid"/>
  <Image style={{height: 100, paddingRight: 10}} src="/img/lp360.jpg"/>
</Box>
<Typography variant="h4" sx={{ py: 2.5, textAlign: 'center' }}>
  What is a Remote Sensing Specialist?
</Typography>
<Typography variant="p" sx={{ pb: 2.5, textAlign: 'left' }}>
  A remote sensing specialist is a professional who specializes in the collection, analysis, and interpretation of data obtained through remote sensing technologies. Key responsibilities include:
</Typography>
<List sx={{ listStyleType: 'disc' }}>
  <ListItem sx={{ display: 'list-item' }}>
    Data Acquisition: Utilizing sensors on satellites, aircraft, and drones to capture geospatial data.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Image Analysis: Processing and analyzing imagery to extract meaningful information.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Application Development: Creating applications and models for specific uses, such as environmental monitoring, urban planning, or disaster response.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Research: Conducting research to improve remote sensing techniques and applications.
  </ListItem>
  <ListItem sx={{ display: 'list-item' }}>
    Collaboration: Working with interdisciplinary teams, including scientists, engineers, and policy-makers, to apply remote sensing data to real-world problems.
  </ListItem>
</List>
<Typography variant="p" sx={{ pb: 2.5, textAlign: 'left' }}>
  Remote sensing specialists play a crucial role in various fields, from environmental science and agriculture to urban planning and national security, by providing essential data and insights that drive informed decision-making and strategic planning.
</Typography>

{/* You can add images or other visual elements related to remote sensing here */}
<Box sx={{ textAlign: 'center' }}>
  {/* Add relevant images if available */}
</Box>
</Box>
</main>
</Container>
</ThemeProvider>
  );
}