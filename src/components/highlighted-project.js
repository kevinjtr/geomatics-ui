import React from 'react';
import { Container, Typography, Button, Card, CardMedia } from '@mui/material';
//import PortEvergladesImage from './gis.PNG';

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
    <Container maxWidth="md" sx={{py: 3}}>
        <Typography variant="h2" align="center" gutterBottom>
        Project Spotlight
      </Typography>
        <div style={{textAlign:'center', paddingBottom: 5}}><img
        style={{borderRadius:13, height: 200}}
        //height="250"
        //width="250"
          //style={mediaStyle}
          src={'./img/project.PNG'}
          //title="Port Everglades Harbor Navigation Improvement Project"
        /></div>
        
      <Typography variant="h3" align="center" gutterBottom>
        Port Everglades Harbor Navigation Improvement Project
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        The Port Everglades Harbor Navigation Improvement Project is a vital undertaking aimed at enhancing
        navigational infrastructure and capacity at Port Everglades, Florida.
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        As one of the busiest cruise ports and container cargo ports in the United States, Port Everglades serves
        as a critical hub for international trade and tourism.
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        The navigation improvement project includes dredging and deepening of channels, widening turning basins,
        and upgrading berths to accommodate larger vessels and increased traffic.
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        With these enhancements, Port Everglades will be better equipped to handle the demands of modern maritime
        commerce, bolstering economic growth and facilitating global connectivity.
      </Typography>
      <Button variant="contained" color="primary" size="large" fullWidth>
        Learn More
      </Button>
    </Container>
  );
};

export default HighlightedProjectSection;