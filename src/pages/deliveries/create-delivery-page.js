import React from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Container, Typography} from "@material-ui/core";

const CreateDeliveryPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingBottom: 64
            },
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h2" align="center">Create Delivery</Typography>
            </Container>
        </Layout>
    )
}

export default CreateDeliveryPage;