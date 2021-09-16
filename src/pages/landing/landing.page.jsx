import React from 'react';
import Navbar from "../../components/header/header.component";
import {makeStyles} from "@material-ui/core/styles";
import {COLORS, FONTS, SIZES} from '../../constants/theme/theme.constants';


const useStyles = makeStyles((theme) => ({
    root: {
       margin: 0,
       backgroundColor: COLORS.background,

    },
    header: {
        marginLeft: SIZES.paddingHorizontal,
        marginRight: SIZES.paddingHorizontal,
        marginTop: SIZES.gap67,
        marginBotton: SIZES.gap67,
        padding: SIZES.noPadding,
    },
    headerText: {
       margin: SIZES.noPadding,
       ...FONTS.header,
       padding: SIZES.noPadding,
    },
    filterGroup: {
       marginTop: SIZES.gap6,
       marginBottom: SIZES.gap56,
       marginLeft: SIZES.paddingHorizontal,
       marginRight: SIZES.paddingHorizontal,
    },
    checkGroup: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    subHeader: {
       ...FONTS.big,
       color: COLORS.text,
       fontWeight: SIZES.normalWeight,
       padding: SIZES.noPadding,
    },
}));

const Landing = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Navbar />

            <div className={classes.header}>
                <h1 className={classes.headerText}>Airlines</h1>
            </div>


            <div className={classes.filterGroup}>
                <h3 className={classes.subHeader}>Filter by Alliances</h3>
                <div className={classes.checkGroup}>

                </div>
            </div>
        </div>
    )
}

export default Landing;
