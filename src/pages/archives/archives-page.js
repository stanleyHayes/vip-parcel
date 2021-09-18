import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {
    Container,
    Divider,
    Grid,
    LinearProgress, Paper, Table, TableBody,
    TableCell,
    TableContainer, TableHead, TableRow,
    TextField,
    Typography
} from "@material-ui/core";
import CreateParcelDialog from "../../components/dialogs/parcels/create-parcel-dialog";
import {Alert} from "@material-ui/lab";
import {useSelector} from "react-redux";
import {selectArchives} from "../../redux/archives/archive-reducer";
import {Edit, Visibility} from "@material-ui/icons";

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
            },
            image: {},
            icon: {width: 20, height: 20}
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
                            placeholder="Search Delivery Archives"
                            margin="dense"
                            color="secondary"
                            name="search"
                            variant="outlined"
                            label="Search"
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
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">#</TableCell>
                                    <TableCell align="center">Sender</TableCell>
                                    <TableCell align="center">Recipient</TableCell>
                                    <TableCell align="center">Parcel</TableCell>
                                    <TableCell align="center">Value</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Tracking</TableCell>
                                    <TableCell align="center">Reg. No</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {archives.map((archive, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">{index + 1}</TableCell>
                                            <TableCell
                                                align="center">{`${archive.sender.name} (${archive.sender.phone})`}</TableCell>
                                            <TableCell
                                                align="center">{`${archive.recipient.name} (${archive.recipient.phone})`}</TableCell>
                                           <TableCell align="center">{archive.parcel.item}</TableCell>
                                            <TableCell
                                                align="center">{archive.value.currency} {parseFloat(archive.value.amount).toFixed(2)}</TableCell>
                                            <TableCell align="center">{archive.status}</TableCell>
                                            <TableCell align="center">{archive.tracking}</TableCell>
                                            <TableCell align="center">{archive.bus.number}</TableCell>
                                            <TableCell align="center">
                                                <Grid container={true} alignItems="center"
                                                      justifyContent="space-evenly">
                                                    <Grid item={true}><Visibility className={classes.icon}
                                                                                  color="secondary"/></Grid>
                                                    <Grid item={true}><Edit className={classes.icon} color="secondary"/></Grid>
                                                </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
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
