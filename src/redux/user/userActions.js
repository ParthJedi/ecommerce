import USER_ACTION_TYPES from "./user.types";

export const setCurrentUser = user =>  ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user
})

export const googleSigninStart = () => ({
    type: USER_ACTION_TYPES.GOOGLE_SIGNIN_START
});

export const emailSigninStart = (emailAndPassword) => ({
    type: USER_ACTION_TYPES.EMAIL_SIGNIN_START,
    payload: emailAndPassword   
});

export const SigninSuccess = (user) => ({
    type: USER_ACTION_TYPES.SIGNIN_SUCCESS,
    payload: user
});

export const SigninFail = (error) => ({
    type: USER_ACTION_TYPES.SIGNIN_FAIL,
    payload: error
});

export const checkUserSession = () => ({
    type: USER_ACTION_TYPES.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: USER_ACTION_TYPES.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
})

export const signOutFail = (error) => ({
    type: USER_ACTION_TYPES.SIGN_OUT_FAIL,
    payload: error
})