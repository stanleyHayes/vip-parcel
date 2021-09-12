import React from "react";
import {Button, Container, Divider, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
import {Close, Dashboard, KeyboardArrowRight, Settings} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";

const MobileDrawerContent = ({handleDrawerClose}) => {

    const {variant} = useSelector(selectUI);

    const useStyles = makeStyles(theme => {
        return {
            root: {
                paddingTop: 16,
                paddingBottom: 16,
                minHeight: '100vh',
                backgroundColor: theme.palette.background.paper,
                [theme.breakpoints.down('sm')]: {
                    width: '90vw'
                }
            },
            link: {
                textDecoration: 'none',
                fontWeight: 'bold',
            },
            button: {
                color: theme.palette.text.secondary,
            },
            icon: {
                padding: 4,
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)',
                backgroundColor: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(234, 238, 243, 0.5)',
                color: variant === 'dark' ? 'rgba(37,65,255,0.75)' : 'rgb(23, 58, 94)',
                width: 25,
                height: 25
            },
            iconRight: {
                padding: 4,
                borderRadius: 8,
                borderWidth: 1,
                color: variant === 'dark' ? 'rgba(37,65,255,0.75)' : 'rgb(23, 58, 94)',
                width: 25,
                height: 25
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            container: {
                marginTop: 32
            }
        }
    });

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container={true} justifyContent="flex-end">
                <Grid item={true}>
                    <Button variant="outlined" startIcon={<Close/>} onClick={handleDrawerClose}>Close</Button>
                </Grid>
            </Grid>
            <Grid container={true} direction="column" className={classes.container}>
                <Grid item={true} alignItems="center" container={true} justifyContent="space-around">
                    <Link to="/" className={classes.link}>
                        <Button
                            startIcon={<Dashboard className={classes.icon}/>}
                            variant="text"
                            size="small"
                            className={classes.button}>
                            Dashboard
                        </Button>
                    </Link>
                    <KeyboardArrowRight className={classes.iconRight}/>
                </Grid>

                <Divider light={true} className={classes.divider} variant="middle"/>

                <Grid item={true} alignItems="center" container={true} justifyContent="space-around">
                    <Link to="/parcels" className={classes.link}>
                        <Button
                            startIcon={<Dashboard className={classes.icon}/>}
                            fullWidth={false}
                            variant="text"
                            size="small"
                            className={classes.button}>
                            Parcels
                        </Button>
                    </Link>
                    <KeyboardArrowRight className={classes.iconRight}/>
                </Grid>

                <Divider light={true} className={classes.divider} variant="middle"/>

                <Grid item={true} alignItems="center" container={true} justifyContent="space-around">
                    <Link to="/deliveries" className={classes.link}>
                        <Button
                            startIcon={<Dashboard className={classes.icon}/>}
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={classes.button}>
                            Deliveries
                        </Button>
                    </Link>
                    <KeyboardArrowRight className={classes.iconRight}/>
                </Grid>

                <Divider light={true} className={classes.divider} variant="middle"/>

                <Grid item={true} alignItems="center" container={true} justifyContent="space-around">
                    <Link to="/archives" className={classes.link}>
                        <Button
                            startIcon={<Dashboard className={classes.icon}/>}
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={classes.button}>
                            Archives
                        </Button>
                    </Link>
                    <KeyboardArrowRight className={classes.iconRight}/>
                </Grid>

                <Divider light={true} className={classes.divider} variant="middle"/>

                <Grid item={true} alignItems="center" container={true} justifyContent="space-around">
                    <Link to="/profile" className={classes.link}>
                        <Button
                            startIcon={<Dashboard className={classes.icon}/>}
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={classes.button}>
                            Profile
                        </Button>
                    </Link>
                    <KeyboardArrowRight className={classes.iconRight}/>
                </Grid>

                <Divider light={true} className={classes.divider} variant="middle"/>

                <Grid item={true} alignItems="center" container={true} justifyContent="space-around">
                    <Link to="/settings" className={classes.link}>
                        <Button
                            startIcon={<Settings className={classes.icon}/>}
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={classes.button}>
                            Settings
                        </Button>
                    </Link>
                    <KeyboardArrowRight className={classes.iconRight}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MobileDrawerContent;