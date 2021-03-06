import React, {useState} from "react";
import {Button, Grid, makeStyles, MenuItem, Toolbar, Typography, Menu} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {Brightness4, Brightness7, KeyboardArrowDown, KeyboardArrowUp, Menu as MenuIcon} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {toggleTheme} from "../../redux/ui/ui-action-creators";

const MobileHeader = ({handleDrawerOpen}) => {

    const {variant} = useSelector(selectUI);

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: variant === 'dark' ? 'rgb(23, 58, 94)': 'rgb(234, 238, 243)'
            },
            icon: {
                padding: 4,
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)',
                backgroundColor: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(234, 238, 243, 0.5)',
                color: variant === 'dark' ? 'rgba(37,65,255,0.75)' : 'rgb(23, 58, 94, 0.5)',
                width: 30,
                height: 30
            },
            link: {
                textDecoration: 'none'
            },
            brand: {
                textTransform: 'uppercase',
                fontWeight: 'bold'
            },
            gridItem: {

            },
        }
    });

    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = event => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }

    const dispatch = useDispatch();

    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true} xs={2}>
                    <MenuIcon className={classes.icon} onClick={handleDrawerOpen} />
                </Grid>
                <Grid item={true} xs={6}>
                    <Link to="/" className={classes.link}>
                        <Typography color="textPrimary" className={classes.brand} variant="body1">GOFER</Typography>
                    </Link>
                </Grid>
                <Grid item={true} xs={3} className={classes.gridItem}>
                    <Button
                        endIcon={menuOpen ? (
                            <KeyboardArrowUp onClick={handleMenuClose}/>
                        ) : (
                            <KeyboardArrowDown onClick={handleMenuClick}/>
                        )}
                        className={classes.icon}
                        onClick={handleMenuClick}
                        variant="text"
                        size="large">SH</Button>
                    <Menu anchorEl={anchorEl} variant="menu" open={menuOpen} onClose={handleMenuClose}>
                        <MenuItem>
                            <Link to="/profile" className={classes.link}>
                                <Button className={classes.button} variant="text" size="large">Profile</Button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Button className={classes.button} variant="text" size="large">Logout</Button>
                        </MenuItem>
                    </Menu>
                </Grid>
                <Grid item={true} xs={1} className={classes.gridItem}>
                    {variant === 'dark' ? (
                        <Brightness7 onClick={() => dispatch(toggleTheme())} className={classes.icon}/>
                    ) : <Brightness4 onClick={() => dispatch(toggleTheme())} className={classes.icon}/>}
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;