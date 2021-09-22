import React from "react";
import { AutoSizer, List } from "react-virtualized";
import AirlineCards from "../airlineCards/airline.component";
import {makeStyles} from "@material-ui/core/styles";
import {SIZES} from "../../constants/theme/theme.constants";



const useStyles = makeStyles((theme) => ({
    airlineGrid: {
        marginLeft: SIZES.paddingHorizontal,
        marginRight: SIZES.paddingHorizontal - SIZES.gapConstant,
        padding: SIZES.noPadding,
        maxWidth: SIZES.gridWrapper,
    },


}));

const ITEM_SIZE = 300;

export const GridWrapper = ({airlines}) => {
    const classes = useStyles();
    if (!airlines) return "Loading...";

    const ITEMS_COUNT = airlines.length;

    return (
        <div style={{ height: "100vh", maxWidth: "90%", marginLeft: SIZES.paddingHorizontal }}>
            <AutoSizer>
                {({ height, width }) => {
                    const itemsPerRow = 4;
                    const rowCount =  airlines.length;

                    return (
                        <List
                            width={width}
                            height={height}
                            rowCount={rowCount}
                            rowHeight={ITEM_SIZE}
                            rowRenderer={({ index, key, style }) => {
                                const fromIndex = index * itemsPerRow;
                                const toIndex = Math.min(fromIndex + itemsPerRow, ITEMS_COUNT);
                                const items = airlines.slice(fromIndex, toIndex);

                                return (
                                    <div key={key} style={{display:'flex', flexWrap:'wrap',}}>
                                        {items.map(({name, alliance, phone, site, logoURL}, i) => (
                                            <AirlineCards
                                                key={i}
                                                name={name}
                                                alliance={alliance}
                                                phone={phone}
                                                site={site}
                                                logoURL={logoURL}
                                                marginX={1}
                                                marginY={2}
                                            />
                                        ))}
                                    </div>
                                );
                            }}
                        />
                    );
                }}
            </AutoSizer>
        </div>
    );
};
