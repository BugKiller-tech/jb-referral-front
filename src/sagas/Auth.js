import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
// import {
//     auth,
//     facebookAuthProvider,
//     githubAuthProvider,
//     googleAuthProvider,
//     twitterAuthProvider
// } from 'firebase/firebase';
import Api from '../api';

import {
    // SIGNIN_FACEBOOK_USER,
    // SIGNIN_GITHUB_USER,
    // SIGNIN_GOOGLE_USER,
    // SIGNIN_TWITTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER,
    GET_ACCOUNT_INFO,
    GET_ACCOUNT_INFO_SUCCESS,
} from 'constants/ActionTypes';
import {
    showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess,
    getAccountInfoSuccess
} from 'actions/Auth';


const createUserWithEmailPasswordRequest = async (firstName, lastName, email, password, userType) =>
    await  Api.createUserAccount({ firstName, lastName, email, password, userType })
        .then(response => ({ response }))
        .catch(error => ({ error }))

const signInUserWithEmailPasswordRequest = async (email, password) =>
    await  Api.signInWithEmailAndPassword({ email, password })
        .then(response => ({ response }))
        .catch(error => ({ error }));

const signOutRequest = async () =>
    await  Api.signOut()
        .then(authUser => authUser)
        .catch(error => error);
const getAccountInfoRequest = async () =>
    await Api.getAccountInfo()
        .then(res => res.data)
        .catch(error => { throw error.response.data.errors })

function* createUserWithEmailPassword({payload}) {
    console.log('create user saga payload', payload);
    const {firstName, lastName, email, password, userType} = payload;
    const { response, error } = yield call(createUserWithEmailPasswordRequest, firstName, lastName, email, password, userType);
    if (response) {
        yield put(showAuthMessage('Successfully created the account! Please verify the email!'));
    } else {
        // localStorage.setItem('user', signUpUser._id);
        // yield put(userSignUpSuccess(signUpUser));
        // console.log('error', error);
        yield put(showAuthMessage(error.response.data.errors));
    }
}
function* signInUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    const {response, error} = yield call(signInUserWithEmailPasswordRequest, email, password);
    if (response) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        yield put(userSignInSuccess(response.data.user));
    } else {
        console.log('SIGNIN', error);
        yield put(showAuthMessage(error.response.data.errors));
    }
}

function* getAccountInfoSaga({payload}) {
    try {
        const user = yield call(getAccountInfoRequest);
        console.log('get account info', user);
    } catch (error) {
        console.log('SIGNIN', error);
        yield put(showAuthMessage(error));
    }
}

function* signOut() {
    try {
        const signOutUser = yield call(signOutRequest);
        console.log('trying signout')
        if (signInUser.message) {
            yield put(showAuthMessage(signInUser.message));
        } else {
            localStorage.removeItem('user');
            yield put(userSignOutSuccess(signInUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

export function* createUserAccount() {
    console.log('saga function * for signup');
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

// export function* signInWithGoogle() {
//     yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
// }

// export function* signInWithFacebook() {
//     yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
// }

// export function* signInWithTwitter() {
//     yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
// }

// export function* signInWithGithub() {
//     yield takeEvery(SIGNIN_GITHUB_USER, signInUserWithGithub);
// }

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}
export function* getAccountInfo() {
    yield takeEvery(GET_ACCOUNT_INFO, getAccountInfoSaga)
}

export default function* rootSaga() {
    yield all([
        fork(signInUser),
        fork(createUserAccount),
        // fork(signInWithGoogle),
        // fork(signInWithFacebook),
        // fork(signInWithTwitter),
        // fork(signInWithGithub),
        fork(signOutUser),
        fork(getAccountInfo),
    ]);
}