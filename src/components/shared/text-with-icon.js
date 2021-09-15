import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const TextWithIcon = ({icon, text}) => {
    const useStyles = makeStyles(theme => {
        return {
            textContainer: {
                marginLeft: 8
            }
        }
    });

    const classes = useStyles();

    return (
        <Grid container={true} alignItems="center">
            <Grid item={true}>
                {icon}
            </Grid>
            <Grid item={true} className={classes.textContainer}>
                <Typography variant="body2" color="textSecondary">{text}</Typography>
            </Grid>
        </Grid>
    )
}

export default TextWithIcon;