import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Button, Container, Divider, Grid, TextField, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import CreateDeliveryDialog from "../../components/dialogs/deliveries/create-delivery-dialog";

const DeliveriesPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 84
            },
            addButton: {},
            divider: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const classes = useStyles();

    const [openDialog, setOpenDialog] = useState(false);

    return (
        <Layout>
            <Container className={classes.container}>
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