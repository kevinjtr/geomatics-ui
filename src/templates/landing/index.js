import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Geospatial',
  description:
     "Explore the world of geospatial technology and data management through our diverse range of work. Whether you're a GIS enthusiast, a surveying professional, a remote sensing expert, or an application developer, we have something for everyone.",
  image: './img/gis-banner-web.jpg',
  imageText: 'main image description',
  //linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'GIS',
    description:
      'Discover the power of Geographic Information Systems (GIS) in analyzing and visualizing spatial data for informed decision-making.',
    image: './img/gis.png',
    imageLabel: 'GIS Image',
    url: "/gis"
  },
  {
    title: 'Remote Sensing',
    description:
      'Explore Remote Sensing and unlock insights from aerial and satellite imagery for various applications including environmental monitoring and urban planning.',
    image: './img/remote-sensing.png',
    imageLabel: 'Remote Sensing Image',
    url: "remote-sensing"
  },
  {
    title: 'Survey / Contracting',
    description:
      'Gain insights into Surveying and Contracting services tailored to meet your project requirements with precision and efficiency.',
    image: './img/surveying.png',
    imageLabel: 'Survey/Contracting Image',
    url: "/survey-contracting"
  },
  {
    title: 'Data Management / Database Design',
    description:
      'Efficiently manage your spatial data assets with our Data Management solutions, ensuring accessibility, integrity, and security.',
    image: './img/database-management.png',
    imageLabel: 'Data Management Image',
    url:"data-management"
  },
  {
    title: 'Application Development',
    description:
      'Empower your operations with custom Application Development services, leveraging GIS technologies to create tailored solutions for your unique needs.',
    image: './img/app-development.png',
    imageLabel: 'Application Development Image',
    url: "application-development"
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container sx={{mt: 1.5, mb: 1.5}} maxWidth="xl"
      >
        {/* <Header title="Blog" sections={sections} /> */}
        {/* <main> */}
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        {/* </main> */}
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}