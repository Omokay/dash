import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import {FONTS, SIZES, CARDS} from "../../constants/theme/theme.constants";
import { pink } from '@mui/material/colors';



const useStyles = makeStyles((theme) => ({
    form: {

    },
    root: {
        color: 'orange',
     '&.Mui-checked': {
          color: pink[600],
      },
      '&.MuiCheckbox-root': {
          width: SIZES.padding10 * 2,
          height: SIZES.padding10 * 2,
          border: CARDS.border,
          borderRadius: SIZES.radius,

      },
        '&.MuiFormControlLabel-label': {
            ...FONTS.small,
        },
      '&.css-ahj2mt-MuiTypography-root': {
          ...FONTS.small,
      },
    },
    checkboxWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: SIZES.padding10 * 2 + 4,
      padding: SIZES.noPadding,
      borderRadius: SIZES.radius
    },
    checkboxText: {

    },

}));
const CheckboxGroup = () => {
    const classes =  useStyles();

    const [state, settState] = React.useState({
        ow: true,
        st: false,
        sa: false,
        all: true,
    });

    const { ow, st, sa } = state;

    const handleChange = (event) => {
        settState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <Box>
            <FormControl component="fieldset" variant="standard">
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox  size='small' checked={ow} onChange={handleChange} name="ow" />
                        }
                        sx={{ '& .MuiSvgIcon-root': classes.root,
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                            '.css-ahj2mt-MuiTypography-root': {
                                ...FONTS.small,
                            },}}
                        label="Oneworld"
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox size='small' checked={st} onChange={handleChange} name="st" />
                        }
                        sx={{ '& .MuiSvgIcon-root': classes.root }}
                        label="Sky Team"
                        labelPlacement='end'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox size='small' checked={sa} onChange={handleChange} name="sa" />
                        }
                        // sx={{ '& .MuiSvgIcon-root': classes.root }}
                        label="Star Alliance"
                        labelPlacement='end'
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CheckboxGroup;

