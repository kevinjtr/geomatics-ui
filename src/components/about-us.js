import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from './Image'
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
    return (
        <div style={{paddingLeft: "20%", paddingRight: '20%', paddingTop: "10px", paddingBottom: "10px", minWidth: "700px"}}>
          <div style={{textAlign: 'center'}}>
          <Image style={{height: "250px"}} src={'/img/geomatics.PNG'}/>
            </div>
          <div style={{ marginBottom: '5pt', clear: 'both' }}>
            
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '10.65pt', fontSize: '27pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>About Us - Geomatics Section</span></strong></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Welcome to the Geomatics Section of the US Army Corps of Engineers, where precision meets innovation in GIS, Remote Sensing, Survey/Contracting, Data Management/Database Design, and Application Development.</span></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '18pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Our Mission</span></strong></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Professional responsibility for acquisition, modeling, analysis and management of spatial data for planning, design, construction and emergencies within the Jacksonville District area of responsibility. We contract spatial data acquisitions to the private sector using indefinite delivery contracts. We use the latest technology in remote sensing for performing aerial, hydrographic and topographic surveys.</span></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '18pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Vision for the Future</span></strong></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Our vision is to be at the forefront of geospatial technology. We aim to continuously innovate, adapt to emerging technologies, and contribute significantly to the success of the US Army Corps of Engineers.</span></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '18pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>The Geomatics Team</span></strong></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Our team is a dynamic blend of passionate professionals with diverse expertise in geospatial technologies. Committed to excellence, we bring a wealth of experience and a collaborative spirit to every project we undertake.</span></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', fontSize: '15pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Meet Some of Our Key Team Members</span></strong></p>
          </div>
          <div style={{ marginLeft: '12.25pt', clear: 'both' }}>
            <ul type="disc" style={{ margin: '0pt', paddingLeft: '0pt' }}>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Jay Yearwood - Lead GIS Specialist:</span></strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>&nbsp;Bringing a wealth of experience in spatial analysis and mapping, Jay ensures our GIS solutions are tailored to meet the unique needs of each project.</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Tim Schall - Lead Remote Sensing:</span></strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>&nbsp;Leveraging expertise in remote sensing technologies, Tim leads our efforts in analyzing aerial and satellite imagery to extract valuable insights and support decision-making processes.</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Rob Swilley - Lead Survey/Contracting:</span></strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>&nbsp;Spearheading our web application development initiatives, Rob crafts intuitive and powerful applications that streamline processes and enhance user experiences.</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Jon Hall - Lead Data Management/Database Design:</span></strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>&nbsp;With a keen eye for data quality and integration, Jon leads our efforts in managing and harnessing the power of vast datasets.</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Kevin Alemany - Application Developer:</span></strong><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>&nbsp;Spearheading our web application development initiatives, Kevin crafts intuitive and powerful applications that streamline processes and enhance user experiences.</span></li>
            </ul>
          </div>
          <div style={{ marginTop: '5pt', marginBottom: '15pt', clear: 'both' }}>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '18pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Expertise</span></strong></p>
            <Link to="/geospatial/gis"><p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '15pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>GIS Excellence</span></strong></p></Link>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Our GIS specialists utilize state-of-the-art technology to create detailed maps, perform spatial analysis, and provide invaluable insights for strategic decision-making.</span></p>
            <Link to="/geospatial/remote-sensing"><p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '15pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Remote Sensing</span></strong></p></Link>            
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Our remote sensing specialists employ advanced techniques to analyze aerial and satellite imagery, extracting valuable insights to support decision-making processes and enhance project outcomes.</span></p>
            <Link to="/geospatial/survey-contracting"><p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '15pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Survey/Contracting</span></strong></p></Link>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Our surveying and contracting experts ensure the accurate collection of geospatial data through meticulous fieldwork and contracting processes. Their proficiency in surveying methodologies and contracting procedures ensures the integrity and reliability of our data sources.</span></p>  
            <Link to ="/geospatial/data-management"><p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '15pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Data Management Mastery</span></strong></p></Link>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>We excel in managing complex datasets, ensuring data integrity, and implementing effective data governance practices to support informed decision-making.</span></p>
            <Link to="/geospatial/application-development"><p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '15pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Web Application Innovation</span></strong></p></Link>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Our web application development team creates custom solutions that enhance accessibility, interactivity, and efficiency, contributing to the Corps&apos; technological advancement.</span></p>
          </div>
          <div style={{ marginTop: '5pt', marginBottom: '15pt', clear: 'both' }}>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '18pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Technology Stack</span></strong></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Our commitment to staying at the forefront of technology is reflected in our use of the latest tools and platforms.</span></p>
          </div>
          <div style={{ marginLeft: '12.25pt', clear: 'both' }}>
            <ul type="disc" style={{ margin: '0pt', paddingLeft: '0pt' }}>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>GIS Tools: ArcGIS, ArcPro, Blue Marble and QGIS</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Remote Sensing: ArcGIS, ArcPro</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Survey: Microstation</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>Data Management: Oracle, Postgres, MsSQL, DB2</span></li>
              <li style={{ marginLeft: '27.6pt', lineHeight: 'normal', paddingLeft: '8.4pt', fontFamily: 'serif', fontSize: '10pt', color: '#0d0d0d', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', fontSize: '12pt' }}>App Development: VS Code</span></li>
            </ul>
          </div>
          <div style={{ marginTop: '5pt', marginBottom: '15pt', clear: 'both' }}>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '18pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Training and Development</span></strong></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '15pt', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>We invest in continuous training and development programs to ensure our team stays ahead in the rapidly evolving fields of GIS, data management, and web application development.</span></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', paddingBottom: '5pt', fontSize: '18pt', backgroundColor: '#ffffff' }}><strong><span style={{ fontFamily: 'Segoe UI', color: '#4472c4' }}>Community Involvement</span></strong></p>
            <p style={{ marginTop: '0pt', marginBottom: '0pt', lineHeight: 'normal', fontSize: '12pt', backgroundColor: '#ffffff' }}><span style={{ fontFamily: 'Segoe UI', color: '#0d0d0d' }}>Beyond our organizational objectives, we actively engage with the community, supporting educational initiatives, and fostering partnerships to promote geospatial awareness and technological literacy.</span></p>
          </div>
          <p style={{ marginTop: '0pt', marginBottom: '8pt' }}>&nbsp;</p>
        </div>
      );
};

export default AboutUsPage;