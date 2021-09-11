import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Button, Checkbox, Container, Grid, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import validator from "validator";

const LoginPage = () => {
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
            }
        }
    });

    const classes = useStyles();

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const {email, password} = user;
    const [visiblePassword, setVisiblePassword] = useState(false);

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({error, email: 'Email field is required'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!validator.isEmail(email)) {
            setError({error, email: 'Invalid email'});
            return;
        } else {
            setError({error, email: null});
        }

        if (!password) {
            setError({error, email: 'Password field required'});
            return;
        } else {
            setError({error, email: null});
        }
        console.log(user);
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
                                    variant="h3">
                                    Vip Parcel
                                </Typography>
                            </Box>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Typography
                                    className={classes.welcomeTitle}
                                    gutterBottom={true}
                                    color="textSecondary"
                                    variant="h5">
                                    Welcome Back!
                                </Typography>
                                <Typography color="textSecondary" gutterBottom={true} variant="body2">
                                    Please sign in to your VIP Parcel account
                                </Typography>
                                <TextField
                                    name="email"
                                    placeholder="Enter email"
                                    label="Email"
                                    required={true}
                                    error={Boolean(error.email)}
                                    value={email}
                                    helperText={error.email}
                                    variant="outlined"
                                    fullWidth={true}
                                    margin="dense"
                                    color="primary"
                                    className={classes.textField}
                                    onChange={handleChange}
                                    type="email"
                                />
                                <TextField
                                    name="password"
                                    placeholder="Enter password"
                                    label="Password"
                                    required={true}
                                    color="primary"
                                    error={Boolean(error.password)}
                                    value={password}
                                    helperText={error.password}
                                    variant="outlined"
                                    fullWidth={true}
                                    margin="dense"
                                    className={classes.textField}
                                    onChange={handleChange}
                                    type={visiblePassword ? 'text' : 'password'}
                                />
                                <Grid container={true} justifyContent="space-between" alignItems="center">
                                    <Grid item={true}>
                                        <Checkbox
                                            color="secondary"
                                            checked={visiblePassword}
                                            onChange={() => setVisiblePassword(!visiblePassword)}
                                        />
                                        <Typography
                                            color="textSecondary"
                                            display="inline"
                                            variant="body2">
                                            {visiblePassword ? 'Hide Password' : 'Show Password'}
                                        </Typography>
                                    </Grid>
                                    <Grid item={true}>
                                        <Link className={classes.link} to="/auth/forgot-password">
                                            <Button color="secondary" variant="text" size="small">
                                                Forgot Password?
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>

                                <Button
                                    color="secondary"
                                    type="submit"
                                    onClick={handleSubmit}
                                    fullWidth={true}
                                    variant="contained"
                                    disableElevation={true}
                                    className={classes.button}>
                                    Sign in
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

export default LoginPage;