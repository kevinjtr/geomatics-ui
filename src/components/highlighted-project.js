import React from 'react';
import { Container, Typography, Button, Card, CardMedia } from '@mui/material';
import { Link, useHref } from 'react-router-dom';
//import PortEvergladesImage from '/img/project/port-everglades.PNG';
import Image from './Image'

const cardStyle = {
  marginBottom: '2rem',
  borderRadius: '16px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
};

const mediaStyle = {
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
};

const HighlightedProjectSection = () => {
  return (
    <Container maxWidth="md" sx={{py: 5}}>
        <Typography variant="h2" align="center" gutterBottom>
        Project Spotlight
      </Typography>
        <div style={{textAlign:'center', paddingBottom: 5}}><Image
        style={{borderRadius:13, height: 200}}
        //height="250"
        //width="250"
          //style={mediaStyle}
          src={'/img/projects/port-everglades.PNG'}
          //title="Port Everglades Harbor Navigation Improvement Project"
        /></div>
        
      <Typography variant="h4" align="center" gutterBottom>
        Port Everglades Harbor Navigation Improvement Project
      </Typography>
      <Typography  align="center" paragraph>
        The Port Everglades Harbor Navigation Improvement Project is a vital undertaking aimed at enhancing
        navigational infrastructure and capacity at Port Everglades, Florida.
      </Typography>
      <Typography  align="center" paragraph>
        As one of the busiest cruise ports and container cargo ports in the United States, Port Everglades serves
        as a critical hub for international trade and tourism.
      </Typography>
      <Typography  align="center" paragraph>
        The navigation improvement project includes dredging and deepening of channels, widening turning basins,
        and upgrading berths to accommodate larger vessels and increased traffic.
      </Typography>
      <Typography  align="center" paragraph>
        With these enhancements, Port Everglades will be better equipped to handle the demands of modern maritime
        commerce, bolstering economic growth and facilitating global connectivity.
      </Typography>
      <Link to={"/geospatial/gis/projects/Port Everglades"}>
      <Button variant="outlined" color="primary" size="large" fullWidth>
        Learn More
      </Button>
      </Link>

    </Container>
  );
};

export default HighlightedProjectSection;