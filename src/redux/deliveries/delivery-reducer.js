const INITIAL_STATE = {
    deliveries: []
};

const deliveriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectDeliveries = state => state.deliveries


export default deliveriesReducer;