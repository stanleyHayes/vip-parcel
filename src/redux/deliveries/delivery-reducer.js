import {deliveries} from "./deliveries.data";

const INITIAL_STATE = {
    deliveries: [...deliveries],
    deliveryLoading: false,
    deliveryError: ""
};

const deliveriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectDeliveries = state => state.deliveries


export default deliveriesReducer;