
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
import Image from '../Image';

const mainFeaturedPost = {
  title: 'Data Management/Database Design',
  description:
    "Data management is the practice of collecting, keeping, and using data securely, efficiently, and cost-effectively. The primary purpose of designing a database is to produce physical and logical models of designs for the proposed database system.",
  image: '/img/database-landing.JPG',
  imageText: 'main image description',
  linkText: '',
};

const featuredPosts = [
  {
    title: 'Data Management/Database Design Projects',
    //date: 'Nov 12',
    //description:
      //'Here is a collection of GIS related projects.',
    image: '/img/database-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/data-management/projects",
    },
  {
    title: 'Data Management/Database Design Apps',
    //date: 'Nov 11',
    //description:
      //'Here is a collection of GIS related apps.',
    image: '/img/database-landing.JPG',
    imageLabel: 'Image Text',
    url: "/geospatial/data-management/apps"
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
//   url: "/data-management/apps/astm-data-dictionary-gen"
// };

const defaultTheme = createTheme();


export function DataManagement(){
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
          <Box sx={{ margin: '50px auto', pl: '10%', pr: '10%' }}>
            <Typography variant="h4" sx={{ pb: 1.5 }}>
              What is Data Management?
            </Typography>
            <Typography variant="p" sx={{  }}>
            The architecture, policies, technical processes, and workflows that efficiently manage the identification, definition, collection, organization, verification, correction, storage, protection, processing, communication, and transfer of data and information for the duration of the project activities.
            </Typography>
            <Typography variant="h4" sx={{ pb: 1.5 }}>
              What is a Database?
            </Typography>
            <Typography variant="p" sx={{  }}>
            A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.
            </Typography>

            <Typography variant="h4" sx={{ py: 2.5 }}>
              Enterprise Databases
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>
                Oracle
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Postgres
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                MSSQL
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                DB2
              </ListItem>
            </List>
            <Box sx={{ textAlign: 'center' }}>
              <Image style={{ height: 100 }} src="/img/oracle.png" alt="Oracle"/>
              <Image style={{ height: 100 }} src="/img/postgres.png" alt="Postgres"/>
              <Image style={{ height: 100 }} src="/img/mssql.png" alt="Microsoft SQL Server"/>
              <Image style={{ height: 100 }} src="/img/DB2.png" alt="IBM DB2"/>
              {/* <img style={{ height: 60, marginBottom: 15 }} src="/img/remote-sensing.png" alt="Remote Sensing"/> */}
            </Box>

            <Typography variant="h4" sx={{ py: 2.5 }}>
              What does a data manager / database developer do?
            </Typography>
            <Typography variant="p" sx={{ pb: 2.5 }}>
            Create, maintains, and updates databases, schemas, and datasets. 
            </Typography>
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