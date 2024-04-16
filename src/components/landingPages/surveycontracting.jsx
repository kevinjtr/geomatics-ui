
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DisciplineFeaturedPost from '../../templates/landing/DisciplineFeaturedPost';
import DisciplineMainFeaturedPost from '../../templates/landing/DisciplineMainFeaturedPost';

const mainFeaturedPost = {
  title: 'Survey/Contracting',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Survey/Contracting Projects',
    date: 'Nov 12',
    description:
      'Here is a collection of Survey/Contracting related projects.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "/scprojects",
    },
  {
    title: 'Survey/Contracting Apps',
    date: 'Nov 11',
    description:
      'Here is a collection of Survey/Contracting related apps.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "/scapplications"
  },
];

const featuredProject = {

    title: 'Featured Project',
    date: 'Nov 11',
    description:
      'This project has this description.Also a test idea of highlighting certain new projects when they are added.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'Image Text',
    url: "/scapplications/example404"
  };



const defaultTheme = createTheme();


export function SurveyContracting(){
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