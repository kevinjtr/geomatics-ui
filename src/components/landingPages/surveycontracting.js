
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Box, Typography, ListItem, List } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from '../../templates/landing/Main';
import DisciplineFeaturedPost from '../../templates/landing/DisciplineFeaturedPost';
import post1 from "../../templates/landing/blog-post.1.md";
import post2 from "../../templates/landing/blog-post.2.md";
import post3 from "../../templates/landing/blog-post.3.md";
import DisciplineMainFeaturedPost from '../../templates/landing/DisciplineMainFeaturedPost';
import Image from '../Image'

const mainFeaturedPost = {
  title: 'Survey/Contracting',
  description:
    "Survey services include the collection, analysis, and interpretation of topographic/hydrographic, boundary, geodetic, subsurface utilities, construction, and aerial surveys. Field work is largely accomplished via architect-engineer (A-E) services in accordance with the Brooks Architect-Engineer Act and acquisition regulations.",
  image: '/img/survey-landing.JPG',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Survey/Contracting Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: '/img/survey-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/survey-contracting/projects",
    },
  {
    title: 'Survey/Contracting Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: '/img/survey-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/survey-contracting/apps"
  },
];

const posts = [post1, post2, post3];
// const featuredProject = {

//   title: 'Featured Project',
//  // date: 'Nov 11',
//   description:
//     'This project has this description.Also a test idea of highlighting certain new projects when they are added.',
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'Image Text',
//   url: "/survey-contracting/apps/example404"
// };
const defaultTheme = createTheme();


export function SurveyContracting() {
  return (
    <ThemeProvider theme={defaultTheme}>
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
            <Typography variant="h4" sx={{ pb: 3.5, textAlign: 'center' }}>
              Understanding Survey Contracting
            </Typography>

            <Typography variant="h4" sx={{ pb: 2.5, textAlign: 'center' }}>
              Why Remote Sensing is Important
            </Typography>
            <Typography variant="p" sx={{ pb: 2.5, textAlign: 'left' }}>
              Remote sensing is crucial for numerous reasons:
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

            <Typography variant="h4" sx={{ pb: 1, textAlign: 'center' }}>
              Software Used for Remote Sensing
            </Typography>
            <Typography variant="p" sx={{ pb: 2.5, textAlign: 'left' }}>
              Software applications that are utilized in remote sensing:
            </Typography>
            <List sx={{ listStyleType: 'disc' }}>
              <ListItem sx={{ display: 'list-item' }}>
                Microstation: Bentley MicroStation is a CAD software program used for designing and drafting 2D and 3D models. It is commonly used in the architecture, engineering, and construction (AEC) industries, as well as in the manufacturing and geospatial sectors.
              </ListItem>
            </List>

            <Box sx={{ textAlign:'center' }}>
              <Image style={{height: 100}} src="/img/microstation.PNG" alt="Microstation"/>
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