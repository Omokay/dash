import React, {useState, useEffect} from 'react';
import Navbar from "../../components/header/header.component";
import {makeStyles} from "@material-ui/core/styles";
import {COLORS, FONTS, SIZES} from '../../constants/theme/theme.constants';
import CheckboxGroup from "../../components/checkbox/checkbox.component";
import Grid from '@mui/material/Grid';
import AirlineCards from '../../components/airlineCards/airline.component';
import {airlineUrl, baseUrl} from '../../httpRequests/index.http';
// import {FixedSizeGrid} from 'react-window';


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
        marginRight: SIZES.paddingHorizontal,
        maxWidth: SIZES.gridWrapper,
        padding: SIZES.noPadding,
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
        console.log(airlines);
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

            <Grid container
                  direction="row"
                  justifyContent="flex-start" className={classes.airlineGrid} row>
               {/*<FixedSizeGrid  columnCount={1000}*/}
               {/*     columnWidth={100}*/}
               {/*     height={150}*/}
               {/*     rowCount={1000}*/}
               {/*     rowHeight={35}*/}
               {/*     width={300}>*/}
                   {
                       airlines && airlines.map((airline, index) => (
                           <AirlineCards items {...airline} />
                       ))
                   }
               {/*</FixedSizeGrid>*/}
            </Grid>
        </div>
    )
}

export default Landing;
