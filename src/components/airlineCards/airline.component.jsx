import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {SIZES} from '../../constants/theme/theme.constants';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    card: {
        width: SIZES.padding100 * 3,
        maxWidth: SIZES.padding100 * 3,
        height: SIZES.padding100 * 2 + 40,
        maxHeight: SIZES.padding100 * 2 + 40,
        borderRadius: SIZES.radius,
        margin: SIZES.gapConstant,
    }
}));

const AirlineCards = () => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardContent>

                </CardContent>
            </Card>
        </>
    )
}


export default AirlineCards;
