import {combineReducers} from 'redux';
import uiReducer from "./ui/ui-reducer";
import deliveriesReducer from "./deliveries/delivery-reducer";
import parcelReducer from "./parcels/parcel-reducer";
import archiveReducer from "./archives/archive-reducer";
import authenticationReducer from "./authentication/authentication-reducer";

const rootReducer = combineReducers({
    ui: uiReducer,
    deliveries: deliveriesReducer,
    parcels: parcelReducer,
    archives: archiveReducer,
    authentication: authenticationReducer
});

export default rootReducer;