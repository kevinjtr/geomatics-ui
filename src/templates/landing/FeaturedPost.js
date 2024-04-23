import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={post.url}>
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
            component="img"
            sx={{ width: 225, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;