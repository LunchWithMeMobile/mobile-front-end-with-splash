import {
    PROFILE_FULLNAME_CHANGED,
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
} from '../types';

const INITIAL_STATE = {
    fullName: '',
    EditFullName:false,
    DOB: '',
    EditDOB:false,

    loginLoading: false,
    userId: '',
    Gender: '',
    email: '',
    EditEmail:false,
    Telephone: '',
    EditTelephone:false,
    Address: '',
    EditAddress:false,
    Occupation: '',
    EditOccupation:false,
    signupLoading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case PROFILE_FULLNAME_CHANGED:
            return { ...state, fullName: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loginLoading: true };
        case LOGIN_SUCCESS:
            return { ...state, loginLoading: false };
        case LOGIN_FAILED:
            return { ...state, loginLoading: false };
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
