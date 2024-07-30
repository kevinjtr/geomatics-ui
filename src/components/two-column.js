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
          Survey
        </AccordionSummary>
        <AccordionDetails>
        Survey services include the collection, analysis, and interpretation of topographic/hydrographic, boundary, geodetic, subsurface utilities, construction, and aerial surveys. Field work is largely accomplished via architect-engineer (A-E) services in accordance with the Brooks Architect-Engineer Act and acquisition regulations.
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
        Remote sensing is a vital technology used by the U.S. Army Corps of Engineers to collect and analyze data about the Earth's surface from a distance. By employing advanced sensors on satellites, aircraft, and unmanned aerial systems, we can obtain detailed imagery and information crucial for infrastructure planning, environmental management, and disaster response.
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
        Geographic Information Systems are computer-based software tools that allow users the ability to analyze, store, map, model, and display data (whether in vector or raster format) related to geographic positions on the Earth’s surface.
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
        Data management is the practice of collecting, keeping, and using data securely, efficiently, and cost-effectively. The primary purpose of designing a database is to produce physical and logical models of designs for the proposed database system.
        </AccordionDetails>
        <AccordionDetails><Link to="/geospatial/data-management">Learn more... </Link></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Application Development
        </AccordionSummary>
        <AccordionDetails>
        From front-end design to back-end functionality, our team of skilled developers harness their expertise to deliver robust, scalable, and user-centric applications that propel businesses forward in the digital landscape.
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