const { UserActionTypes } = require("./user.type");

const INITIAL_STATE = {
    currentUser: null,
    linkData: null,
}


const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.GET_LINK_DATA:
            return {
                ...state,
                linkData: action.payload
            }
        default:
            return state;
    }
};

export default UserReducer;
