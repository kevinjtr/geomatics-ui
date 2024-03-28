
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import DisciplineFeaturedPost from '../../templates/landing/DisciplineFeaturedPost';
import DisciplineMainFeaturedPost from '../../templates/landing/DisciplineMainFeaturedPost';

const mainFeaturedPost = {
  title: 'GIS',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'GIS Projects',
    date: 'Nov 12',
    description:
      'Here is a collection of GIS related projects.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "/gisprojects",
    },
  {
    title: 'GIS Apps',
    date: 'Nov 11',
    description:
      'Here is a collection of GIS related apps.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "/gisapplications"
  },
];

const featuredProject = {

    title: 'Featured Project',
    date: 'Nov 11',
    description:
      'This project has this description.Also a test idea of highlighting certain new projects when they are added.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'Image Text',
    url: "/gisapplications/geomatics-gis-emergency-support"
  };



const defaultTheme = createTheme();


export function GIS(){
  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline />
      <Container maxWidth="lg">
 
        <main>
          
          <Grid container spacing={6} sx={{mt:1, mb: 5,}}>
            {featuredPosts.map((post) => (
              <DisciplineFeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <DisciplineMainFeaturedPost post={mainFeaturedPost} />
          <DisciplineFeaturedPost post={featuredProject} />
          <Grid container spacing={0} sx ={{mb:10}}>
          
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}