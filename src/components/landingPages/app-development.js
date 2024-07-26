
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
import { Box, Typography, List, ListItem } from '@mui/material';
import Image from '../Image'
import ScrollToTop from '../ScrollToTop';

const mainFeaturedPost = {
    title: 'Application Development',
    description:
      "From front-end design to back-end functionality, our team of skilled developers harness their expertise to deliver robust, scalable, and user-centric applications that propel businesses forward in the digital landscape.",
    image: '/img/app-dev-landing.JPG',
    imageText: 'main image description',
    linkText: '',
  };
  
  const featuredPosts = [
    {
      title: 'App Development Projects',
      //date: 'Nov 12',
      //description:
        //'Here is a collection of GIS related projects.',
      image: '/img/app-dev-landing.JPG',
      imageLabel: 'Image Text',
      url: "/geospatial/application-development/projects",
      },
    {
      title: 'App Development Apps',
      //date: 'Nov 11',
      //description:
        //'Here is a collection of GIS related apps.',
      image: '/img/app-dev-landing.JPG',
      imageLabel: 'Image Text',
      url: "/geospatial/application-development/apps"
    },
  ];

const posts = [post1, post2, post3];
// const featuredProject = {
//   title: 'Featured Project',
// //  date: '',
//   description:
//     'Jacksonville District - Data Dictionary Tool Generator for ASTM Testing',
//   image: '../../img/projects/datadictionarytool.png',
//   imageText: 'astm-data-dictionary-gen',
//   url: "/application-development/apps/astm-data-dictionary-gen"
// };

const defaultTheme = createTheme();


export function AppDevelopment(){
  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline />
      <Container maxWidth="lg">
 
        <main>
          <ScrollToTop/>
          {/* <Grid sx={{py: 2.5}} container spacing={6}>
            {featuredPosts.map((post) => (
              <DisciplineFeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <DisciplineMainFeaturedPost post={mainFeaturedPost} />
          {/* <DisciplineFeaturedPost post={featuredProject}/> */}
          <Box sx={{ margin: '50px auto', pl:'10%', pr: '10%' }}>
          <Typography variant="h4" sx={{pb: 3.5, textAlign: 'center'}} >
            We consider Ourselves a Full Stack Web Developers Unit
            </Typography>
            <Typography variant="h4" sx={{pb: 1, textAlign: 'center'}} >
            What is Web Development?
            </Typography>
            <Typography variant="p" sx={{pb: 2.5, textAlign: 'left'}} >
            Web development is closely related to the job of designing the features and functionality of websites and apps (often called “web design”), but the “web development” term is usually reserved for the actual construction and programming of websites and apps. Think of all the web pages you have used over the years – Web Developers built those sites, making sure they functioned properly and performed in ways that allowed for a great user experience. Web Developers do this by writing lines of code, using a variety of programming languages, which vary depending on the tasks they are performing and the platforms they are working on.
            </Typography>
            <Typography variant="h4" sx={{pb: 1, textAlign: 'center'}} >
            What is a full stack Developer?
            </Typography>
            <Typography variant="p" sx={{pb: 2.5, textAlign: 'left'}} >
            A Full-Stack Developer is someone familiar with both front-end and back-end development. Full Stack Developers usually understand a wide variety of programming languages and because of their versatility, they might be given more of a leadership role on projects than developers who specialize. They are generalists, adept at wearing both hats, and familiar with every layer of development.
            </Typography>
            <Typography variant="h4" sx={{pb: 1, textAlign: 'center'}} >
            What programming languages we use?
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
            <Image style={{height: 100}} src="/img/html-css-javascript.png"/>
            <Image style={{height: 60, marginBottom: 15}} src="/img/react-icon.PNG"/>
            </Box>
         </Box>
          {/* <DisciplineFeaturedPost post={featuredProject}/> */}
          {/* <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            
          </Grid> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}