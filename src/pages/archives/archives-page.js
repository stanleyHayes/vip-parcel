import React from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Container, Divider, Grid, TextField, Typography} from "@material-ui/core";

const ArchivesPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {},
            addButton: {},
            divider: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} sm={12} md={4}>
                        <Typography variant="h4" color="textPrimary">Parcels</Typography>
                    </Grid>
                    <Grid item={true} sm={12} md={6}>
                        <TextField
                            fullWidth={true}
                            className={classes.textField}
                            placeholder="Search Archived Deliveries..."
                            margin="dense"
                            variant="outlined"
                            name="search"
                        />
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider} light={true}/>


            </Container>
        </Layout>
    )
}

export default ArchivesPage;