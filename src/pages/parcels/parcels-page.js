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
import CreateParcelDialog from "../../components/dialogs/parcels/create-parcel-dialog";
import {useSelector} from "react-redux";
import {selectParcels} from "../../redux/parcels/parcel-reducer";
import {Alert} from "@material-ui/lab";

const ParcelsPage = () => {
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
    const {parcelLoading, parcelError, parcels} = useSelector(selectParcels);

    return (
        <Layout>
            {parcelLoading && <LinearProgress className={classes.loading} variant="query" color="secondary"/>}
            <Container className={parcelLoading ? classes.loadingContainer : classes.container}>
                <Grid container={true} alignItems="center" spacing={2}>
                    <Grid item={true} xs={12} md={4}>
                        <Typography variant="h4" color="textPrimary">Parcels</Typography>
                    </Grid>
                    <Grid item={true} xs={12} md={4}>
                        <TextField
                            fullWidth={true}
                            className={classes.textField}
                            placeholder="Search..."
                            margin="dense"
                            variant="outlined"
                            name="search Parcels"
                        />
                    </Grid>
                    <Grid item={true} xs={12} md={4} container={true} justifyContent="flex-end" alignItems="center">
                        <Button
                            onClick={() => setOpenDialog(true)}
                            color="secondary"
                            fullWidth={true}
                            className={classes.addButton}
                            endIcon={<Add/>}
                            variant="contained">
                            Create Parcel
                        </Button>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider} light={true}/>

                {parcelError && <Alert className={classes.errorText} severity="error" variant="standard">{parcelError}</Alert>}

                {parcels.length === 0 ? (
                    <React.Fragment>
                        <Typography color="textSecondary" variant="h6" className={classes.emptyText}>
                            No parcels available
                        </Typography>
                    </React.Fragment>
                ) : (
                    <TableContainer>

                    </TableContainer>
                )}

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