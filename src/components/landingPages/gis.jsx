
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

const mainFeaturedPost = {
  title: 'GIS',
  description:
    "Geographic Information Systems are computer-based software tools that allow users the ability to analyze, store, map, model, and display data (whether in vector or raster format) related to geographic positions on the Earth’s surface.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'GIS Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "/geospatial/gis/projects",
    },
  {
    title: 'GIS Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: 'https://source.unsplash.com/random?wallpapers',
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
          {/* <DisciplineFeaturedPost post={featuredProject}/> */}
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            
          </Grid> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}