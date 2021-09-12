const VIP_PARCEL_TOKEN_KEY = 'VIP_PARCEL_TOKEN_KEY';
let VIP_PARCEL_SERVER_URL = 'http://localhost:8001/api/v1';
if(process.env.NODE_ENV === 'production'){
    VIP_PARCEL_SERVER_URL = 'http://localhost:8001/api/v1';
}
export const CONSTANTS = {VIP_PARCEL_TOKEN_KEY, VIP_PARCEL_SERVER_URL};