import React, {useState, useEffect, useCallback} from 'react';
import Navbar from "../../components/header/header.component";
import {makeStyles} from "@material-ui/core/styles";
import {COLORS, FONTS, SIZES} from '../../constants/theme/theme.constants';
import CheckboxGroup from "../../components/checkbox/checkbox.component";
import Grid from '@mui/material/Grid';
import AirlineCards from '../../components/airlineCards/airline.component';
import {airlineUrl, baseUrl} from '../../httpRequests/index.http';
import {FixedSizeGrid} from 'react-window';


const useStyles = makeStyles((theme) => ({
    root: {
       margin: SIZES.noPadding,
       padding: SIZES.noPadding,
       backgroundColor: COLORS.background,

    },
    header: {
        width: 'auto',
        marginLeft: SIZES.paddingHorizontal,
        // marginRight: SIZES.paddingHorizontal,
        marginTop: SIZES.gap67,
        marginBotton: SIZES.gap67,
        padding: SIZES.noPadding,
    },
    headerText: {
       width: 'auto',
       margin: SIZES.noPadding,
       ...FONTS.header,
       padding: SIZES.noPadding,
       fontWeight: SIZES.headerWeight,
    },
    filterGroup: {
       marginTop: SIZES.gap6,
       marginBottom: SIZES.gap10 + 6,
       marginLeft: SIZES.paddingHorizontal,
       // marginRight: SIZES.paddingHorizontal,
    },
    checkGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: SIZES.noPadding,
        padding: SIZES.noPadding,

    },
    subHeader: {
       ...FONTS.big,
       color: COLORS.text,
       fontWeight: SIZES.bold,
       padding: SIZES.noPadding,
    },
    airlineGrid: {
       marginLeft: SIZES.paddingHorizontal,
       marginRight: SIZES.paddingHorizontal - SIZES.gapConstant,
       padding: SIZES.noPadding,
       maxWidth: SIZES.gridWrapper,
    },

}));



const Landing = () => {
    const classes = useStyles();

    // Initialise airline state
    const [airlines, setAirlines] = useState([]);




    // JsonP Callback Function
     window.jsonpCallback = (json) => {
        if (json.length < 1) {
            return [];
        }
        setAirlines(json);
    }

    // Create and Evaluate Script with jsonp callback
    useEffect(() => {
        let script = document.createElement('script');
        script.id = 'kayakAirlines'
        script.type = 'text/javascript';
        script.async = true;
        script.src = `${baseUrl}${airlineUrl}`;
        document.body.appendChild(script);

    }, []);

    // Grid Cell
    const Cell = useCallback(({ columnIndex, rowIndex, style }) => (
        <AirlineCards {...airlines} row/>
    ), []);

    return (
        <div className={classes.root}>

            <>
             <Navbar />
            </>

            <div className={classes.header}>
                <h1 className={classes.headerText}>Airlines</h1>
            </div>


            <div className={classes.filterGroup}>
                <h3 className={classes.subHeader}>Filter by Alliances</h3>
                <div className={classes.checkGroup}>
                     <CheckboxGroup />
                </div>
            </div>

            {/*<Grid container*/}
            {/*      direction="row"*/}
            {/*      justifyContent="flex-start"*/}
            {/*      className={classes.airlineGrid} row>*/}
            {/*       {*/}
            {/*           airlines && airlines.map((airline, index) => (*/}
            {/*               <AirlineCards key={index} items {...airline} />*/}
            {/*           ))*/}
            {/*       }*/}
            {/*</Grid>*/}

            <FixedSizeGrid
                width={1264}
                height={900}
                columnCount={4}
                columnWidth={300}
                rowCount={airlines.length}
                rowHeight={300}
                layout='vertical'
                className={classes.airlineGrid}
            >
                {Cell}
            </FixedSizeGrid>

        </div>
    )
}

export default Landing;
