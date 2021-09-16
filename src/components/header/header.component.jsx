import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Logos from '../../constants/index.constants';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 0,
        padding: 0,
    },
    menuButton: {
        margin: '9px 10px',
        padding: '10px 6px',
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="inherit"
                    elevation={1}
                    color="default">
                <Toolbar >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src={Logos.kayak} alt='Kayak'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
