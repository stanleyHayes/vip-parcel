import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Button, Card, CardContent, Container, Divider, Grid} from "@material-ui/core";
import ChangePassword from "../../components/shared/change-password";
import Notification from "../../components/shared/notification";
import DeleteAccount from "../../components/shared/delete-account";

const SettingsPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 84,
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default
            },
            active: {
                color: theme.palette.secondary.main
            },
            button: {
                textTransform: "capitalize"
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            mainPanel: {
                backgroundColor: theme.palette.background.default
            }
        }
    });

    const classes = useStyles();

    const [activeIndex, setActiveIndex] = useState(0);

    const getActiveComponent = index => {
        switch (index) {
            case 0:
                return <ChangePassword/>;
            case 1:
                return <Notification/>;
            case 2:
                return <DeleteAccount/>;
            default:
                return <ChangePassword/>;
        }
    }
    return (
        <Layout>
            <Container className={classes.container}>
                <Grid container={true} spacing={4} className={classes.mainPanel}>
                    <Grid item={true} xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Button
                                    onClick={() => setActiveIndex(0)}
                                    className={`${activeIndex === 0 && classes.active}  ${classes.button}`}
                                    variant="text"
                                    size="small">
                                    Change Password
                                </Button>
                                <Divider className={classes.divider} light={true} variant="fullWidth"/>

                                <Button
                                    onClick={() => setActiveIndex(1)}
                                    className={`${activeIndex === 1 && classes.active}  ${classes.button}`}
                                    variant="text"
                                    size="small">
                                    Notifications
                                </Button>
                                <Divider className={classes.divider} light={true} variant="fullWidth"/>

                                <Button
                                    onClick={() => setActiveIndex(2)}
                                    className={`${activeIndex === 2 && classes.active}  ${classes.button}`}
                                    variant="text"
                                    size="small">
                                    Delete Account
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={9} className={classes.mainPanel}>
                        {getActiveComponent(activeIndex)}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default SettingsPage;
