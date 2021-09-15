import React, {useEffect, useState} from "react";
import {Box, Button, Divider, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link, useRouteMatch} from "react-router-dom";
import {
    Archive,
    Dashboard,
    Favorite,
    Person,
    Settings,
    Telegram
} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";

const DrawerContent = () => {

    const {variant} = useSelector(selectUI);

    const useStyles = makeStyles(theme => {
        return {
            root: {
                paddingTop: 64,
                paddingBottom: 84,
                height: '100vh',
                backgroundColor: theme.palette.background.default
            },
            link: {
                textDecoration: 'none',
                display: 'block',
                width: '100%',
            },
            button: {
                fontSize: 12,
                color: theme.palette.text.secondary,
                textTransform: 'capitalize'
            },
            icon: {
                padding: 4,
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)',
                backgroundColor: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(234, 238, 243, 0.5)',
                color: variant === 'dark' ? 'rgb(234, 238, 243, 0.5)' : 'rgb(23, 58, 94, 0.5)',
            },
            divider: {},
            active: {
                color: theme.palette.secondary.main
            },
            activeGrid: {
                borderLeftWidth: 4,
                borderLeftColor: theme.palette.secondary.main,
                borderLeftStyle: "solid",
                height: '100%',
                paddingTop: 8,
                backgroundColor: theme.palette.background.default,
                borderRightStyle: 'none',
                borderRightWidth: 0,
                borderRightColor: theme.palette.background.default
            },
            grid: {
                height: '100%',
                paddingTop: 8,
                backgroundColor: theme.palette.background.paper,
                borderRightStyle: 'solid',
                borderRightWidth: 1,
                borderRightColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)',
            }
        }
    });

    const classes = useStyles();
    const [activePath, setActivePath] = useState('/');
    const {path} = useRouteMatch();
    useEffect(() => {
        setActivePath(path);
    }, [path]);

    return (
        <Box className={classes.root}>
            <Grid container={true} justifyContent="center" direction="column">
                <Grid
                    className={`${classes.grid} ${activePath === '/' && classes.activeGrid}`}
                    item={true}
                    container={true}
                    alignItems="center"
                    justifyContent="center">
                    <Box>
                        <Dashboard
                            className={`${classes.icon} ${activePath === '/' && classes.active}`}
                        />
                    </Box>
                    <Link to="/" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={`${classes.button} ${activePath === '/' && classes.active}`}>
                            Dashboard
                        </Button>
                    </Link>
                </Grid>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <Grid
                    className={`${classes.grid} ${activePath === '/parcels' && classes.activeGrid}`}
                    item={true}
                    container={true}
                    alignItems="center"
                    justifyContent="center">
                    <Box>
                        <Favorite
                            className={`${classes.icon} ${activePath === '/parcels' && classes.active}`}
                        />
                    </Box>
                    <Link to="/parcels" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={`${classes.button} ${activePath === '/parcels' && classes.active}`}>
                            Parcels
                        </Button>
                    </Link>
                </Grid>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <Grid
                    className={`${classes.grid} ${activePath === '/tracking' && classes.activeGrid}`}
                    item={true}
                    container={true}
                    alignItems="center"
                    justifyContent="center">
                    <Box>
                        <Dashboard
                            className={`${classes.icon} ${activePath === '/tracking' && classes.active}`}
                        />
                    </Box>
                    <Link to="/tracking" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={`${classes.button} ${activePath === '/tracking' && classes.active}`}>
                            Tracking
                        </Button>
                    </Link>
                </Grid>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <Grid
                    className={`${classes.grid} ${activePath === '/deliveries' && classes.activeGrid}`}
                    item={true}
                    container={true}
                    alignItems="center"
                    justifyContent="center">
                    <Box>
                        <Telegram
                            className={`${classes.icon} ${activePath === '/deliveries' && classes.active}`}
                        />
                    </Box>
                    <Link to="/deliveries" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={`${classes.button} ${activePath === '/deliveries' && classes.active}`}>
                            Deliveries
                        </Button>
                    </Link>
                </Grid>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <Grid
                    className={`${classes.grid} ${activePath === '/archives' && classes.activeGrid}`}
                    item={true}
                    container={true}
                    alignItems="center"
                    justifyContent="center">
                    <Box>
                        <Archive
                            className={`${classes.icon} ${activePath === '/archives' && classes.active}`}
                        />
                    </Box>
                    <Link to="/archives" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={`${classes.button} ${activePath === '/archives' && classes.active}`}>
                            Archives
                        </Button>
                    </Link>
                </Grid>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <Grid
                    className={`${classes.grid} ${activePath === '/profile' && classes.activeGrid}`}
                    item={true}
                    container={true}
                    alignItems="center"
                    justifyContent="center">
                    <Box>
                        <Person
                            className={`${classes.icon} ${activePath === '/profile' && classes.active}`}
                        />
                    </Box>
                    <Link to="/profile" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={`${classes.button} ${activePath === '/profile' && classes.active}`}>
                            Profile
                        </Button>
                    </Link>
                </Grid>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <Grid
                    className={`${classes.grid} ${activePath === '/settings' && classes.activeGrid}`}
                    item={true}
                    container={true}
                    alignItems="center"
                    justifyContent="center">
                    <Box>
                        <Settings
                            className={`${classes.icon} ${activePath === '/settings' && classes.active}`}
                        />
                    </Box>
                    <Link to="/settings" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={`${classes.button} ${activePath === '/settings' && classes.active}`}>
                            Settings
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DrawerContent;
