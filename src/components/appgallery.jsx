import { Image } from "./image";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export const AppGallery = (props) => {
  const theme = useTheme();

  return (
    <div id="gis-apps" className="text-center" style={{paddingBottom:"320px"}}>
      <div className="container">
        <div className="section-title">
          
        </div>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
            {props.data
              ? props.data.map((d, i) => (
                <Grid item xs={3}>
    <Card sx={{ width: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/img/project.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {d.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {d.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
                </Grid>
                
                  // <div
                  //   key={`${d.title}-${i}`}
                  //   className="col-sm-6 col-md-4 col-lg-4"
                  //   style={{maxWidth:"350px", maxHeight:"200px", minHeight:"200px", minWidth:"350px", padding:"15px"}}
                  // >
                  //   <Image
                  //     title={d.title}
                  //     largeImage={d.largeImage}
                  //     smallImage={d.smallImage}
                  //    />
                  // </div>
                ))
              : "Loading..."}
          </Grid>
      </div>
    </div>
  );
};

