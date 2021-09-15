import {Button, Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const DeleteAccount = () => {


    const useStyles = makeStyles(theme => {
        return {
            title: {
                fontWeight: 'bolder',
                marginBottom: 16
            },
            instruction: {
                fontWeight: 'bold',
                marginBottom: 8
            },
            textField: {},
            passwordContainer: {
                marginTop: 32
            },
            button: {
                paddingTop: 8,
                paddingBottom: 8,
                marginTop: 64,
            },
            info: {
                marginBottom: 64
            }
        }
    });

    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Typography
                    gutterBottom={true}
                    variant="h6"
                    className={classes.title}>
                    Delete Account
                </Typography>

                <Typography gutterBottom={true} variant="body2" className={classes.instruction}>
                    Are you sure you want to delete your account?
                </Typography>

                <Typography className={classes.info} gutterBottom={true} variant="body2" color="textSecondary">
                    By deleting your account, all your data will be removed from the database
                </Typography>

                <Button color="secondary" variant="contained" disableElevation={true} className={classes.button}>
                    Delete Account
                </Button>
            </CardContent>
        </Card>
    )
}

export default DeleteAccount;