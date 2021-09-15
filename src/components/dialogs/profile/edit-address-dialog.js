import {
    Button,
    Dialog,
    DialogContent,
    Grid,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {useState} from "react";

const EditAddressDialog = ({open, handleClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            title: {
                fontWeight: 'bold'
            },
            closeIcon: {
                cursor: 'pointer'
            },
            textField: {
                marginBottom: 8,
                marginTop: 8
            },
            button: {
                marginTop: 16,
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    });

    const classes = useStyles();

    const [error, setError] = useState({});

    const [user, setUser] = useState({});
    const {country, city, region, suburb, street, ghanaPostAddress, houseNumber} = user;
    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!country) {
            setError({error, country: "Country field required"});
            return
        } else {
            setError({error, country: null});
        }

        console.log(user)
    }


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs={11} container={true} justifyContent="center">
                        <Typography align="center" variant="h6" className={classes.title}>Edit Address</Typography>
                    </Grid>
                    <Grid item={true} xs={1} container={true} justifyContent="flex-end">
                        <Close className={classes.closeIcon} onClick={handleClose}/>
                    </Grid>
                </Grid>

                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.country)}
                        helperText={error.country}
                        type="country"
                        value={country}
                        placeholder="country"
                        label="Country"
                        name="country"
                    />

                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.region)}
                        helperText={error.region}
                        type="tel"
                        value={region}
                        placeholder="region"
                        label="Region"
                        name="region"
                    />


                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.city)}
                        helperText={error.city}
                        type="text"
                        value={city}
                        placeholder="City"
                        label="City"
                        name="city"
                    />


                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.suburb)}
                        helperText={error.suburb}
                        type="text"
                        value={suburb}
                        placeholder="Suburb"
                        label="Suburb"
                        name="suburb"
                    />


                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.street)}
                        helperText={error.street}
                        type="text"
                        value={street}
                        placeholder="Street"
                        label="Street"
                        name="street"
                    />


                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.ghanaPostAddress)}
                        helperText={error.ghanaPostAddress}
                        type="text"
                        value={ghanaPostAddress}
                        placeholder="Ghana Post Address"
                        label="Ghana Post Address"
                        name="ghanaPostAddress"
                    />


                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.houseNumber)}
                        helperText={error.houseNumber}
                        type="text"
                        value={houseNumber}
                        placeholder="Suburb"
                        label="House Number"
                        name="houseNumber"
                    />

                    <Button
                        color="secondary"
                        fullWidth={true}
                        variant="contained"
                        type="submit"
                        onClick={handleSubmit}
                        className={classes.button}
                        size="large">
                        Update
                    </Button>
                </form>

            </DialogContent>
        </Dialog>
    )
}

export default EditAddressDialog;