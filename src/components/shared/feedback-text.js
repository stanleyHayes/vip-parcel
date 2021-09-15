import {Grid, makeStyles, Typography} from "@material-ui/core";
import {Check, Close} from "@material-ui/icons";
import {green, red} from "@material-ui/core/colors";

const FeedbackText = ({status, text}) => {

    const useStyles = makeStyles(theme => {
        return {
            root: {},
            icon: {
                width: 15,
                height: 15,
                marginRight: 16
            },
            hitIcon: {
                color: green["600"]
            },
            hitText: {
                color: green["600"],
                fontWeight: 'bolder'
            },
            missIcon: {
                color: red["600"]
            },
            missText: {
                color: red["600"]
            },
            text: {}
        }
    });

    const classes = useStyles();

    return (
        <Grid container={true} alignItems="center" spacing={1}>
            <Grid item={true}>
                {status ?
                    <Check
                        className={`${classes.icon} ${classes.hitIcon}`}/>
                    :
                    <Close
                        className={`${classes.icon} ${classes.missIcon}`}/>
                }

            </Grid>
            <Grid item={true}>
                <Typography
                    variant="body2"
                    className={`${classes.text} ${status ? classes.hitText : classes.missText}`}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default FeedbackText;