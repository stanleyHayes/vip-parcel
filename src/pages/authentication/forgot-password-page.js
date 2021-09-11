import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import validator from "validator";
import {KeyboardArrowLeft} from "@material-ui/icons";

const ForgotPasswordPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            title: {},
            image: {
                width: '100%',
                maxWidth: '100%',
                maxHeight: '100vh',
                height: '100vh',
                objectFit: 'cover',
                objectPosition: 'center'
            },
            container: {
                display: 'flex',
                width: '100%',
                maxWidth: '100vw',
                backgroundColor: theme.palette.background.default,
                maxHeight: '100vh'
            },
            imageContainer: {
                height: '100vh',
                maxHeight: '100vh',
                flexBasis: '50%'
            },
            formContainer: {
                flexBasis: '50%',
                maxHeight: '100vh'
            },
            textField: {},
            link: {
                textDecoration: 'none'
            },
            button: {
                marginTop: 32
            },
            brand: {
                textTransform: "uppercase"
            },
            gridItem: {
                display: 'flex',
                justifyContent: "space-between",
                maxHeight: '100vh',
                height: '100%',
                flexDirection: 'column'
            },
            gridContainer: {
                maxHeight: '100%',
                height: '100vh',
                paddingTop: 32,
                paddingBottom: 32
            },
            welcomeTitle: {
                fontWeight: 'bolder'
            },
            form: {
                alignSelf: "flex-start"
            },
            backButton: {}
        }
    });

    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = event => {
        setEmail(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError('Email field is required');
            return;
        } else {
            setError(null);
        }

        if (!validator.isEmail(email)) {
            setError('Invalid email');
            return;
        } else {
            setError({error, email: null});
        }
        console.log(email);
    }

    return (
        <React.Fragment>
            <Box className={classes.container}>
                <Container className={classes.formContainer}>
                    <Grid
                        className={classes.gridContainer}
                        container={true}
                        justifyContent="center"
                        alignItems="center">
                        <Grid item={true} xs={12} md={8} lg={6} className={classes.gridItem}>
                            <Box>
                                <Typography
                                    color="textPrimary"
                                    className={classes.brand}
                                    variant="h3">Vip Parcel</Typography>
                            </Box>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Link
                                    to="/auth/login"
                                    className={classes.link}>
                                    <Button
                                        color="secondary"
                                        startIcon={<KeyboardArrowLeft color="secondary"/>}
                                        className={classes.backButton}
                                        variant="text">
                                        Back
                                    </Button>
                                </Link>
                                <Typography
                                    color="textSecondary"
                                    className={classes.welcomeTitle}
                                    gutterBottom={true}
                                    variant="h5">
                                    Forgot your password?
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom={true}
                                    variant="body2">
                                    Please enter the email associated with your account to receive a reset link
                                </Typography>
                                <TextField
                                    name="email"
                                    placeholder="Enter email"
                                    label="Email"
                                    required={true}
                                    error={Boolean(error)}
                                    value={email}
                                    helperText={error}
                                    variant="outlined"
                                    fullWidth={true}
                                    margin="dense"
                                    className={classes.textField}
                                    onChange={handleChange}
                                    type="email"
                                />

                                <Button
                                    color="secondary"
                                    type="submit"
                                    onClick={handleSubmit}
                                    fullWidth={true}
                                    variant="contained"
                                    disableElevation={true}
                                    className={classes.button}>
                                    Send
                                </Button>
                            </form>

                            <Box>
                                <Grid container={true} alignItems="center" justifyContent="space-between">
                                    <Grid item={true}>
                                        <Typography color="textSecondary" variant="body2">
                                            &copy;2021 VIP Parcel
                                        </Typography>
                                    </Grid>
                                    <Grid item={true}>
                                        <Link className={classes.link} to="/terms" variant="body2">
                                            <Typography color="textSecondary" variant="body2">
                                                &copy;2021 VIP Parcel
                                            </Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item={true}>
                                        <Link className={classes.link} to="/terms" variant="body2">
                                            <Typography color="textSecondary" variant="body2">
                                                Privacy Policy
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Box className={classes.imageContainer}>
                    <img src="/images/image.jpg" alt="bus" className={classes.image}/>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default ForgotPasswordPage;