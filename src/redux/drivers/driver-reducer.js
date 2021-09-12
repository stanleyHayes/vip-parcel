const INITIAL_STATE = {
    drivers: []
};

const driverReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectDrivers = state => state.drivers


export default driverReducer;