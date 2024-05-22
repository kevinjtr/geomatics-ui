import React, { FC, ReactElement, useState } from "react";
import emailjs from "emailjs-com";
import { Box, Container, Grid, Typography, Stack, IconButton } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "primary.main",
            color: '#fff',
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Container maxWidth="lg" >
            <Grid container direction="column" alignItems="center">
              <Grid item xs={12}>
                <Typography  variant="h5">
                  Contact Info
                </Typography>
              </Grid>
              <Grid item xs={12}>
              
              <Stack direction="row" sx={{pt: 1.5}}>
              <LocationOnIcon sx={{mr: 1}}/>
              <Typography  variant="subtitle1">
                  Address
                </Typography>
              </Stack>
                <Typography variant="subtitle1">
                  ATTN: EN-DG, 701 San Marco Blvd Jacksonville, FL 32207
                </Typography>

                <Stack direction="row" sx={{pt: 1.5}}>
              <PhoneIcon sx={{mr: 1}}/>
              <Typography  variant="subtitle1">
                  Phone
                </Typography>
              </Stack>
                <Typography variant="subtitle1">
                (904) 232-1603 | Section Chief
                </Typography>

                <Stack direction="row" sx={{pt: 1.5}}>
              <EmailIcon sx={{mr: 1}}/>
              <Typography  variant="subtitle1">
                  Email
                </Typography>
              </Stack>
                <Typography  variant="subtitle1">
                <span><a style={{color: 'white'}} href="mailto:sajgeomatics@usace.army.mil">
																				SAJGeomatics@usace.army.mil
																				</a></span>
                </Typography>
              </Grid>
              <Divider variant="middle" sx={{pt: 3.5, width: '100%'}}/>
              <Grid item xs={12}>
              
          <Stack direction="row" sx={{pt: 3.5}}>
            <a href={'https://www.facebook.com/JacksonvilleDistrict'} target="_blank" style={{textDecoration: 'none'}}>
              <IconButton size="large" sx={{color: 'white', '&:hover':{ color: 'text.secondary'}}}>
                <FacebookIcon />
              </IconButton>
            </a>
          <a href={'https://www.youtube.com/@JaxStrong'} target="_blank" style={{textDecoration: 'none', marginLeft: '30px'}}>
          <IconButton size="large" sx={{color: 'white', '&:hover':{ color: 'text.secondary'}}}>
          <YouTubeIcon />
          </IconButton>
          </a>
          <a href={'https://x.com/JaxStrong'} target="_blank" style={{textDecoration: 'none', marginLeft: '30px'}}>
          <IconButton size="large" sx={{color: 'white', '&:hover':{ color: 'text.secondary'}}}>
          <XIcon />
          </IconButton>
          </a>
          <a href={'https://www.linkedin.com/company/u-s-army-corps-of-engineers-jacksonville-district'} target="_blank" style={{textDecoration: 'none', marginLeft: '30px'}}>
          <IconButton size="large" sx={{color: 'white', '&:hover':{ color: 'text.secondary'}}}>
          <LinkedInIcon />
          </IconButton>
          </a>
          </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
  // return (
  //   <div >
  //     <div id="contact"> 
  //       <div className="container">
  //         <div className="col-md-3 col-md-offset-1 contact-info">
  //           <div className="contact-item">
  //             <h3>Contact Info</h3>
  //             <p>
  //               <span>
  //                 <i className="fa fa-map-marker"></i> Address
  //               </span>
  //               {props.data ? props.data.address : "loading"}
  //             </p>
  //           </div>
  //           {/* <div className="contact-item">
  //             <p>
  //               <span>
  //                 <i className="fa fa-phone"></i> Phone
  //               </span>{" "}
  //               {props.data ? props.data.phone : "loading"}
  //             </p>
  //           </div> */}
  //           <div className="contact-item">
  //             <p>
  //               <span>
  //                 <i className="fa fa-envelope-o"></i> Email
  //               </span>{" "}
  //               {props.data ? props.data.email : "loading"}
  //             </p>
  //           </div>
            
  //         </div>
  //         <div className="col-md-12">
  //           <div className="row">
  //             <div className="social">
  //               <ul>
  //                 <li>
  //                   <a href={props.data ? props.data.facebook : "/"}>
  //                     <i className="fa fa-facebook"></i>
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a href={props.data ? props.data.twitter : "/"}>
  //                     <i className="fa fa-twitter"></i>
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a href={props.data ? props.data.youtube : "/"}>
  //                     <i className="fa fa-youtube"></i>
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a href={props.data ? props.data.linkedin : "/"}>
  //                     <i className="fa fa-linkedin"></i>
  //                   </a>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div id="footer" >
  //       <div className="container text-center">
  //         <p>

  //         </p>
  //       </div>
  //     </div>
  //   </div>
  );
};
