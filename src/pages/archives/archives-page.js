import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Container, Divider, Grid, TextField, Typography} from "@material-ui/core";
import CreateParcelDialog from "../../components/dialogs/parcels/create-parcel-dialog";

const ArchivesPage = () => {
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
                <Grid container={true} alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md={8}>
                        <Typography variant="h4" color="textPrimary">Archives</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={4}>
                        <TextField
                            fullWidth={true}
                            className={classes.textField}
                            placeholder="Search..."
                            margin="dense"
                            variant="outlined"
                            name="search Delivery Archives"
                        />
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

export default ArchivesPage;