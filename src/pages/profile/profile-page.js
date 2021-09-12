import React from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    LinearProgress,
    Typography
} from "@material-ui/core";
import {Call, CreditCard, Edit, Email, LocationOn, Person, Phone} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/authentication/authentication-reducer";
import {Alert} from "@material-ui/lab";
import ProfileEntry from "../../components/shared/profile-entry";

const ProfilePage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 82
            },
            loadingContainer: {
                paddingTop: 12
            },
            editButton: {
                textTransform: "Capitalize",
                fontSize: 12
            },
            profileImage: {},
            name: {},
            officeButton: {
                fontSize: 12
            },
            loading: {
                marginTop: 57,
                [theme.breakpoints.up('md')]: {
                    marginTop: 64
                }
            },
            emptyText: {
                textTransform: 'uppercase'
            },
            errorText: {
                textTransform: 'uppercase'
            },
            profileEntryIcon: {
                width: 15,
                height: 15
            }
        }
    });

    const classes = useStyles();

    const {authError, authLoading, userData} = useSelector(selectAuth);

    return (
        <Layout>
            {authLoading && <LinearProgress className={classes.loading} variant="query" color="secondary"/>}
            <Container className={authLoading ? classes.loadingContainer : classes.container}>
                {authError &&
                <Alert className={classes.errorText} severity="error" variant="standard">{authError}</Alert>}

                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} md={3}>
                        <Card variant="elevation" elevation={1}>
                            <CardContent>
                                <Grid
                                    container={true}
                                    justifyContent="flex-end">
                                    <Button
                                        color="secondary"
                                        className={classes.editButton}
                                        size="small"
                                        variant="text"
                                        startIcon={<Edit/>}>
                                        Edit
                                    </Button>
                                </Grid>

                                <Grid
                                    container={true}
                                    justifyContent="center">
                                    <Grid item={true}>
                                        <Avatar
                                            className={classes.profileImage}
                                            variant="rounded"
                                            src={userData.image}/>
                                    </Grid>
                                </Grid>

                                <Typography
                                    color="textSecondary"
                                    className={classes.name}
                                    variant="body1"
                                    align="center">
                                    {userData.name}
                                </Typography>
                                <Button
                                    fullWidth={true}
                                    color="primary"
                                    className={classes.officeButton}
                                    startIcon={<LocationOn/>}
                                    variant="body2">
                                    Circle, Accra
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item={true} container={true} xs={12} md={9} spacing={1}>

                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={1}>
                                <CardContent>
                                    <Grid container={true} justifyContent="space-between" alignItems="center">
                                        <Grid item={true}>
                                            <Button
                                                color="secondary"
                                                className={classes.editButton}
                                                size="small"
                                                variant="text"
                                                startIcon={<Person/>}>Personal Details</Button>
                                        </Grid>
                                        <Grid item={true}>
                                            <Button
                                                color="secondary"
                                                className={classes.editButton}
                                                size="small"
                                                variant="text"
                                                startIcon={<Edit/>}>
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <Grid container={true} spacing={2}>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Gender"
                                                value={userData.gender || "N/A"}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Birthdate"
                                                value={userData.birthDate || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Marital Status"
                                                value={userData.maritalStatus || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Blood Group"
                                                value={userData.bloodGroup || "N/A"}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={1}>
                                <CardContent>
                                    <Grid container={true} justifyContent="space-between" alignItems="center">
                                        <Grid item={true}>
                                            <Button
                                                color="secondary"
                                                className={classes.editButton}
                                                size="small"
                                                variant="text"
                                                startIcon={<Person/>}>Contact Details</Button>
                                        </Grid>
                                        <Grid item={true}>
                                            <Button
                                                color="secondary"
                                                className={classes.editButton}
                                                size="small"
                                                variant="text"
                                                startIcon={<Edit/>}>
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <Grid container={true} spacing={2}>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Email className={classes.profileEntryIcon}/>}
                                                label="Email"
                                                value={userData.email || "N/A"}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Phone className={classes.profileEntryIcon}/>}
                                                label="Phone"
                                                value={userData.phone || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Call className={classes.profileEntryIcon}/>}
                                                label="Emergency Contact"
                                                value={userData.emergencyContact || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<CreditCard className={classes.profileEntryIcon}/>}
                                                label="ID Card"
                                                value={`${userData.identityCard.number} (${userData.identityCard.type})` || "N/A"}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={12}>
                            <Card variant="elevation" elevation={1}>
                                <CardContent>
                                    <Grid container={true} justifyContent="space-between" alignItems="center">
                                        <Grid item={true}>
                                            <Button
                                                color="secondary"
                                                className={classes.editButton}
                                                size="small"
                                                variant="text"
                                                startIcon={<Person/>}>
                                                Address Details
                                            </Button>
                                        </Grid>
                                        <Grid item={true}>
                                            <Button
                                                color="secondary"
                                                className={classes.editButton}
                                                size="small"
                                                variant="text"
                                                startIcon={<Edit/>}>
                                                Edit
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <Grid container={true} spacing={2}>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Country"
                                                value={userData.address.country || "N/A"}
                                            />
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Region"
                                                value={userData.address.region || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="City"
                                                value={userData.address.city || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Suburb"
                                                value={userData.address.suburb || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Street"
                                                value={userData.address.street || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="House Number"
                                                value={userData.address.houseNumber || "N/A"}/>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <ProfileEntry
                                                icon={<Edit className={classes.profileEntryIcon}/>}
                                                label="Ghana Post Address"
                                                value={userData.address.ghanaPostAddress || "N/A"}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ProfilePage;