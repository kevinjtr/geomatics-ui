import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from '../../components/Image'
function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Link to={post.url} style={{ textDecoration: 'none' }}>
        <Card sx={{ display: 'flex', height: 200 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h4" variant="h4">
              {post.title}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="h7" paragraph>
              {post.description}
            </Typography>
            <Typography variant="h7" color="primary">
              Learn more...
            </Typography>
          </CardContent>
          <CardMedia
            alt={post.imageLabel}
          >
            {<Image src={post.image} style={{ width: 225, height: '100%' }}/>}
          </CardMedia>
        </Card>
      </Link>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;