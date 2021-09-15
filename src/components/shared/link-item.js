import {Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {KeyboardArrowRight} from "@material-ui/icons";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";

const LinkItem = ({link, label, icon}) => {

    const {variant} = useSelector(selectUI);

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'block',
                width: '100%'
            },
            button: {
                color: theme.palette.text.secondary,
                textTransform: 'capitalize'
            },
            icon: {
                padding: 8,
                borderRadius: 4,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)',
                backgroundColor: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(234, 238, 243, 0.5)',
                color: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(23, 58, 94)',
                width: 30,
                height: 30
            },
            iconRight: {
                borderWidth: 1,
                color: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(23, 58, 94)',
                width: 20,
                height: 20
            },
            container: {
                marginTop: 32
            },
            label: {
                fontWeight: 'bold'
            }
        }
    });

    const classes = useStyles();

    return (
        <Link to={link} className={classes.link}>
            <Grid container={true} alignItems="center">
                <Grid item={true} xs={2}>
                    {icon}
                </Grid>
                <Grid item={true} xs={9}>
                    <Typography
                        className={classes.label}
                        color="textSecondary"
                        variant="body2"
                        size="small">
                        {label}
                    </Typography>
                </Grid>
                <Grid item={true} xs={1}>
                    <KeyboardArrowRight className={classes.iconRight}/>
                </Grid>
            </Grid>
        </Link>
    )
}

export default LinkItem;