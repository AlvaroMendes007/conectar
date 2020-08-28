import React from 'react';
import { Grid, makeStyles, Paper, Typography, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const datas  = [{
  image: "/static/images/grid/complex.jpg",
  alt: "complex",
  name: "Product Name",
  description: "Description",
  price: "19,00"
}];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

        {datas.map((data) => {
          return (
            <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={data.alt} src={data.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {data.description}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography align="right" variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">R${data.price}</Typography>
              </Grid>
            </Grid>
          </Grid>
          )
        })}

      </Paper>
    </div>
  );
}

export default App;
