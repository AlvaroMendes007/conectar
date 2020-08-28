import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    nav: {
        width: '100%',
        height: '50px',
        background: 'white',
        backgroundColor: 'black',
    }
}));

function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.nav}>
            
        </div>
        )
}

export default Nav;