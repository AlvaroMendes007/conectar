import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    footer: {
        position: 'relative',
        left:0,
        bottom:0,
        right:0,
        textAlign: 'center',
        width: '100%',
        height: '40px',
        background: 'white',
        backgroundColor: 'black',
        color: 'white'
    }
}));

function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <p>
                &#169; Copyright Álvaro
            </p>
        </div>
        )
}

export default Nav;