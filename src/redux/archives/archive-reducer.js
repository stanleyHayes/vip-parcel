const INITIAL_STATE = {
    archives: [],
    archiveLoading: true,
    archiveError: "Permission Denied"
};

const archiveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectArchives = state => state.archives


export default archiveReducer;