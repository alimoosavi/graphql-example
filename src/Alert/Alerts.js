import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Alert} from '@material-ui/lab';
import {Snackbar} from "@material-ui/core";
import {AlertsContext} from "./alerts-context";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const DescriptionAlerts = () => {
    const classes = useStyles();
    const {success, error, closeErrorAlert, closeSuccessAlert} = useContext(AlertsContext);

    return (
        <div className={classes.root}>
            <Snackbar open={error.open} autoHideDuration={6000} onClose={closeErrorAlert}>
                <Alert severity="error" onClose={closeErrorAlert}>{error.message}</Alert>
            </Snackbar>

            <Snackbar open={success.open} autoHideDuration={6000} onClose={closeSuccessAlert}>
                <Alert severity="success" onClose={closeSuccessAlert}>{success.message}</Alert>
            </Snackbar>

        </div>
    );
}

export default DescriptionAlerts;