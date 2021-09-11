import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Button, Container, Divider, Grid, TextField, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import CreateParcelDialog from "../../components/dialogs/parcels/create-parcel-dialog";

const ParcelsPage = () => {
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
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} sm={12} md={4}>
                        <Typography variant="h4" color="textPrimary">Parcels</Typography>
                    </Grid>
                    <Grid item={true} sm={12} md={4}>
                        <TextField
                            fullWidth={true}
                            className={classes.textField}
                            placeholder="Search..."
                            margin="dense"
                            variant="outlined"
                            name="search Parcels"
                        />
                    </Grid>
                    <Grid item={true} sm={12} md={4} container={true} justifyContent="flex-end" alignItems="center">
                        <Button
                            onClick={() => setOpenDialog(true)}
                            color="secondary"
                            className={classes.addButton}
                            endIcon={<Add/>}
                            variant="contained">
                            Create Parcel
                        </Button>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider} light={true}/>


            </Container>

            {
                openDialog &&
                <CreateParcelDialog
                    open={openDialog}
                    handleClose={() => setOpenDialog(false)}
                />
            }
        </Layout>
    )
}

export default ParcelsPage;