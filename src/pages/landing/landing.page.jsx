import React from 'react';
import Navbar from "../../components/header/header.component";
import {makeStyles} from "@material-ui/core/styles";
import {COLORS, FONTS, SIZES} from '../../constants/theme/theme.constants';
import CheckboxGroup from "../../components/checkbox/checkbox.component";
import Grid from '@mui/material/Grid';
import AirlineCards from '../../components/airlineCards/airline.component';


const useStyles = makeStyles((theme) => ({
    root: {
       margin: SIZES.noPadding,
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
       marginBottom: SIZES.gap10 + 6,
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
    airlineGrid: {
        marginLeft: SIZES.paddingHorizontal,
        marginRight: SIZES.paddingHorizontal,
        maxWidth: SIZES.gridwrapper,
    }
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
                     <CheckboxGroup />
                </div>
            </div>

            <div className={classes.airlineGrid}>
                <Grid container spacing={1}>
                        <Grid xs={2} sm={2} md={4} lg={4}>
                            <AirlineCards />
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Landing;
