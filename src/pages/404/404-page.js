import React from "react";
import {makeStyles} from "@material-ui/styles";
import Layout from "../../components/layout/layout";
import {Container, Typography} from "@material-ui/core";

const NotFoundPage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 64
            },
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h2" align="center">Not Found</Typography>
            </Container>
        </Layout>
    )
}

export default NotFoundPage;