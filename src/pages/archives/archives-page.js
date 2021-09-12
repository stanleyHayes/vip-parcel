import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Container, Divider, Grid, LinearProgress, TableContainer, TextField, Typography} from "@material-ui/core";
import CreateParcelDialog from "../../components/dialogs/parcels/create-parcel-dialog";
import {Alert} from "@material-ui/lab";
import {useSelector} from "react-redux";
import {selectArchives} from "../../redux/archives/archive-reducer";

const ArchivesPage = () => {
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

    const {archiveLoading, archiveError, archives} = useSelector(selectArchives);

    return (
        <Layout>
            {archiveLoading && <LinearProgress className={classes.loading} variant="query" color="secondary"/>}
            <Container className={archiveLoading ? classes.loadingContainer : classes.container}>
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

                {archiveError && <Alert className={classes.errorText} severity="error" variant="standard">{archiveError}</Alert>}

                {archives.length === 0 ? (
                    <React.Fragment>
                        <Typography color="textSecondary" variant="h6" className={classes.emptyText}>
                            No delivery archives available
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

export default ArchivesPage;