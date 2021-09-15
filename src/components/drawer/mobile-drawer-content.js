import React from "react";
import {Box, Button, Container, Divider, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {
    Archive,
    Close,
    Dashboard,
    Face,
    Favorite, Settings,
    Telegram
} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/ui/ui-reducer";
import LinkItem from "../shared/link-item";

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
                marginTop: 12,
                marginBottom: 12
            },
            container: {
                marginTop: 32
            },
            linksContainer: {
                paddingTop: 16,
                paddingBottom: 16
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
            <Box className={classes.linksContainer}>
                <LinkItem icon={<Dashboard className={classes.icon}/>} link="/" label="Dashboard"/>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <LinkItem icon={<Favorite className={classes.icon}/>} link="/parcels" label="Parcels"/>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <LinkItem icon={<Telegram className={classes.icon}/>} link="/deliveries" label="Deliveries"/>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <LinkItem icon={<Archive className={classes.icon}/>} link="/archives" label="Archives"/>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <LinkItem icon={<Face className={classes.icon} />} link="/profile" label="Profile"/>

                <Divider light={true} className={classes.divider} variant="fullWidth"/>

                <LinkItem icon={<Settings className={classes.icon}/>} link="/settings" label="Settings"/>
            </Box>
        </Container>
    )
}

export default MobileDrawerContent;