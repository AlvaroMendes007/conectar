import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import Fruta from '../../assets/img/fruta.jpg';
// import Legume from '../../assets/img/legume.jpg';
// import Verdura from '../../assets/img/verdura.jpg';
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

// const datas = [
//   {
//     "id": 1,
//     "image": `${Verdura}`,
//     "name": "Verdura",
//     "description": "Description",
//     "price": "19,00"
//   },
//   {
//     "id": 2,
//     "image": `${Legume}`,
//     "name": "Legume",
//     "description": "Description2",
//     "price": "25,00"
//   },
//   {
//     "id": 3,
//     "image": `${Fruta}`,
//     "name": "Fruta",
//     "description": "Description3",
//     "price": "30,00"
//   }
// ]

function Categories() {

  const [datas, setData] = useState([]);
  // const [nome, setNome] = useState(null);
  // const [imagem, setImagem] = useState(null);

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
              <Link to="produto">
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