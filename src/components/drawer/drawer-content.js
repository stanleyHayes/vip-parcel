import React, {useEffect, useState} from "react";
import {Box, Button, Divider, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Link, useRouteMatch} from "react-router-dom";
import {Archive, Dashboard, Favorite, Person, Settings, Telegram} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";

const DrawerContent = () => {

    const {variant} = useSelector(selectUI);

    const useStyles = makeStyles(theme => {
        return {
            root: {
                paddingTop: 84,
                minHeight: '100vh',
                backgroundColor: theme.palette.background.paper,
                borderRightStyle: 'solid',
                borderRightWidth: 1,
                borderColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)',
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
                width: 30,
                height: 30
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            active: {
                color: theme.palette.secondary.main
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
                <Grid item={true} container={true} justifyContent="center">
                    <Box>
                        <Dashboard className={classes.icon}/>
                    </Box>
                    <Link to="/" className={classes.link}>
                        <Button
                            fullWidth={true}
                            variant="text"
                            size="small"
                            className={classes.button}>
                            Dashboard
                        </Button>
                    </Link>
                </Grid>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <Grid item={true} container={true} justifyContent="center">
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

                <Grid item={true} container={true} justifyContent="center">
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

                <Grid item={true} container={true} justifyContent="center">
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

                <Grid item={true} container={true} justifyContent="center">
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

                <Grid item={true} container={true} justifyContent="center">
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