import React from 'react';
import { ListSubheader, makeStyles, GridListTileBar, IconButton, GridList, GridListTile } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const path = "./assets/img/";

const datas = [{
  id: 1,
  image: `${path}l.jpg`,
  name: "Product Name",
  description: "Description",
  price: "19,00"
},
{
  id: 2,
  image: `${path}l.jpg`,
  name: "Product Name2",
  description: "Description2",
  price: "25,00"
},
{
  id: 3,
  image: `${path}l.jpg`,
  name: "Product Name3",
  description: "Description3",
  price: "30,00"
}];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">PRODUTOS</ListSubheader>
        </GridListTile>
        {datas.map((data) => (
          <GridListTile key={data.image}>
            <img src={data.image} alt={data.image} />
            <GridListTileBar
              title={data.name}
              subtitle={<span>by: {data.price}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${data.name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>

  );
}

export default App;
