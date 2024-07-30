
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
        <DisciplineMainFeaturedPost post={mainFeaturedPost} />

        <Box sx={{ margin: '50px auto', pl: '10%', pr: '10%' }}>
          <Typography variant="h4" sx={{ pb: 2.5, textAlign: 'center' }}>
            Why Surveying is Important
          </Typography>
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Land Development: Determines property boundaries and supports the design and construction of infrastructure.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Construction: Ensures accurate placement and alignment of structures, roads, and utilities.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Environmental Management: Helps in the planning and management of natural resources, conservation areas, and environmental restoration projects.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Urban Planning: Provides detailed maps and data for the development and planning of urban areas and transportation systems.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Legal: Establishes legal property boundaries, which are essential for land ownership and real estate transactions.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Disaster Response: Aids in the rapid assessment and response to natural disasters, facilitating recovery efforts.
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ py: 2.5, textAlign: 'center' }}>
            Tools and Technologies in Surveying
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
            What is a Surveying Specialist?
          </Typography>
          <Typography variant="body1" sx={{ pb: 2.5, textAlign: 'left' }}>
            A surveying specialist is a professional who specializes in the measurement and mapping of the Earth's surface. Key responsibilities include:
          </Typography>
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Data Collection: Using surveying instruments to gather accurate data on land features, boundaries, and structures.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Data Analysis: Processing and analyzing survey data to create maps, plans, and reports.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Project Planning: Collaborating with engineers, architects, and planners to ensure accurate project execution.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Boundary Determination: Establishing legal property boundaries and resolving boundary disputes.
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Research: Conducting research to improve surveying techniques and technologies.
            </ListItem>
          </List>
          <Typography variant="body1" sx={{ pb: 2.5, textAlign: 'left' }}>
            Surveying specialists play a critical role in various fields, from construction and land development to environmental management and urban planning, by providing essential data and insights for informed decision-making and project success.
          </Typography>

          <Box sx={{ textAlign: 'center' }}>
            {/* Add relevant images if available */}
          </Box>
        </Box>
      </main>
    </Container>
  </ThemeProvider>
  );
}


