import USER_ACTION_TYPES from "./user.types";

const initialState = {
    currentUser: null,
    error: null
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case USER_ACTION_TYPES.SIGNIN_SUCCESS: {
                return {
                    ...state,
                    currentUser: action.payload,
                    error: null
                }
            }
        case USER_ACTION_TYPES.SIGNIN_FAIL: {
                return {
                    ...state,
                    error: action.payload
                }
            }

        default: return state;
    }
}

export default userReducer;