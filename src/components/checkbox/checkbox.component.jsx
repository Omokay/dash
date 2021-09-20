import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import {FONTS, SIZES, CARDS} from "../../constants/theme/theme.constants";


const useStyles = makeStyles((theme) => ({
    form: {

    },
    root: {
        width: SIZES.padding10 * 2,
        height: SIZES.padding10 * 2,
        border: CARDS.border,
        borderRadius: SIZES.radius,
      '&: .MuiCheckbox-root': {
          width: SIZES.padding10 * 2,
          height: SIZES.padding10 * 2,
          border: CARDS.border,
          borderRadius: SIZES.radius,
      },
        '&: .MuiFormControlLabel-label': {
            ...FONTS.small,
        },
      '&: .css-ahj2mt-MuiTypography-root': {

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

    const [state, setState] = React.useState({
        ow: false,
        st: false,
        sa: false,
        all: true,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { ow, st, sa } = state;
    // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <Box>
            <FormControl component="fieldset" variant="standard">

                <FormGroup row>
                    <div className={classes.checkboxWrapper}>
                        <Checkbox className={classes.root}  size='small' checked={ow} onChange={handleChange} name="oneworld" />
                        <p className={classes.checkboxText}>Oneworld</p>
                    </div>
                    <div className={classes.checkboxWrapper}>
                        <Checkbox classes={classes.root} size='small' checked={st} onChange={handleChange} name="skyteam" />
                        <p className={classes.checkboxText}>Sky Team</p>
                    </div>
                    <div className={classes.checkboxWrapper}>
                        <Checkbox classes={classes.root} size='small' checked={sa} onChange={handleChange} name="staralliance" />
                        <p className={classes.checkboxText}>Star Alliance</p>
                    </div>

                    {/*<FormControlLabel*/}
                    {/*    control={*/}
                    {/*        <Checkbox  size='small' checked={ow} onChange={handleChange} name="oneworld" />*/}
                    {/*    }*/}
                    {/*    className={classes.root}*/}
                    {/*    label="Oneworld"*/}
                    {/*    labelPlacement='end'*/}
                    {/*/>*/}
                    {/*<FormControlLabel*/}
                    {/*    control={*/}
                    {/*        <Checkbox classes={classes.root} size='small' checked={st} onChange={handleChange} name="skyteam" />*/}
                    {/*    }*/}
                    {/*    className={classes.root}*/}
                    {/*    label="Sky Team"*/}
                    {/*    labelPlacement='end'*/}
                    {/*/>*/}
                    {/*<FormControlLabel*/}
                    {/*    control={*/}
                    {/*        <Checkbox classes={classes.root} size='small' checked={sa} onChange={handleChange} name="staralliance" />*/}
                    {/*    }*/}
                    {/*    className={classes.root}*/}
                    {/*    label="Star Alliance"*/}
                    {/*    labelPlacement='end'*/}
                    {/*/>*/}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CheckboxGroup;

