import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {
    Button,
    Container,
    Divider,
    Grid,
    LinearProgress,
    TableContainer,
    TextField,
    Typography
} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import CreateDeliveryDialog from "../../components/dialogs/deliveries/create-delivery-dialog";
import {useSelector} from "react-redux";
import {selectDeliveries} from "../../redux/deliveries/delivery-reducer";
import {Alert} from "@material-ui/lab";

const DeliveriesPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 82
            },
            loadingContainer: {
                paddingTop: 12
            },
            emptyText: {
                textTransform: 'uppercase'
            },
            loading: {
                marginTop: 57,
                [theme.breakpoints.up('md')]: {
                    marginTop: 64
                }
            },
            addButton: {},
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            errorText: {
                textTransform: 'uppercase'
            }
        }
    });

    const classes = useStyles();

    const [openDialog, setOpenDialog] = useState(false);

    const {deliveries, deliveryError, deliveryLoading} = useSelector(selectDeliveries);

    return (
        <Layout>
            {deliveryLoading && <LinearProgress className={classes.loading} variant="query" color="secondary"/>}
            <Container className={deliveryLoading ? classes.loadingContainer : classes.container}>
                <Grid container={true} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md={4}>
                        <Typography variant="h4" color="textPrimary">Deliveries</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={4}>
                        <TextField
                            fullWidth={true}
                            className={classes.textField}
                            placeholder="Search Deliveries..."
                            margin="dense"
                            variant="outlined"
                            name="search"
                            type="text"
                        />
                    </Grid>

                    <Grid item={true} xs={12} md={4} container={true} justifyContent="flex-end" alignItems="center">
                        <Button
                            fullWidth={true}
                            onClick={() => setOpenDialog(true)}
                            color="secondary"
                            className={classes.addButton}
                            endIcon={<Add/>}
                            variant="contained">
                            Create Delivery
                        </Button>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider} light={true}/>

                {deliveryError &&
                <Alert className={classes.errorText} severity="error" variant="standard">{deliveryError}</Alert>}

                {deliveries.length === 0 ? (
                    <React.Fragment>
                        <Typography color="textSecondary" variant="h6" className={classes.emptyText}>No deliveries
                            available</Typography>
                    </React.Fragment>
                ) : (
                    <TableContainer>

                    </TableContainer>
                )}
            </Container>

            {
                openDialog &&
                <CreateDeliveryDialog
                    open={openDialog}
                    handleClose={() => setOpenDialog(false)}
                />
            }
        </Layout>
    )
}

export default DeliveriesPage;