const INITIAL_STATE = {
    parcels: [],
    parcelLoading: true,
    parcelError: "Permission Denied"
};

const parcelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectParcels = state => state.parcels


export default parcelReducer;