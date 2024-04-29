
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
  title: 'Remote Sensing',
  description:
    "Sample text for remote sensing...",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Remote Sensing Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "remote-sensing/projects",
    },
  {
    title: 'Remote Sensing Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "remote-sensing/apps"
  },
];

const posts = [post1, post2, post3];
const featuredProject = {
  title: 'Featured Project',
//  date: 'Nov 11',
  description:
    'This project has this description.Also a test idea of highlighting certain new projects when they are added.',
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'Image Text',
  url: "remote-sensing/app/example404"
};




const defaultTheme = createTheme();


export function RemoteSensing(){
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
          <DisciplineFeaturedPost post={featuredProject}/>
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            
          </Grid> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}