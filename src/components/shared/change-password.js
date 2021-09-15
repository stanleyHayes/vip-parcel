import {Card, CardContent, Grid, makeStyles, TextField, Typography, Checkbox, Button} from "@material-ui/core";
import FeedbackText from "./feedback-text";
import {useState} from "react";
import {UTILS} from "../../utils/utils";

const ChangePassword = () => {

    const useStyles = makeStyles(theme => {
        return {
            title: {
                fontWeight: 'bolder'
            },
            instruction: {
                fontWeight: 'bold',
                marginBottom: 32
            },
            textField: {},
            passwordContainer: {
                marginTop: 32
            },
            button: {
                paddingTop: 8,
                paddingBottom: 8,
                marginTop: 16
            }
        }
    });

    const classes = useStyles();

    const [atLeastEightCharacters, setAtLeastEightCharacters] = useState(false);
    const [containsUppercase, setContainsUppercase] = useState(false);
    const [containsSpecialCharacter, setContainsSpecialCharacter] = useState(false);
    const [containsDigitCharacter, setContainsDigitCharacter] = useState(false);
    const [containsLowerCharacter, setContainsLowerCharacter] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const [passwords, setPasswords] = useState({password: "", currentPassword: "", confirmPassword: ""});

    const {password, confirmPassword,currentPassword } = passwords;
    const [visibility, setVisibility] = useState(false);

    const handleChange = event => {
        setPasswords({...passwords, [event.target.name]: event.target.value});

        if(password.length >= 8){
            setAtLeastEightCharacters(true);
        }else {
            setAtLeastEightCharacters(false);
        }

        if(password.length >= 8 && confirmPassword === password){
            setPasswordsMatch(true);
        }else {
            setPasswordsMatch(false);
        }

        if(UTILS.containsUppercase(password)){
            setContainsUppercase(true);
        }else {
            setContainsUppercase(false);
        }

        if(UTILS.containsLowercase(password)){
            setContainsLowerCharacter(true);
        }else {
            setContainsLowerCharacter(false);
        }

        if(UTILS.containsDigit(password)){
            setContainsDigitCharacter(true);
        }else {
            setContainsDigitCharacter(false);
        }

        if(UTILS.containsSpecialCharacter(password)){
            setContainsSpecialCharacter(true);
        }else {
            setContainsSpecialCharacter(false);
        }
    }



    return (
        <Card>
            <CardContent>
                <Typography
                    gutterBottom={true}
                    variant="h6"
                    className={classes.title}>
                    Change Password
                </Typography>

                <Typography gutterBottom={true} variant="body2" className={classes.instruction}>
                    Enter your new password, it's a good idea to use a strong one that you don't use elsewhere
                </Typography>

                <FeedbackText text="At least 8 characters" status={atLeastEightCharacters}/>
                <FeedbackText text="At least a lowercase" status={containsLowerCharacter}/>
                <FeedbackText text="At least an uppercase" status={containsUppercase}/>
                <FeedbackText text="At least a digit" status={containsDigitCharacter}/>
                <FeedbackText text="At least a special character" status={containsSpecialCharacter}/>
                <FeedbackText text="Passwords Match" status={passwordsMatch}/>

                <Grid container={true} className={classes.passwordContainer}>
                    <Grid item={true} xs={12} md={8} lg={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            className={classes.textField}
                            fullWidth={true}
                            placeholder="Current Password"
                            type={visibility ? 'text' : 'password'}
                            value={currentPassword}
                            color="secondary"
                            onChange={handleChange}
                            name="currentPassword"
                        />
                        <TextField
                            variant="outlined"
                            margin="dense"
                            className={classes.textField}
                            fullWidth={true}
                            placeholder="New Password"
                            type={visibility ? 'text' : 'password'}
                            value={password}
                            color="secondary"
                            onChange={handleChange}
                            name="password"
                        />
                        <TextField
                            variant="outlined"
                            margin="dense"
                            className={classes.textField}
                            fullWidth={true}
                            placeholder="Confirm Password"
                            type={visibility ? 'text' : 'password'}
                            value={confirmPassword}
                            color="secondary"
                            onChange={handleChange}
                            name="confirmPassword"
                        />
                    </Grid>
                </Grid>

                <Grid container={true} xs={12} md={8} lg={6} alignItems="center">
                    <Grid item={true}>
                        <Checkbox
                            checked={visibility}
                            onChange={() => setVisibility(!visibility)}/>
                    </Grid>
                    <Grid item={true}>
                        <Typography variant="body2">{visibility ? 'Hide Password' : 'Show Password'}</Typography>
                    </Grid>
                </Grid>

                <Grid container={true} xs={12} md={8} lg={6} alignItems="center">
                    <Grid item={true}>
                        <Button
                            fullWidth={true}
                            color="secondary"
                            variant="contained"
                            disableElevation={true}
                            className={classes.button}>
                            Change Password
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ChangePassword;