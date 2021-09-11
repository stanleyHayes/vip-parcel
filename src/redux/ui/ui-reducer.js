import {UI} from './ui-action-types';
import {CONSTANTS} from "../../constants/constants";

const INITIAL_STATE = {
    variant: localStorage.getItem(CONSTANTS.VIP_PARCEL_TOKEN_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.VIP_PARCEL_TOKEN_KEY)) : 'dark'
};

const uiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UI.TOGGLE_THEME:
            return {
                ...state,
                variant: state.variant === 'dark' ? 'light' : 'dark'
            }
        default:
            return state
    }
}

export const selectUI = state => state.ui


export default uiReducer;