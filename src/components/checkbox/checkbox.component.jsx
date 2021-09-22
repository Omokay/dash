import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import {FONTS, COLORS, SIZES, CARDS} from "../../constants/theme/theme.constants";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {AllianceContext} from "../../context/alliance.context";



const useStyles = makeStyles((theme) => ({

    root: {
       ...FONTS.small,
        marginRight: '84px',

    },
    checkbox: {
        width: '20px',
        height: '20px',
        border: `1px solid ${COLORS.lightText}`,
        borderRadius: SIZES.checkbox,
        marginRight: SIZES.padding10,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
    },
    checked: {
        width: '20px',
        height: '20px',
        border: `1px solid ${COLORS.lightText}`,
        borderRadius: SIZES.checkbox,
        marginRight: SIZES.padding10,

        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
    },
    checkboxMargin: {
        marginRight: SIZES.padding10 * 2 + 4,
        ...FONTS.small,
    },
}));


// Unchecked Checkbox
export const CustomCheckbox = () => {
    const classes = useStyles();
    return (
        <div className={classes.checkbox}>
        </div>
    )
}

// Checked Checkbox
export const Checkedbox = () => {
    const classes = useStyles();


    return (
        <div className={classes.checked}>
            <DoneAllIcon style={{fontSize: '18px', color: '#ff6701'}}/>
        </div>
    )
}

// CheckBox Group
const CheckboxGroup = () => {
    const classes =  useStyles();

    const { ow, st, sa, setOw, setSt, setSa } = useContext(AllianceContext);

    const oneWorldCheck = (event) => {
       setOw(event.target.checked);
    }

    const skyteamCheck = (event) => {
        setSt(event.target.checked);
    }

    const starAllianceCheck = (event) => {
        setSa(event.target.checked);
    }


    return (
        <Box>
            <FormControl component="fieldset" variant="standard">
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox icon={<CustomCheckbox/>} checkedIcon={<Checkedbox />} checked={ow} onChange={oneWorldCheck} name="ow" />
                        }
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                ...FONTS.small,
                                marginRight: SIZES.formLabelMargin,
                            }
                        }}
                        label="Oneworld"
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox icon={<CustomCheckbox/>} checkedIcon={<Checkedbox />} checked={st} onChange={skyteamCheck} name="st" />
                        }
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                ...FONTS.small,
                                marginRight: SIZES.formLabelMargin,
                            }
                        }}
                        label="Sky Team"
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox icon={<CustomCheckbox/>} checkedIcon={<Checkedbox />} checked={sa} onChange={starAllianceCheck} name="sa" />
                        }
                        sx={{
                            '& .MuiFormControlLabel-label': {
                                ...FONTS.small,
                                marginRight: SIZES.formLabelMargin,
                            }
                        }}
                        label="Star Alliance"
                        labelPlacement='end'
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CheckboxGroup;

