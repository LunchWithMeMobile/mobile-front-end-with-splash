import {
    LOGIN_USERNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    SIGNUP_EMAIL_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_USER,
    SIGNUP_USERNAME_CHANGED,
    SIGNUP_PASSWORD_CHANGED,
    SIGNUP_CONFIRM_PASSWORD_CHANGED,
    SIGNUP_USER,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    SET_USERNAME,
    SET_ACCESS_TOKEN,
    SET_USER_ID,
} from '../types';

const INITIAL_STATE = {
    username: '',
    password: '',
    loginLoading: false,
    userId: '',
    accessToken: '',
    signupEmail: '',
    signupUsername: '',
    signupPassword: '',
    signupConfirmPassword: '',
    signupLoading: false
};

const LOGIN_INITIAL_STATE = {
    username: '',
    password: '',
    loginLoading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN_USERNAME_CHANGED:
            return { ...state, username: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loginLoading: true };
        case LOGIN_SUCCESS:
            return { ...state, loginLoading: false, ...LOGIN_INITIAL_STATE };
        case LOGIN_FAILED:
            return { ...state, loginLoading: false };
        case SET_USERNAME:
            return { ...state, username: action.payload };
        case SET_USER_ID:
            return { ...state, userId: action.payload };
        case SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload };
        case SIGNUP_EMAIL_CHANGED:
            return { ...state, signupEmail: action.payload };
        case SIGNUP_USERNAME_CHANGED:
            return { ...state, signupUsername: action.payload };
        case SIGNUP_PASSWORD_CHANGED:
            return { ...state, signupPassword: action.payload };
        case SIGNUP_CONFIRM_PASSWORD_CHANGED:
            return { ...state, signupConfirmPassword: action.payload };
        case SIGNUP_USER:
            return { ...state, signupLoading: true };
        case SIGNUP_SUCCESS:
            return { ...state, signupLoading: false };
        case SIGNUP_FAILED:
            return { ...state, signupLoading: false };
        default:
            return state;
    }
};
