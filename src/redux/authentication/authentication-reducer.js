const INITIAL_STATE = {
    authLoading: false,
    authError: "",
    userData: {
        name: "Stanley Hayford",
        birthDate: "Hello World",
        email: "hayfordstanley@gmail.com",
        phone: "+233270048319",
        image: "/images/image.jpg",
        emergencyContact: "+200555180048",
        gender: "Male",
        bloodGroup: "AB+",
        identityCard: {
            number: "G1944577",
            type: "Passport"
        },
        maritalStatus: "Forever Single",
        address: {
            country: "Ghana",
            city: "Accra",
            region: "Greater Accra",
            suburb: "Ashomang",
            street: "Cosway Street",
            ghanaPostAddress: "GE-161-3326",
            houseNumber: "Atakorah Estate 2"
        },
        office: {

        }
    }
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export const selectAuth = state => state.authentication;

export default authenticationReducer;