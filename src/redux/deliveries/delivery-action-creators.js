import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

import {PARCEL_ACTION_TYPES} from "./parcel-action-types";

const getParcelsRequest = () => {
    return {
        type: PARCEL_ACTION_TYPES.GET_PARCELS_REQUEST
    }
}

const getParcelsSuccess = (parcels, totalParcels) => {
    return {
        type: PARCEL_ACTION_TYPES.GET_PARCELS_SUCCESS,
        payload: {parcels, totalParcels}
    }
}

const getParcelsFailure = error => {
    return {
        type: PARCEL_ACTION_TYPES.GET_PARCELS_FAILURE,
        payload: error
    }
}

export const getParcels = (token, query, showNotifications) => {
    return dispatch => {
        dispatch(getParcelsRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/parcels?${query}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message, totalParcels} = response.data;
            dispatch(getParcelsSuccess(data, totalParcels));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getParcelsFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const createParcelRequest = () => {
    return {
        type: PARCEL_ACTION_TYPES.CREATE_PARCEL_REQUEST
    }
}

const createParcelSuccess = (parcel) => {
    return {
        type: PARCEL_ACTION_TYPES.CREATE_PARCEL_SUCCESS,
        payload: parcel
    }
}

const createParcelFailure = error => {
    return {
        type: PARCEL_ACTION_TYPES.CREATE_PARCEL_FAILURE,
        payload: error
    }
}

export const createParcels = (token, parcel, showNotifications) => {
    return dispatch => {
        dispatch(createParcelRequest());
        axios({
            method: 'POST',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/parcels`,
            headers: {Authorization: `Bearer ${token}`},
            data: parcel
        }).then(response => {
            const {data, message} = response.data;
            dispatch(createParcelSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(createParcelFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const updateParcelRequest = () => {
    return {
        type: PARCEL_ACTION_TYPES.UPDATE_PARCEL_REQUEST
    }
}

const updateParcelSuccess = (parcel) => {
    return {
        type: PARCEL_ACTION_TYPES.UPDATE_PARCEL_SUCCESS,
        payload: parcel
    }
}

const updateParcelFailure = error => {
    return {
        type: PARCEL_ACTION_TYPES.UPDATE_PARCEL_FAILURE,
        payload: error
    }
}

export const updateParcels = (token, parcelID, parcel, showNotifications) => {
    return dispatch => {
        dispatch(updateParcelRequest());
        axios({
            method: 'PUT',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/parcels/${parcelID}`,
            headers: {Authorization: `Bearer ${token}`},
            data: parcel
        }).then(response => {
            const {data, message} = response.data;
            dispatch(updateParcelSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(updateParcelFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const getParcelRequest = () => {
    return {
        type: PARCEL_ACTION_TYPES.GET_PARCEL_REQUEST
    }
}

const getParcelSuccess = (parcels) => {
    return {
        type: PARCEL_ACTION_TYPES.GET_PARCEL_SUCCESS,
        payload: parcels
    }
}

const getParcelFailure = error => {
    return {
        type: PARCEL_ACTION_TYPES.GET_PARCEL_FAILURE,
        payload: error
    }
}

export const getParcel = (token, parcelID, showNotifications) => {
    return dispatch => {
        dispatch(getParcelRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/parcels/${parcelID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message} = response.data;
            dispatch(getParcelSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getParcelFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const deleteParcelRequest = () => {
    return {
        type: PARCEL_ACTION_TYPES.DELETE_PARCEL_REQUEST
    }
}

const deleteParcelSuccess = (parcel) => {
    return {
        type: PARCEL_ACTION_TYPES.DELETE_PARCEL_SUCCESS,
        payload: parcel
    }
}

const deleteParcelFailure = error => {
    return {
        type: PARCEL_ACTION_TYPES.DELETE_PARCEL_FAILURE,
        payload: error
    }
}

export const deleteParcel = (token, parcelID, showNotifications) => {
    return dispatch => {
        dispatch(deleteParcelRequest());
        axios({
            method: 'DELETE',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/parcels/${parcelID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message} = response.data;
            dispatch(deleteParcelSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(deleteParcelFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}