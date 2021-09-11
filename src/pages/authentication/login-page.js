import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const LoginPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            title: {}
        }
    });

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography className={classes.title} variant="h2" align="center">Login</Typography>
        </React.Fragment>
    )
}

export default LoginPage;