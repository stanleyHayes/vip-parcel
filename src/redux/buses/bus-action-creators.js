import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

import {BUS_ACTION_TYPES} from "./bus-action-types";

const getBusesRequest = () => {
    return {
        type: BUS_ACTION_TYPES.GET_BUSES_REQUEST
    }
}

const getBusesSuccess = (buses, totalBuses) => {
    return {
        type: BUS_ACTION_TYPES.GET_BUSES_SUCCESS,
        payload: {buses, totalBuses}
    }
}

const getBusesFailure = error => {
    return {
        type: BUS_ACTION_TYPES.GET_BUSES_FAILURE,
        payload: error
    }
}

export const getBuses = (token, query, showNotifications) => {
    return dispatch => {
        dispatch(getBusesRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/buses?${query}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message, totalBuses} = response.data;
            dispatch(getBusesSuccess(data, totalBuses));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getBusesFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const getBusRequest = () => {
    return {
        type: BUS_ACTION_TYPES.GET_BUS_REQUEST
    }
}

const getBusSuccess = (buses) => {
    return {
        type: BUS_ACTION_TYPES.GET_BUS_SUCCESS,
        payload: buses
    }
}

const getBusFailure = error => {
    return {
        type: BUS_ACTION_TYPES.GET_BUS_FAILURE,
        payload: error
    }
}

export const getArchive = (token, busID, showNotifications) => {
    return dispatch => {
        dispatch(getBusRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/buses/${busID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message} = response.data;
            dispatch(getBusSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getBusFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}
