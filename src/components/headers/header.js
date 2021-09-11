import React from "react";
import {AppBar, Hidden, makeStyles} from "@material-ui/core";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = ({handleDrawerOpen}) => {

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {}
        }
    });

    const classes = useStyles();

    return (
        <AppBar className={classes.toolbar} variant="elevation" elevation={0}>
            <Hidden mdDown={true}>
                <DesktopHeader />
            </Hidden>

            <Hidden lgUp={true}>
                <MobileHeader handleDrawerOpen={handleDrawerOpen} />
            </Hidden>
        </AppBar>
    )
}

export default Header;