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


const createUserWithEmailPasswordRequest = async (firstName, lastName, email, password) =>
    await  Api.createUserWithEmailAndPassword({ first_name: firstName, last_name: lastName, email, password })
        .then(res => res.data)
        .catch(error => error.response.data);

const signInUserWithEmailPasswordRequest = async (email, password) =>
    await  Api.signInWithEmailAndPassword({ email, password })
        .then(res => res.data)
        .catch(error => { throw error.response.data.message });

const signOutRequest = async () =>
    await  Api.signOut()
        .then(authUser => authUser)
        .catch(error => error);
const getAccountInfoRequest = async () =>
    await Api.getAccountInfo()
        .then(res => res.data)
        .catch(error => { throw error.response.data.message })

function* createUserWithEmailPassword({payload}) {
    console.log('create user saga payload', payload);
    const {firstName, lastName, email, password} = payload;
    try {
        const signUpUser = yield call(createUserWithEmailPasswordRequest, firstName, lastName, email, password);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            // localStorage.setItem('user_id', signUpUser._id);
            yield put(userSignUpSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

// const signInUserWithGoogleRequest = async () =>
//     await  auth.signInWithPopup(googleAuthProvider)
//         .then(authUser => authUser)
//         .catch(error => error);

// const signInUserWithFacebookRequest = async () =>
//     await  auth.signInWithPopup(facebookAuthProvider)
//         .then(authUser => authUser)
//         .catch(error => error);

// const signInUserWithGithubRequest = async () =>
//     await  auth.signInWithPopup(githubAuthProvider)
//         .then(authUser => authUser)
//         .catch(error => error);

// const signInUserWithTwitterRequest = async () =>
//     await  auth.signInWithPopup(twitterAuthProvider)
//         .then(authUser => authUser)
//         .catch(error => error);


// function* signInUserWithGoogle() {
//     try {
//         const signUpUser = yield call(signInUserWithGoogleRequest);
//         if (signUpUser.message) {
//             yield put(showAuthMessage(signUpUser.message));
//         } else {
//             localStorage.setItem('user_id', signUpUser.uid);
//             yield put(userGoogleSignInSuccess(signUpUser));
//         }
//     } catch (error) {
//         yield put(showAuthMessage(error));
//     }
// }


// function* signInUserWithFacebook() {
//     try {
//         const signUpUser = yield call(signInUserWithFacebookRequest);
//         if (signUpUser.message) {
//             yield put(showAuthMessage(signUpUser.message));
//         } else {
//             localStorage.setItem('user_id', signUpUser.uid);
//             yield put(userFacebookSignInSuccess(signUpUser));
//         }
//     } catch (error) {
//         yield put(showAuthMessage(error));
//     }
// }


// function* signInUserWithGithub() {
//     try {
//         const signUpUser = yield call(signInUserWithGithubRequest);
//         if (signUpUser.message) {
//             yield put(showAuthMessage(signUpUser.message));
//         } else {
//             localStorage.setItem('user_id', signUpUser.uid);
//             yield put(userGithubSignInSuccess(signUpUser));
//         }
//     } catch (error) {
//         yield put(showAuthMessage(error));
//     }
// }


// function* signInUserWithTwitter() {
//     try {
//         const signUpUser = yield call(signInUserWithTwitterRequest);
//         if (signUpUser.message) {
//             if (signUpUser.message.length > 100) {
//                 yield put(showAuthMessage('Your request has been canceled.'));
//             } else {
//                 yield put(showAuthMessage(signUpUser.message));
//             }
//         } else {
//             localStorage.setItem('user_id', signUpUser.uid);
//             yield put(userTwitterSignInSuccess(signUpUser));
//         }
//     } catch (error) {
//         yield put(showAuthMessage(error));
//     }
// }

function* signInUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    try {
        const signInUser = yield call(signInUserWithEmailPasswordRequest, email, password);
        console.log(signInUser);
        // if (signInUser.message) {
        //     yield put(showAuthMessage(signInUser.message));
        // } else {
            localStorage.setItem('user_id', signInUser);
            yield put(userSignInSuccess(signInUser));
        // }
    } catch (error) {
        console.log('SIGNIN', error);
        yield put(showAuthMessage(error));
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
            localStorage.removeItem('user_id');
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