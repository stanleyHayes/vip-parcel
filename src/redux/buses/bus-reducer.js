const INITIAL_STATE = {
    buses: []
};

const busesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectBuses = state => state.buses


export default busesReducer;