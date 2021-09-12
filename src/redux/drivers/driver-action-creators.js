import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

import {DRIVER_ACTION_TYPES} from "./driver-action-types";

const getDriversRequest = () => {
    return {
        type: DRIVER_ACTION_TYPES.GET_DRIVERS_REQUEST
    }
}

const getDriversSuccess = (drivers, totalDrivers) => {
    return {
        type: DRIVER_ACTION_TYPES.GET_DRIVERS_SUCCESS,
        payload: {drivers, totalDrivers}
    }
}

const getDriversFailure = error => {
    return {
        type: DRIVER_ACTION_TYPES.GET_DRIVERS_FAILURE,
        payload: error
    }
}

export const getDrivers = (token, query, showNotifications) => {
    return dispatch => {
        dispatch(getDriversRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/drivers?${query}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message, totalParcels} = response.data;
            dispatch(getDriversSuccess(data, totalParcels));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getDriversFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const getDriverRequest = () => {
    return {
        type: DRIVER_ACTION_TYPES.GET_DRIVER_REQUEST
    }
}

const getDriverSuccess = (driver) => {
    return {
        type: DRIVER_ACTION_TYPES.GET_DRIVER_SUCCESS,
        payload: driver
    }
}

const getDriverFailure = error => {
    return {
        type: DRIVER_ACTION_TYPES.GET_DRIVER_FAILURE,
        payload: error
    }
}

export const getDriver = (token, driverID, showNotifications) => {
    return dispatch => {
        dispatch(getDriverRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/drivers/${driverID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message} = response.data;
            dispatch(getDriverSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getDriverFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}
