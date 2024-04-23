
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

const mainFeaturedPost = {
  title: 'Survey/Contracting',
  description:
    "Survey services include the collection, analysis, and interpretation of topographic/hydrographic, boundary, geodetic, subsurface utilities, construction, and aerial surveys. Field work is largely accomplished via architect-engineer (A-E) services in accordance with the Brooks Architect-Engineer Act and acquisition regulations.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Survey/Contracting Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "survey-contracting/projects",
    },
  {
    title: 'Survey/Contracting Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "survey-contracting/apps"
  },
];

const posts = [post1, post2, post3];

const defaultTheme = createTheme();


export function SurveyContracting(){
  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline />
      <Container maxWidth="lg">
 
        <main>
          
          <Grid sx={{py: 2.5}} container spacing={6}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            
          </Grid> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}