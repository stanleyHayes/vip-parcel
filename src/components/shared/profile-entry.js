import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const ProfileEntry = ({label, icon, value}) => {
    const useStyles = makeStyles(theme => {
        return {
            root: {
                display: 'flex'
            },
            icon: {},
            value: {
                fontSize: 12,
                wordWrap: "break-word",
                fontWeight: 'bold'
            },
            label: {
                fontSize: 10
            },
            iconContainer: {},
            textContent: {}
        }
    });

    const classes = useStyles();

    return (
        <Grid className={classes.root} container={true} alignItems="center" spacing={1}>
            <Grid item={true}>
                {icon}
            </Grid>
            <Grid item={true}>
                <Typography color="textSecondary" variant="body2" className={classes.label}>{label}</Typography>
                <Typography noWrap={true} color="textSecondary" variant="body2"
                            className={classes.value}>{value}</Typography>
            </Grid>
        </Grid>
    )
}

export default ProfileEntry;