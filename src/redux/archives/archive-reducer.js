import {archives} from "./archives.data";

const INITIAL_STATE = {
    archives: [...archives],
    archiveLoading: false,
    archiveError: ""
};

const archiveReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const selectArchives = state => state.archives


export default archiveReducer;