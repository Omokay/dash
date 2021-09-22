import React, {useState, useEffect, useContext} from 'react';
import Navbar from "../../components/header/header.component";
import {makeStyles} from "@material-ui/core/styles";
import {COLORS, FONTS, SIZES} from '../../constants/theme/theme.constants';
import CheckboxGroup from "../../components/checkbox/checkbox.component";
import {airlineUrl, baseUrl} from '../../httpRequests/index.http';
import {GridWrapper} from "../../components/virtualizedList/airline.component";
import {AllianceContext} from "../../context/alliance.context";


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
    flexGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '2px',
    },

}));

const Landing = () => {
    const classes = useStyles();

    const { ow, st, sa, airlines,
        setAirlines, oneworld, skyteam,
        staralliance, setOneWorld,
        setSkyTeam, setStarAlliance, activeGrid,  setGrid } = useContext(AllianceContext);

    // Sort Alliances
    const sortAlliance = (dataObject) => {
        if (dataObject.length < 1) {
            return [];
        }
        let tempOw = [], tempSt = [], tempSa = [];
        dataObject.filter((airline) => {
            if ((airline.alliance).toLowerCase() === 'ow')  {
                 tempOw.push(airline);
            }  else if ((airline.alliance).toLowerCase() === 'sa') {
                tempSa.push(airline);
            }  else if ((airline.alliance).toLowerCase() === 'st') {
                 tempSt.push(airline);
            }
        })
        setOneWorld(tempOw);
        setSkyTeam(tempSt);
        setStarAlliance(tempSa)
    }

    // JsonP Callback Function
     window.jsonpCallback = (json) => {
        if (json.length < 1) {
            return [];
        }
        else if (airlines.length < 1) {
            setAirlines(json);
            sortAlliance(json);
        }
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

    const changeGrid = () => {
        const active = (ow && !sa && !st) ? oneworld :
            (st && !ow && !sa) ? skyteam :
                (sa && !ow && !st) ? staralliance :
                    (ow && st && !sa) ?
                        oneworld.concat(skyteam) :
                        (ow && sa && !st) ? oneworld.concat(staralliance) :
                            (st && sa && !ow) ? staralliance.concat(skyteam) :
                                (ow && sa && st) ? [...oneworld, ...skyteam, ...staralliance] : airlines
        setGrid(active)
    };

    // Updating list to display
    useEffect(()=> {
       changeGrid();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ow, sa, st]);

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

            <GridWrapper airlines={activeGrid} />

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
        </div>
    )
}

export default Landing;
