import React from "react";
import { AutoSizer, List } from "react-virtualized";
import AirlineCards from "../airlineCards/airline.component";
import {makeStyles} from "@material-ui/core/styles";
import {SIZES} from "../../constants/theme/theme.constants";
import { Grid } from '@mui/material';




const useStyles = makeStyles((theme) => ({
    airlineGrid: {
        marginLeft: SIZES.paddingHorizontal,
        marginRight: SIZES.paddingHorizontal - SIZES.gapConstant,
        padding: SIZES.noPadding,
        maxWidth: SIZES.gridWrapper,
    },
    flex: {
        // display: 'flex',
        marginTop: SIZES.noPadding,
        marginBottom: SIZES.noPadding,
        //
        // [theme.breakpoints.down('sm')]: {
        //     margin: 0,
        //     '& > .MuiGrid-item': {
        //         padding: 0,
        //     },
        // },
    }


}));

const ITEM_SIZE = 260;

export const GridWrapper = ({airlines}) => {
    const classes = useStyles();

    if (!airlines) return "Loading...";

    const ITEMS_COUNT = airlines.length;

    return (
        <div style={{
            height: "100vh",
            maxWidth: SIZES.gridWrapper,
            marginLeft: SIZES.paddingHorizontal,

            // display:'flex'
        }}>
            <AutoSizer>
                {({ height, width }) => {
                    // const itemsPerRow = 4;
                    const itemsPerRow = Math.floor(width / (ITEM_SIZE + 4));
                    const rowCount =  Math.ceil(ITEMS_COUNT / itemsPerRow);

                    return (
                        <List

                            width={width}
                            height={height}
                            rowCount={rowCount}
                            rowHeight={ITEM_SIZE}

                            rowRenderer={({ index, key, style}) => {
                                const fromIndex = index * itemsPerRow;
                                const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);
                                const items = airlines.slice(fromIndex, toIndex - 1);

                                return (
                                    <Grid
                                        // width={SIZES.gridWrapper}
                                        width='1265px'
                                        container
                                        direction="row"
                                        alignItems="center"
                                        className={classes.flex}
                                        key={key}
                                        style={style}
                                    >
                                        {items.map(({name, alliance, phone, site, logoURL}, index) => (
                                            <AirlineCards
                                                items
                                                key={index}
                                                name={name}
                                                alliance={alliance}
                                                phone={phone}
                                                site={site}
                                                logoURL={logoURL}
                                                marginX={1}
                                                marginY={1}
                                            />
                                        ))}
                                    </Grid>
                                );

                            }}
                        />
                    );
                }}
            </AutoSizer>
        </div>
    );
};
