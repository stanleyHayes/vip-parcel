import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogContent,
    Divider,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const CreateParcelDialog = ({open, handleClose}) => {

    const useStyles = makeStyles(theme => {
        return {
            title: {},
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            textField: {
                marginTop: 8,
                marginBottom: 8
            }
        }
    });

    const classes = useStyles();

    const [parcel, setParcel] = useState({currency: "GHS", weightUnit: "KG"});
    const [error, setError] = useState({});
    const {item, weight, weightUnit, price, currency, description} = parcel;

    const handleParcelChange = event => {
        setParcel({...parcel, [event.target.name]: event.target.value});
    }

    const handleParcelSubmit = event => {
        event.preventDefault();

        if (!item) {
            setError({error, item: "Item name field required"});
            return;
        } else {
            setError({error, item: null});
        }

        if (!price) {
            setError({error, price: "Item price field required"});
            return;
        } else {
            setError({error, price: null});
        }

        if (!currency) {
            setError({error, currency: "Item currency field required"});
            return;
        } else {
            setError({error, currency: null});
        }

        if (!weight) {
            setError({error, weight: "Item weight field required"});
            return;
        } else {
            setError({error, weight: null});
        }

        if (!weightUnit) {
            setError({error, weightUnit: "Item weight field required"});
            return;
        } else {
            setError({error, weightUnit: null});
        }

        if (!description) {
            setError({error, description: "Item description field required"});
            return;
        } else {
            setError({error, description: null});
        }

        console.log(parcel);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <Typography variant="h6" align="center">
                    Create Parcel
                </Typography>

                <Divider variant="fullWidth" light={true} className={classes.divider}/>

                <TextField
                    fullWidth={true}
                    value={item}
                    className={classes.textField}
                    placeholder="Enter item name"
                    label="Item name"
                    margin="dense"
                    color="secondary"
                    variant="outlined"
                    name="search"
                    onChange={handleParcelChange}
                    type="text"
                    error={error.item}
                    helperText={error.item}
                />

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
                    onChange={handleParcelChange}
                    type="number"
                    error={error.item}
                    helperText={error.item}
                />

                <Select
                    color="secondary"
                    margin="dense"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth={true}
                    label="Weight Unit"
                    value={currency}
                    name="currency">
                    <MenuItem value="">Select Currency</MenuItem>
                    <MenuItem value="GHS">GHS</MenuItem>
                    <MenuItem value="USD">USD</MenuItem>
                </Select>

                <TextField
                    fullWidth={true}
                    value={weight}
                    className={classes.textField}
                    placeholder="Enter item weight"
                    label="Item weight"
                    margin="dense"
                    variant="outlined"
                    name="weight"
                    color="secondary"
                    onChange={handleParcelChange}
                    type="number"
                    error={error.weight}
                    helperText={error.weight}
                />

                <Select
                    fullWidth={true}
                    margin="dense"
                    className={classes.textField}
                    variant="outlined"
                    label="Weight Unit"
                    value={weightUnit}
                    name="weightUnit">
                    <MenuItem value="">Select Unit</MenuItem>
                    <MenuItem value="KG">Kilograms</MenuItem>
                    <MenuItem value="g">Grams</MenuItem>
                </Select>

                <TextField
                    fullWidth={true}
                    value={description}
                    className={classes.textField}
                    placeholder="Enter item description"
                    label="Item description"
                    margin="dense"
                    color="secondary"
                    variant="outlined"
                    name="description"
                    onChange={handleParcelChange}
                    type="text"
                    multiline={true}
                    rows={8}
                    error={error.description}
                    helperText={error.description}
                />

                <Divider variant="fullWidth" light={true} className={classes.divider}/>


                <Button
                    onClick={handleParcelSubmit}
                    color="secondary"
                    fullWidth={true}
                    variant="contained"
                    disableElevation={true}
                    className={classes.button}>
                    Create Parcel
                </Button>

            </DialogContent>
        </Dialog>
    )
}

export default CreateParcelDialog;