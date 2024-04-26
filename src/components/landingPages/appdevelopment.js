import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Box, Typography, List, ListItem } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from '../../templates/landing/Main';
import FeaturedPost from '../../templates/landing/FeaturedPost';
import post1 from "../../templates/landing/blog-post.1.md";
import post2 from "../../templates/landing/blog-post.2.md";
import post3 from "../../templates/landing/blog-post.3.md";
import MainFeaturedPost from '../../templates/landing/MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Application Development',
  description:
    "From front-end design to back-end functionality, our team of skilled developers harness their expertise to deliver robust, scalable, and user-centric applications that propel businesses forward in the digital landscape.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'App Development Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "application-development/projects",
    },
  {
    title: 'App Development Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    url: "application-development/apps"
  },
];

const posts = [post1, post2, post3];

const defaultTheme = createTheme();


export function AppDevelopment(){
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
          <Box sx={{ margin: '50px auto', pl:'10%', pr: '10%' }}>
            <Typography variant="h4" sx={{pb: 1, textAlign: 'center'}} >
            What is Web Development?
            </Typography>
            <Typography variant="h6" sx={{pb: 2.5, textAlign: 'left'}} >
            Web development is closely related to the job of designing the features and functionality of websites and apps (often called “web design”), but the “web development” term is usually reserved for the actual construction and programming of websites and apps. Think of all the web pages you have used over the years – Web Developers built those sites, making sure they functioned properly and performed in ways that allowed for a great user experience. Web Developers do this by writing lines of code, using a variety of programming languages, which vary depending on the tasks they are performing and the platforms they are working on.
            </Typography>

            <Typography variant="h4" sx={{pb: 1, textAlign: 'center'}} >
            What web programming lamguages we use?
            </Typography>

            <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
            HTML (Hypertext Markup Language)
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            CSS (Cascading Style Sheets)
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            JavaScript (Dynamically updating content, control multimedia, animate images, and pretty much everything else)
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            React (a JavaScript library/framework)
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
            R (Open-source statistical programming language that's used for data analysis, visualization, and modeling)
            </ListItem>
            </List>
            <Box sx={{ textAlign:'center' }}>
            <img style={{height: 100}} src="/img/html-css-javascript.png"/>
            <img style={{height: 60, marginBottom: 15}} src="/img/react-icon.PNG"/>
            </Box>
            
            <Typography variant="h4" sx={{pb: 1, textAlign: 'center'}} >
            What is a full stack Developer?
            </Typography>
            <Typography variant="h6" sx={{pb: 2.5, textAlign: 'left'}} >
            A Full-Stack Developer is someone familiar with both front- and back-end development. Full Stack Developers usually understand a wide variety of programming languages and because of their versatility, they might be given more of a leadership role on projects than developers who specialize. They are generalists, adept at wearing both hats, and familiar with every layer of development. Obviously, employers want to hire Full-Stack Developers – according to an Indeed study, they are the fourth-most in-demand job in tech.
            </Typography>
         </Box>
        </main>
      </Container>
    </ThemeProvider>
  );
}