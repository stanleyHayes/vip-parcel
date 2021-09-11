import React, {useState} from "react";
import Header from "../headers/header";
import {Box, Grid, Hidden, SwipeableDrawer} from "@material-ui/core";
import DrawerContent from "../drawer/drawer-content";
import {makeStyles} from "@material-ui/styles";
import MobileDrawerContent from "../drawer/mobile-drawer-content";

const Layout = ({children}) => {


    const useStyles = makeStyles(theme => {
        return {
            content: {
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default
            },
            root: {
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default
            }
        }
    });

    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box>
                    <Header handleDrawerOpen={() => setDrawerOpen(true)}/>
                </Box>
                <Grid container={true} className={classes.content}>
                    <Hidden smDown={true}>
                        <Grid item={true} xs={false} md={1}>
                            <DrawerContent/>
                        </Grid>
                    </Hidden>
                    <Grid item={true} xs={12} md={11}>
                        {children}
                    </Grid>
                </Grid>
            </Box>
            <SwipeableDrawer
                onClose={() => setDrawerOpen(false)}
                onOpen={() => setDrawerOpen(true)}
                open={drawerOpen}>
                <MobileDrawerContent handleDrawerClose={() => setDrawerOpen(false)}/>
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default Layout;