import { USER_SIGN_IN, USER_SIGN_IN_FAIL, USER_SIGN_IN_SUCCESS,
    USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants';


function userSigninReducer(state={}, action) {
    switch (action.type) {
        case USER_SIGN_IN:
            return {loading: true};
        case USER_SIGN_IN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_SIGN_IN_FAIL:
            return {loading: false, userInfo: action.payload};

        default:
            return state;
    }
}

function userRegisterReducer(state={}, action) {
    switch (action.type) {
        case USER_REGISTER:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, userInfo: action.payload};

        default:
            return state;
    }
}

export {
    userSigninReducer,
    userRegisterReducer
}