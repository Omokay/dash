import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    form: {

    },
    tickSize: {


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

                <FormGroup className={classes.form} row>
                    <FormControlLabel
                        control={
                            <Checkbox className={classes.tickSize} checked={ow} onChange={handleChange} name="oneworld" />
                        }
                        label="One World"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox className={classes.tickSize} checked={st} onChange={handleChange} name="skyteam" />
                        }
                        label="Sky Team"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox className={classes.tickSize} checked={sa} onChange={handleChange} name="staralliance" />
                        }
                        label="Star Alliance"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default CheckboxGroup;

