import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

import {OFFICE_ACTION_TYPES} from "./office-action-types";

const getOfficesRequest = () => {
    return {
        type: OFFICE_ACTION_TYPES.GET_OFFICES_REQUEST
    }
}

const getOfficesSuccess = (offices, totalOffices) => {
    return {
        type: OFFICE_ACTION_TYPES.GET_OFFICES_SUCCESS,
        payload: {offices, totalOffices}
    }
}

const getOfficesFailure = error => {
    return {
        type: OFFICE_ACTION_TYPES.GET_OFFICES_FAILURE,
        payload: error
    }
}

export const getOffices = (token, query, showNotifications) => {
    return dispatch => {
        dispatch(getOfficesRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/offices?${query}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message, totalParcels} = response.data;
            dispatch(getOfficesSuccess(data, totalParcels));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getOfficesFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}


const getOfficeRequest = () => {
    return {
        type: OFFICE_ACTION_TYPES.GET_OFFICE_REQUEST
    }
}

const getOfficeSuccess = (office) => {
    return {
        type: OFFICE_ACTION_TYPES.GET_OFFICE_SUCCESS,
        payload: office
    }
}

const getOfficeFailure = error => {
    return {
        type: OFFICE_ACTION_TYPES.GET_OFFICE_FAILURE,
        payload: error
    }
}

export const getOffice = (token, officeID, showNotifications) => {
    return dispatch => {
        dispatch(getOfficeRequest());
        axios({
            method: 'GET',
            url: `${CONSTANTS.VIP_PARCEL_SERVER_URL}/offices/${officeID}`,
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            const {data, message} = response.data;
            dispatch(getOfficeSuccess(data));
            showNotifications(message, {variant: 'success'});
        }).catch(error => {
            dispatch(getOfficeFailure(error.response.data.message));
            showNotifications(error.response.data.message, {variant: 'error'});
        });
    }
}
