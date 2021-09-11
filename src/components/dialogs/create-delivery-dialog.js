import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogContent,
    Divider,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const CreateDeliveryDialog = ({open, handleClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            title: {},
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            textField: {}
        }
    });

    const classes = useStyles();

    const [delivery, setDelivery] = useState({
        currency: "GHS",
        paymentMethod: "CASH",
        sourceOffice: " ",
        destinationOffice: " ",
        parcel: " ",
    });
    const [error, setError] = useState({});
    const {
        senderName,
        senderPhone,
        recipientName,
        recipientPhone,
        sourceOffice,
        destinationOffice,
        parcel,
        price,
        currency,
        information,
        paymentMethod,
        paymentReference
    } = delivery;

    const handleDeliveryChange = event => {
        setDelivery({...delivery, [event.target.name]: event.target.value});
    }

    const handleDeliverySubmit = event => {
        event.preventDefault();

        if (!senderName) {
            setError({error, senderName: "Sender name field required"});
            return;
        } else {
            setError({error, senderName: null});
        }

        if (!senderPhone) {
            setError({error, senderPhone: "Send phone field required"});
            return;
        } else {
            setError({error, senderPhone: null});
        }

        if (!recipientName) {
            setError({error, recipientName: "Item currency field required"});
            return;
        } else {
            setError({error, recipientName: null});
        }

        if (!recipientPhone) {
            setError({error, recipientPhone: "Recipient phone field required"});
            return;
        } else {
            setError({error, recipientPhone: null});
        }

        if (!information) {
            setError({error, information: "Information field required"});
            return;
        } else {
            setError({error, information: null});
        }

        if (!paymentMethod) {
            setError({error, paymentMethod: "Payment method field required"});
            return;
        } else {
            setError({error, paymentMethod: null});
        }

        if (paymentMethod === 'MOBILE_MONEY' && !paymentReference) {
            setError({error, paymentReference: "Payment reference field required"});
            return;
        } else {
            setError({error, paymentReference: null});
        }

        console.log(delivery);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Typography variant="h6" align="center">
                    Create Delivery
                </Typography>

                <Divider variant="fullWidth" light={true} className={classes.divider}/>

                <TextField
                    fullWidth={true}
                    value={senderName}
                    className={classes.textField}
                    placeholder="Enter sender name"
                    label="Sender Name"
                    margin="dense"
                    color="secondary"
                    variant="outlined"
                    name="senderName"
                    onChange={handleDeliveryChange}
                    type="text"
                    error={error.senderName}
                    helperText={error.senderName}
                />

                <TextField
                    fullWidth={true}
                    value={senderPhone}
                    className={classes.textField}
                    placeholder="Enter sender phone"
                    label="Sender Phone Number"
                    margin="dense"
                    color="secondary"
                    variant="outlined"
                    name="senderPhone"
                    onChange={handleDeliveryChange}
                    type="text"
                    error={error.senderPhone}
                    helperText={error.senderPhone}
                />

                <TextField
                    fullWidth={true}
                    value={recipientName}
                    className={classes.textField}
                    placeholder="Enter recipient name"
                    label="Recipient Name"
                    margin="dense"
                    color="secondary"
                    variant="outlined"
                    name="recipientName"
                    onChange={handleDeliveryChange}
                    type="text"
                    error={error.recipientName}
                    helperText={error.recipientName}
                />

                <TextField
                    fullWidth={true}
                    value={recipientPhone}
                    className={classes.textField}
                    placeholder="Enter recipient phone"
                    label="Recipient Phone Number"
                    margin="dense"
                    color="secondary"
                    variant="outlined"
                    name="senderPhone"
                    onChange={handleDeliveryChange}
                    type="text"
                    error={error.senderPhone}
                    helperText={error.senderPhone}
                />

                <Select
                    color="secondary"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    label="Parcel"
                    onChange={handleDeliveryChange}
                    value={parcel}
                    name="parcel">
                    <MenuItem value=" ">Select Parcel</MenuItem>
                    <MenuItem value="GHS">GHS</MenuItem>
                    <MenuItem value="USD">USD</MenuItem>
                </Select>

                <Select
                    color="secondary"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    label="Source Office"
                    value={sourceOffice}
                    onChange={handleDeliveryChange}
                    name="sourceOffice">
                    <MenuItem value=" ">Select Source Office</MenuItem>
                    <MenuItem value="GHS">GHS</MenuItem>
                    <MenuItem value="USD">USD</MenuItem>
                </Select>


                <Select
                    color="secondary"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    defaultValue=" "
                    label="Destination Office"
                    value={destinationOffice}
                    onChange={handleDeliveryChange}
                    name="destinationOffice">
                    <MenuItem value=" ">Select Destination Office</MenuItem>
                    <MenuItem value="GHS">GHS</MenuItem>
                    <MenuItem value="USD">USD</MenuItem>
                </Select>


                <Grid container={true} alignItems="center" justifyContent="space-between">
                    <Grid item={true} xs={12}>
                        <TextField
                            fullWidth={true}
                            value={price}
                            className={classes.textField}
                            placeholder="Enter item price"
                            label="Price"
                            margin="dense"
                            color="secondary"
                            variant="outlined"
                            name="price"
                            onChange={handleDeliveryChange}
                            type="number"
                            error={error.item}
                            helperText={error.item}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Select
                            color="secondary"
                            margin="dense"
                            variant="outlined"
                            fullWidth={true}
                            label="Currency"
                            value={currency}
                            name="currency">
                            <MenuItem value="">Select Currency</MenuItem>
                            <MenuItem value="GHS">GHS</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                        </Select>
                    </Grid>
                </Grid>

                <TextField
                    fullWidth={true}
                    value={paymentReference}
                    className={classes.textField}
                    placeholder="Enter payment reference"
                    label="Payment reference"
                    margin="dense"
                    variant="outlined"
                    name="paymentReference"
                    color="secondary"
                    onChange={handleDeliveryChange}
                    type="text"
                    error={error.paymentReference}
                    helperText={error.paymentReference}
                />
                <Select
                    fullWidth={true}
                    margin="dense"
                    variant="outlined"
                    label="Payment Method"
                    value={paymentMethod}
                    name="paymentMethod">
                    <MenuItem value="">Select Payment Type</MenuItem>
                    <MenuItem value="MOBILE_MONEY">Mobile Money</MenuItem>
                    <MenuItem value="CASH">Cash</MenuItem>
                </Select>

                <TextField
                    fullWidth={true}
                    value={information}
                    className={classes.textField}
                    placeholder="Enter delivery information"
                    label="Delivery information"
                    margin="dense"
                    color="secondary"
                    variant="outlined"
                    name="information"
                    onChange={handleDeliveryChange}
                    type="text"
                    multiline={true}
                    rows={8}
                    error={error.information}
                    helperText={error.information}
                />

                <Divider variant="fullWidth" light={true} className={classes.divider}/>


                <Button
                    onClick={handleDeliverySubmit}
                    color="secondary"
                    fullWidth={true}
                    variant="contained"
                    disableElevation={true}
                    className={classes.button}>
                    Create Delivery
                </Button>

            </DialogContent>
        </Dialog>
    )
}

export default CreateDeliveryDialog;