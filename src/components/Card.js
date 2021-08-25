import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid
} from '@material-ui/core'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    height:'100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    // backgroundColor: red[500],
    display:'none'
  },
}));

export default function CardComponent({ posts }) {
  const classes = useStyles();

  return (
    <>
      {
        posts.totalArticles
        ? (
            posts.articles.map( ( items , key ) => (
              <Grid item xs={12} sm={6} md={3} lg={4} key={key} >

                <Card className={classes.root}>

                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    title={
                      items.title.length > 70
                      ? `${items.title.substring(0,70)}...`
                      : items.title
                    }
                    subheader={ new Date(items.publishedAt).toDateString() }
                  />

                  <CardMedia
                    className={classes.media}
                    image={ items.image }
                    title="Paella dish"
                  />

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {
                      items.description.length > 150
                      ? `${items.description.substring(0,150)}...`
                      : items.description
                    }
                    </Typography>
                  </CardContent>

                  <CardActions disableSpacing>

                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>

                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>

                  </CardActions>

                </Card>

              </Grid>
            ))
          )
        : 'No Posts to show'
      }
    </>
  );
}
