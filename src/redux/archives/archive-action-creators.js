import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

import {ARCHIVE_ACTION_TYPES} from "./archive-action-types";

const getArchivesRequest = () => {
    return {
        type: ARCHIVE_ACTION_TYPES.GET_ARCHIVES_REQUEST
    }
}

const getArchivesSuccess = (archives, totalArchives) => {
    return {
        type: ARCHIVE_ACTION_TYPES.GET_ARCHIVES_SUCCESS,
        payload: {archives, totalArchives}
    }
}

const getArchivesFailure = error => {
    return {
        type: ARCHIVE_ACTION_TYPES.GET_ARCHIVES_FAILURE,
        payload: error
    }
}

export const getArchives = (token, query, showNotifications) => {
    return dispatch => {
        dispatch(getArchivesRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/deliveries?${query}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message, totalDeliveries} = response.data;
            dispatch(getArchivesSuccess(data, totalDeliveries));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getArchivesFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const getArchiveRequest = () => {
    return {
        type: ARCHIVE_ACTION_TYPES.GET_PARCEL_REQUEST
    }
}

const getArchiveSuccess = (parcels) => {
    return {
        type: ARCHIVE_ACTION_TYPES.GET_PARCEL_SUCCESS,
        payload: parcels
    }
}

const getArchiveFailure = error => {
    return {
        type: ARCHIVE_ACTION_TYPES.GET_PARCEL_FAILURE,
        payload: error
    }
}

export const getArchive = (token, deliveryID, showNotifications) => {
    return dispatch => {
        dispatch(getArchiveRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/deliveries/${deliveryID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message} = response.data;
            dispatch(getArchiveSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getArchiveFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}
