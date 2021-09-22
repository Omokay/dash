import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Logos from '../../constants/index.constants';
import {SIZES} from "../../constants/theme/theme.constants";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: SIZES.noPadding,
        padding: SIZES.noPadding,
    },
    menuButton: {
        marginTop: SIZES.padding10 - 1,
        marginBottom: SIZES.padding10 -1,
        marginLeft: SIZES.padding10,
        marginRight: SIZES.padding10,

        paddingTop: SIZES.padding10 ,
        paddingBottom: SIZES.padding10,
        paddingLeft: SIZES.padding10 - 4,
        paddingRight: SIZES.padding10 - 4,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={1}
                    position="static"
                    color="white">
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
