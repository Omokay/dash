import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {SIZES, FONTS, COLORS, CARDS} from '../../constants/theme/theme.constants';
import {makeStyles} from "@material-ui/core/styles";
import {urlExtractorUtils} from "../../utils/urlExtractor.utils";
import {baseUrl} from "../../httpRequests/index.http";
import {nullChecker} from "../../utils/nullChecker.util";

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        alignItems: 'center',
        width: SIZES.padding100 * 3,
        height: SIZES.padding100 * 2 + 40,
        padding: SIZES.noPadding,
        // border: CARDS.border,
        boxShadow: CARDS.shadow,
        borderRadius: SIZES.radius,
        marginRight: SIZES.gapConstant,
        marginTop: SIZES.gapConstant,

        '&:hover': {
            cursor: 'pointer',
            border: CARDS.border,
            '& $airlineDetails': {
                opacity: 1,
            },
        },
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',

    },
    airlineLogo: {
        width: SIZES.padding10 * 3 + 2,
        height: SIZES.padding10 * 3 + 2,
        padding: SIZES.noPadding,
        border: 'none',

    },
    coverParent: {
        width: '100%',
        height: 'auto',
        display: 'block',
        padding: SIZES.noPadding,
        margin: SIZES.noPadding,

    },
    airlineName: {
        ...FONTS.small,
        fontWeight: SIZES.bold,
        maxWidth: SIZES.padding100 * 2,
        margin: SIZES.noPadding,
    },
    airlineAlliance: {
      ...FONTS.small,
        fontWeight: SIZES.regular,
        margin: SIZES.noPadding,
    },
    airlinePhone: {
        ...FONTS.small,
        fontWeight: SIZES.regular,
        margin: SIZES.noPadding,
    },
    airlineSite: {
        ...FONTS.small,
        fontWeight: SIZES.regular,
        color: COLORS.lightText,
        margin: SIZES.noPadding,
    },
    cardText: {
        padding: SIZES.noPadding,
        textAlign: 'left',
        marginLeft: SIZES.padding10 + 8,
    },
    airlineDetails: {
       opacity: 0,
       margin: 'auto',

    },
}));

const AirlineCards = (data) => {
    const classes = useStyles();

    const {name, alliance, phone, site, logoURL} = data;
    return (
        <>
            <div className={classes.card}>
                <div className={classes.cardContent}>
                    <div className={classes.airlineLogo}>
                        <img className={classes.coverParent} src={baseUrl + logoURL} alt=''/>
                    </div>
                    <div className={classes.cardText}>
                      <p className={classes.airlineName}>{name}</p>
                     <div className={classes.airlineDetails}>
                         {(nullChecker(alliance)) ? ( <p className={classes.airlineAlliance}>{alliance}</p>) : null}
                         {(nullChecker(phone)) ? (<p className={classes.airlinePhone}>{phone}</p>) : null}
                         {(nullChecker(site)) ? (<p className={classes.airlineSite}>{urlExtractorUtils(site)}</p>) : null}
                     </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AirlineCards;
