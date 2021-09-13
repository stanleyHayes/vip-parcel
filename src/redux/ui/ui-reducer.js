import {UI} from './ui-action-types';
import {CONSTANTS} from "../../constants/constants";

const INITIAL_STATE = {
    variant: localStorage.getItem(CONSTANTS.GOFER_OFFICER_THEME_KEY) ? JSON.parse(localStorage.getItem(CONSTANTS.GOFER_OFFICER_THEME_KEY)) : 'dark'
};

const uiReducer = (state = INITIAL_STATE, action) => {

    if(action.type === UI.TOGGLE_THEME){
        localStorage.setItem(CONSTANTS.GOFER_OFFICER_THEME_KEY, JSON.stringify(state.variant === 'dark' ? 'light' : 'dark'));
    }

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