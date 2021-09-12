const INITIAL_STATE = {
    parcels: []
};

const parcelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectParcels = state => state.parcels


export default parcelReducer;