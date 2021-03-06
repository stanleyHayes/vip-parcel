import React, {useState} from "react";
import {
    Avatar,
    Badge,
    Button,
    Grid,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import {Link} from "react-router-dom";
import {Brightness4, Brightness7, Notifications} from "@material-ui/icons";
import {toggleTheme} from "../../redux/ui/ui-action-creators";

const DesktopHeader = () => {
    const {variant} = useSelector(selectUI);

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {
                borderBottomWidth: 1,
                borderBottomStyle: "solid",
                borderBottomColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)'
            },
            link: {
                textDecoration: 'none'
            },
            brand: {
                textTransform: 'uppercase'
            },
            textField: {
                backgroundColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)'
            },
            gridItem: {
                marginRight: 16
            },
            icon: {
                padding: 8,
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: variant === 'dark' ? 'rgb(23, 58, 94)' : 'rgb(234, 238, 243)',
                backgroundColor: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(234, 238, 243, 0.5)',
                color: variant === 'dark' ? 'rgb(234, 238, 243, 0.5)' : 'rgb(23, 58, 94, 0.5)',
                width: 35,
                height: 35,
                cursor: 'pointer'
            },
            button: {
                backgroundColor: variant === 'dark' ? 'rgb(23, 58, 94, 0.5)' : 'rgb(234, 238, 243, 0.5)',
                width: 35,
                height: 35,
                cursor: 'pointer'
            },
            name: {
                cursor: 'pointer'
            }
        }
    });

    const classes = useStyles();
    const dispatch = useDispatch();

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


    return (
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} alignItems="center" justifyContent="space-between">
                <Grid item={true} lg={3}>
                    <Link to="/" className={classes.link}>
                        <Typography color="textPrimary" className={classes.brand} variant="h5">
                            GOFER
                        </Typography>
                    </Link>
                </Grid>
                <Grid item={true} container={true} lg={6} justifyContent="flex-end" alignItems="center">
                    <Grid item={true} className={classes.gridItem}>
                        <Avatar
                            onClick={handleMenuClick}
                            className={classes.button}
                            src="/images/image.jpg"/>
                    </Grid>
                    <Grid item={true} className={classes.gridItem}>
                        <Typography
                            onClick={handleMenuClick}
                            display="inline"
                            className={classes.name}
                            color="textSecondary"
                            variant="body2"
                            align="center">Stanley</Typography>
                    </Grid>
                    <Grid item={true} className={classes.gridItem}>
                        <Badge badgeContent={6} color="secondary">
                            <Notifications className={classes.icon}/>
                        </Badge>
                    </Grid>
                    <Grid item={true} className={classes.gridItem}>
                        {variant === 'dark' ? (
                            <Brightness7 onClick={() => dispatch(toggleTheme())} className={classes.icon}/>
                        ) : <Brightness4 onClick={() => dispatch(toggleTheme())} className={classes.icon}/>}
                    </Grid>
                </Grid>
            </Grid>
            <Menu anchorEl={anchorEl} variant="menu" open={menuOpen} onClose={handleMenuClose}>
                <MenuItem>
                    <Link to="/profile" className={classes.link}>
                        <Button variant="text" size="small">Profile</Button>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Button variant="text" size="small">Logout</Button>
                </MenuItem>
            </Menu>
        </Toolbar>
    )
}

export default DesktopHeader;
