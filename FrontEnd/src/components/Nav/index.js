import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles(() => ({
    nav: {
        height: '40px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
    },
    icon: {
        width: 45,
        height: 45
    }
}));

function Nav() {
    const classes = useStyles();

    return (
        <nav className={classes.nav}>
            <LocalShippingOutlinedIcon className={classes.icon} />
            <Box display="flex" flexDirection="row">
                <Box>
                    <ShoppingCartOutlinedIcon style={{ height: 40, width: 30 }} />
                </Box>
                <Box p={1}>
                    Perfil
                </Box>
                <Box p={1}>
                    Sair
                </Box>
            </Box>
        </nav>
    )
}

export default Nav;