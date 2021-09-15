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

const EditProfileDialog = ({open, handleClose}) => {

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

    const [user, setUser] = useState({cardType: " "});
    const [error, setError] = useState({});

    const {name} = user;
    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!name) {
            setError({error, name: "Email field required"});
            return
        } else {
            setError({error, name: null});
        }

        console.log(user)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs={11} container={true} justifyContent="center">
                        <Typography align="center" variant="h6" className={classes.title}>Edit Profile</Typography>
                    </Grid>
                    <Grid item={true} xs={1} container={true} justifyContent="flex-end">
                        <Close color="secondary" className={classes.closeIcon} onClick={handleClose} />
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
                        error={Boolean(error.name)}
                        helperText={error.name}
                        type="name"
                        value={name}
                        placeholder="name"
                        label="name"
                        name="name"
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

export default EditProfileDialog;