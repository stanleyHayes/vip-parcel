import {
    Button,
    Dialog,
    DialogContent,
    Grid,
    makeStyles,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {useState} from "react";
import {DatePicker} from "@material-ui/pickers";

const EditPersonalDetailsDialog = ({open, handleClose}) => {

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

    const [user, setUser] = useState({bloodGroup: " ", gender: " ", maritalStatus: " ", role: " "});
    const [error, setError] = useState({});

    const {bloodGroup, birthDate, gender, maritalStatus, role} = user;
    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!bloodGroup) {
            setError({error, bloodGroup: "Email field required"});
            return
        } else {
            setError({error, bloodGroup: null});
        }

        console.log(user)
    }

    const handleDateChange = date => {
        setUser({...user, birthDate: date});
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs={11} container={true} justifyContent="center">
                        <Typography align="center" variant="h6" className={classes.title}>Edit Personal</Typography>
                    </Grid>
                    <Grid item={true} xs={1} container={true} justifyContent="flex-end">
                        <Close color="secondary" className={classes.closeIcon} onClick={handleClose} />
                    </Grid>
                </Grid>


                <form onSubmit={handleSubmit}>
                    <Select
                        value={gender}
                        variant="outlined"
                        label="Gender"
                        onChange={handleChange}
                        name="cardType"
                        className={classes.textField}
                        margin="dense"
                        defaultValue=" "
                        fullWidth={true}>
                        <MenuItem value=" ">Select Gender</MenuItem>
                        <MenuItem value="MALE">Male</MenuItem>
                        <MenuItem value="FEMALE">Female</MenuItem>
                    </Select>

                    <Select
                        value={bloodGroup}
                        variant="outlined"
                        label="Blood Group"
                        onChange={handleChange}
                        name="bloodGroup"
                        className={classes.textField}
                        margin="dense"
                        defaultValue=" "
                        fullWidth={true}>
                        <MenuItem value=" ">Select Blood Group</MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                    </Select>

                    <Select
                        value={maritalStatus}
                        variant="outlined"
                        label="Marital status"
                        onChange={handleChange}
                        name="maritalStatus"
                        className={classes.textField}
                        margin="dense"
                        defaultValue=" "
                        fullWidth={true}>
                        <MenuItem value=" ">Select Marital Status</MenuItem>
                        <MenuItem value="Single">Single</MenuItem>
                        <MenuItem value="Married">Married</MenuItem>
                        <MenuItem value="Divorced">Divorced</MenuItem>
                        <MenuItem value="Deceased">Deceased</MenuItem>
                        <MenuItem value="Deceased">Separated</MenuItem>
                    </Select>

                    <Select
                        value={role}
                        variant="outlined"
                        label="Card Type"
                        onChange={handleChange}
                        name="cardType"
                        className={classes.textField}
                        margin="dense"
                        defaultValue=" "
                        fullWidth={true}>
                        <MenuItem value=" ">Select Card Type</MenuItem>
                        <MenuItem value="Passport">Passport</MenuItem>
                        <MenuItem value="Ghana Card">Ghana Card</MenuItem>
                        <MenuItem value="Voter ID">Voter's ID</MenuItem>
                        <MenuItem value="National Health">National Health</MenuItem>
                    </Select>

                    <DatePicker
                        onChange={handleDateChange}
                        value={birthDate}
                        autoOk={true}
                        className={classes.textField}
                        disableFuture={true}
                        inputVariant="outlined"
                        variant="dialog"
                        label="Birth Date"
                        emptyLabel="Select Birthdate"
                        margin="dense"
                        fullWidth={true}
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

export default EditPersonalDetailsDialog;