import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListSubheader, makeStyles, GridListTileBar, IconButton, GridList, GridListTile } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 600,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  item: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));

function Categories() {

  const [datas, setData] = useState([]);

  const url = "http://localhost:3001/categorias";

  useEffect(() => {
    fetch(url)
      .then((results) => results.json())
      .then((data) => {
        setData(data)
      })
  })

  const classes = useStyles();
  const imgPath = './../assets/img/';

  return (
    <>
      <Nav />
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">CATEGORIAS</ListSubheader>
          </GridListTile>
          {datas.map((data) => (
            <GridListTile key={data.id} className={classes.item}>
              <img src={`${imgPath}${data.image}`} alt={data.image} />
              <Link to={`produto`}>
                <GridListTileBar
                  title={data.name}
                  actionIcon={
                    <IconButton aria-label={`info about ${data.name}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
      <Footer />
    </>
  );
}

export default Categories;