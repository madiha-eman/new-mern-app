import React from 'react';
import { Grid } from "@material-ui/core";

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Container } from 'react-bootstrap';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 156,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ImgMediaCard({item,index}) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Grid container>
        <Grid item lg={8} md={9}>
      <Card className={classes.root}>
       <CardMedia
              className={classes.cover}
              image={item.img}
              height={120}
              width={120}
              title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          {item.title} 
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {item.description}
          </Typography>
        </CardContent>
      
      </div>
     
    </Card>
    </Grid>
    </Grid>








       {/* <Grid direction="row">
       <Grid item lg={8} md={8}>
      <Card key={index}  className={classes.root}>
      <CardActionArea>
       
        <Grid item lg={3} md={3}>
        <CardMedia class="b"
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.img}
      
        />
        </Grid>
      
        <CardContent>
          <Grid item lg={5} md={5}>
          <Typography gutterBottom variant="h5" component="h2">
           {item.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {item.description}
          </Typography>
          </Grid>
       
        
        </CardContent>
        
   
      </CardActionArea>
   
    </Card>
    </Grid>
    </Grid> */}
    </div>
   
  );
}