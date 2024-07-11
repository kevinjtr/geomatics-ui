
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from '../../templates/landing/Main';
import DisciplineFeaturedPost from '../../templates/landing/DisciplineFeaturedPost';
import post1 from "../../templates/landing/blog-post.1.md";
import post2 from "../../templates/landing/blog-post.2.md";
import post3 from "../../templates/landing/blog-post.3.md";
import DisciplineMainFeaturedPost from '../../templates/landing/DisciplineMainFeaturedPost';

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


export function SurveyContracting(){
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
          {/* <DisciplineFeaturedPost post={featuredProject}/> */}
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            
          </Grid> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}

// Why Remote Sensing is Important
// Remote sensing is crucial for numerous reasons:

// Environmental Monitoring: Enables the observation and analysis of natural disasters, deforestation, climate change, and other environmental phenomena.
// Resource Management: Assists in the management of natural resources like water, minerals, and forests, ensuring sustainable use.
// Urban Planning: Provides detailed imagery and data for the development and planning of urban areas, infrastructure, and transportation systems.
// Agriculture: Enhances crop monitoring, soil analysis, and precision farming, leading to increased agricultural productivity.
// Disaster Response: Facilitates rapid assessment and response to natural disasters, such as floods, hurricanes, and earthquakes, aiding in emergency management and recovery efforts.
// National Security: Supports military operations, border surveillance, and homeland security by providing critical geospatial intelligence.
// Software Used for Remote Sensing
// Several advanced software applications are utilized in remote sensing:

// ENVI: A powerful tool for processing and analyzing geospatial imagery.
// ERDAS IMAGINE: A comprehensive remote sensing software that enables image processing, visualization, and interpretation.
// ArcGIS: A geographic information system for working with maps and geographic information, integrating remote sensing data.
// QGIS: An open-source GIS application that supports the integration and analysis of remote sensing data.
// Google Earth Engine: A cloud-based platform for planetary-scale environmental data analysis.
// Snap: An open-source tool by the European Space Agency for the processing of satellite data.
// What is a Remote Sensing Specialist?
// A remote sensing specialist is a professional who specializes in the collection, analysis, and interpretation of data obtained through remote sensing technologies. Key responsibilities include:

// Data Acquisition: Utilizing sensors on satellites, aircraft, and drones to capture geospatial data.
// Image Analysis: Processing and analyzing imagery to extract meaningful information.
// Application Development: Creating applications and models for specific uses, such as environmental monitoring, urban planning, or disaster response.
// Research: Conducting research to improve remote sensing techniques and applications.
// Collaboration: Working with interdisciplinary teams, including scientists, engineers, and policy-makers, to apply remote sensing data to real-world problems.
// Remote sensing specialists play a crucial role in various fields, from environmental science and agriculture to urban planning and national security, by providing essential data and insights that drive informed decision-making and strategic planning.

