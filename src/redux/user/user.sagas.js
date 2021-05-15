import { takeLatest, put, all, call } from 'redux-saga/effects';
import USER_ACTION_TYPES from './user.types';
import { SigninSuccess, SigninFail} from './userActions';
import { auth, getCurrentUser, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils'

// worker sagas
export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(SigninSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));    
    } catch (error) {
        console.log(error);
    }
}

export function* isUserAuthenticated() {
 try {
     const userAuth = yield getCurrentUser();
     if(!userAuth) return null;
     yield getSnapshotFromUserAuth(userAuth);
 } catch (error) {
     yield put(SigninFail(error));
 }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapshotFromUserAuth, user);
    } catch(error) {
        yield put(SigninFail(error));
    }
}

export function* signInWithEmail({payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(SigninFail(error));
    }
}


// watcher sagas
export function* onGoogleSigninStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* onEmailSigninStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
        call(onCheckUserSession)
    ]);
}