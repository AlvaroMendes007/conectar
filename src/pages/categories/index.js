import React from 'react';
import Fruta from '../../assets/img/fruta.jpg';
import Legume from '../../assets/img/legume.jpg';
import Verdura from '../../assets/img/verdura.jpg';
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

function Categories(){
    const url = "localhost:3001/categorias";
    
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">CATEGORIAS</ListSubheader>
          </GridListTile>
          {datas.map((data) => (
            <GridListTile key={data.id} className={classes.item}>
              <img src={data.image} alt={data.image} />
              <GridListTileBar
                title={data.name}
                // subtitle={<span>R$: {data.price}</span>}
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

export default Categories;