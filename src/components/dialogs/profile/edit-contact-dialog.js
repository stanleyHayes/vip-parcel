import {
    Button,
    Dialog,
    DialogContent,
    Grid,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {useState} from "react";

const EditContactDialog = ({open, handleClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            title: {
                fontWeight: 'bold'
            },
            textField: {
                marginBottom: 8,
                marginTop: 8
            },
            closeIcon: {
                cursor: 'pointer'
            },
            button: {
                marginTop: 16,
                paddingTop: 8,
                paddingBottom: 8
            }
        }
    });

    const classes = useStyles();
    const [user, setUser] = useState({cardType: " "});
    const [error, setError] = useState({});

    const {email, phone, emergencyContact, cardType, cardNumber} = user;
    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!email) {
            setError({error, email: "Email field required"});
            return
        } else {
            setError({error, email: null});
        }

        console.log(user)
    }


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs={11} container={true} justifyContent="center">
                        <Typography align="center" variant="h6" className={classes.title}>Edit Contact</Typography>
                    </Grid>
                    <Grid item={true} xs={1} container={true} justifyContent="flex-end">
                        <Close color="secondary" className={classes.closeIcon} onClick={handleClose}/>
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
                        error={Boolean(error.email)}
                        helperText={error.email}
                        type="email"
                        value={email}
                        placeholder="email"
                        label="Email"
                        name="email"
                    />

                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.phone)}
                        helperText={error.phone}
                        type="tel"
                        value={phone}
                        placeholder="phone"
                        label="Phone"
                        name="phone"
                    />


                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.emergencyContact)}
                        helperText={error.emergencyContact}
                        type="email"
                        value={emergencyContact}
                        placeholder="Emergency Contact"
                        label="Emergency Contact"
                        name="emergencyContact"
                    />

                    <Select
                        value={cardType}
                        variant="outlined"
                        label="Card Type"
                        onChange={handleChange}
                        name="cardType"
                        className={classes.textField}
                        margin="dense"
                        defaultValue=" "
                        fullWidth={true}>
                        <MenuItem value=" ">Select Card Type</MenuItem>
                        <MenuItem value="PASSPORT">Passport</MenuItem>
                        <MenuItem value="GHANA_CARD">Ghana Card</MenuItem>
                        <MenuItem value="VOTERS_ID">Voter's ID</MenuItem>
                        <MenuItem value="NATIONAL_HEALTH">National Health</MenuItem>
                    </Select>

                    <TextField
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                        className={classes.textField}
                        color="secondary"
                        margin="dense"
                        onChange={handleChange}
                        error={Boolean(error.cardNumber)}
                        helperText={error.cardNumber}
                        type="text"
                        value={cardNumber}
                        placeholder="ID Card Number"
                        label="ID Card Number"
                        name="cardNumber"
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

export default EditContactDialog;