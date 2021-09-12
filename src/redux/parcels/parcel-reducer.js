const INITIAL_STATE = {
    parcels: [],
    parcelLoading: false,
    parcelError: ""
};

const parcelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectParcels = state => state.parcels


export default parcelReducer;