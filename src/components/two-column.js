import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//

const TwoColumnComponent = () => {
  return (
    <Box sx={{ margin: '50px auto', pl:'10%', pr: '10%' }}>
        <Typography variant="h2" sx={{pb: 2.5, textAlign: 'center'}} >
            Explore how our Geomatics Team contribute to mission success
        </Typography>
      <Grid container spacing={3}>
        {/* GIS & Application Development Unit */}
        <Grid item xs={6} sx={{ borderRadius: '16px', padding: '50px', minWidth: '500px', maxWidth: '1000px' }}>
          <div style={{ padding: '15px 15px', backgroundColor: '#FFCDD2', textAlign: 'center', borderRadius: '16px' }}>
            <Typography variant="h4" sx={{pb: 1.5}} >
                Survey/Contracting and Remote Sensing Unit
            </Typography>

          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Survey/Contracting
        </AccordionSummary>
        <AccordionDetails>
        Our Survey/Contracting team specializes in conducting various types of surveys including land surveys, environmental assessments, and geological surveys. We offer comprehensive services for both public and private sector projects, ensuring accurate data collection and analysis to support decision-making processes. Our team of experienced surveyors and contractors utilize state-of-the-art equipment and techniques to deliver high-quality results on time and within budget.
        </AccordionDetails>
        <AccordionDetails><Link to="/geospatial/survey-contracting">Learn more... </Link></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Remote Sensing
        </AccordionSummary>
        <AccordionDetails>
        Our Remote Sensing team specializes in the acquisition, processing, and analysis of satellite and aerial imagery data for various applications including environmental monitoring, urban planning, agriculture, and natural resource management. We utilize advanced remote sensing techniques and algorithms to extract valuable information from satellite images, providing insights into land cover, vegetation health, and environmental changes. Our team of remote sensing experts works closely with clients to tailor solutions that meet their specific needs and objectives.
        </AccordionDetails>
        <AccordionDetails><Link to="/geospatial/remote-sensing">Learn more... </Link></AccordionDetails>
      </Accordion>
          </div>
        </Grid>
        {/* Survey/Contracting and Remote Sensing Unit */}
        <Grid item xs={3} lg={6} sx={{  borderRadius: '16px', padding: '16px',  minWidth: '500px', maxWidth: '1000px' }}>
        <div style={{ padding: '15px 15px', backgroundColor: '#BBDEFB', textAlign: 'center', borderRadius: '16px' }}>
          <Typography variant="h4" sx={{pb: 1.5}} >
  GIS and Application Development Unit
</Typography>
<Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          GIS
        </AccordionSummary>
        <AccordionDetails>
        Our GIS team specializes in spatial data analysis, cartography, and geographic information systems development. We leverage GIS technology to help organizations make informed decisions, optimize resource allocation, and visualize complex spatial patterns.
        </AccordionDetails>
        <AccordionDetails><Link to="/geospatial/gis">Learn more... </Link></AccordionDetails>
      </Accordion>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Data Management/Database Development
        </AccordionSummary>
        <AccordionDetails>
        Our Data Management/Database Development experts design and implement robust database solutions to efficiently store, retrieve, and manage large volumes of spatial and non-spatial data. We ensure data integrity, security, and accessibility to support informed decision-making and streamline business processes.
        </AccordionDetails>
        <AccordionDetails><Link to="/geospatial/data-management">Learn more... </Link></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Software Development
        </AccordionSummary>
        <AccordionDetails>
        Our Software Development team specializes in creating custom GIS applications, spatial analysis tools, and data visualization software tailored to the specific needs of our clients. We use agile development methodologies to deliver high-quality solutions that empower users to leverage geospatial data effectively.
        </AccordionDetails>
        <AccordionDetails><Link to="/geospatial/application-development">Learn more... </Link></AccordionDetails>
      </Accordion>
          </div>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{pt: 1.5, textAlign: 'center'}} >
      These components work together seamlessly: remote sensing identifies areas of interest, GIS analyzes and visualizes the data, applications/software aids in analysis, and survey data validates remote sensing information. Efficient data management integrates and makes information accessible across the organization. Together, GIS, remote sensing, data management, software development, and survey/contracting enable the Geomatics section (EN-DG) to provide engineering solutions supporting national security, environmental sustainability, and economic development for the US Army Corps of Engineers.
        </Typography>
    </Box>
  );
};

export default TwoColumnComponent;