import React from 'react';
import { Grid, makeStyles, Paper, Typography, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '80px'
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
  container: {
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    '&:hover': {
      cursor: 'pointer',
      borderTop: '3px solid green',
      borderBottom: '3px solid green',
    }
  }
}));

const path = "./assets/img/";

const datas = [{
  id: 1,
  image: `${path}l.jpg`,
  alt: "img",
  name: "Product Name",
  description: "Description",
  price: "19,00"
},
{
  id: 2,
  image: `${path}l.jpg`,
  alt: "img2",
  name: "Product Name2",
  description: "Description2",
  price: "25,00"
},
{
  id: 3,
  image: `${path}l.jpg`,
  alt: "img3",
  name: "Product Name3",
  description: "Description3",
  price: "30,00"
}];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

        {datas.map((data) => {
          return (
            <Grid container spacing={2} key={data.id} className={classes.container}>
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
