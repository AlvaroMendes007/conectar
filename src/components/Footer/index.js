import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    nav: {
        width: '100%',
        height: '30px',
        background: 'white',
        backgroundColor: 'black',
        bottom: 0,
        position: "static",
        color: 'white'
    }
}));

function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.nav}>
            &#169; Copyright Álvaro
        </div>
        )
}

export default Nav;