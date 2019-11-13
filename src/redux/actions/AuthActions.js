import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
    LOGIN_USERNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER,
    SIGNUP_EMAIL_CHANGED,
    SIGNUP_PASSWORD_CHANGED,
    SIGNUP_USERNAME_CHANGED,
    SIGNUP_CONFIRM_PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SET_USERNAME,
    SET_ACCESS_TOKEN,
    SIGNUP_USER,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    SET_USER_ID,
    SET_USER_DATA,
    FORGETPASSWORD_EMAIL_CHANGED,
    SUBMIT_EMAIL,
    SUBMIT_EMAIL_FAIL,
    SUBMIT_EMAIL_SUCCESS

} from '../types';

import {
    LOGIN,
    SIGNUP,
    FORGOTPASSWORD1
} from '../../api/API';

import NavigationService from '../../services/NavigationService';

//login actions-------------------------------------
export const loginUsernameChanged = (username) => {
    return {
        type: LOGIN_USERNAME_CHANGED,
        payload: username
    };
};

export const loginPasswordChanged = (password) => {
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: password
    };
};

export const loginUser = (username, password, isChecked) => {
    console.log(username, password)
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        fetch(LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(response => {
            if (response.ok) {
                return response.json()
                    .then(resJson => {
                        console.log(resJson);
                        if (resJson.success) {
                            dispatch({ type: LOGIN_SUCCESS });
                            // setAccessToken(resJson.token, dispatch);
                            setUsername(resJson.user.username, dispatch);
                            // setUserId(resJson.user.id, dispatch);
                            // if (isChecked) {
                            // }
                            AsyncStorage.setItem('accessToken', resJson.token);
                            AsyncStorage.setItem('userId', resJson.user.id);
                            AsyncStorage.setItem('userName', resJson.user.username);
                            AsyncStorage.setItem('email', resJson.email);
                            Alert.alert(
                                'Login successful!',
                                resJson.msg,
                                [
                                    { text: 'Ok' },
                                ],
                            );
                            NavigationService.navigate('TimePickerScreen');
                        } else {
                            dispatch({ type: LOGIN_FAILED });
                            Alert.alert(
                                'Login Failed!',
                                resJson.msg,
                                [
                                    { text: 'Ok' },
                                ],
                            );
                        }
                    });
            } else {
                dispatch({ type: LOGIN_FAILED });
                Alert.alert(
                    'Login Failed!',
                    'Something went wrong',
                    [
                        { text: 'Ok' },
                    ],
                );
            }
        }).catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAILED });
            Alert.alert(
                'Login Failed!',
                'Something went wrong',
                [
                    { text: 'Ok' },
                ],
            );
        });
    };
};

//set user Details in app state for logged in user
export const setUserDetails = (accessToken, userId, username) => {
    return (dispatch) => {
        setAccessToken(accessToken, dispatch);
        setUserId(userId, dispatch);
        setUsername(username, dispatch);
    };
}
/* const setUsername = (username, dispatch) => {
    AsyncStorage.setItem('USERNAME', username);
    dispatch({ type: SET_USERNAME, payload: username });
};

const setAccessToken = (accessToken, dispatch) => {
    AsyncStorage.setItem('logToken', accessToken);
    dispatch({ type: SET_ACCESS_TOKEN, payload: accessToken });
};

const setUserId = (userId, dispatch) => {
    AsyncStorage.setItem('USER_ID', userId);
    dispatch({ type: SET_USER_ID, payload: userId });
}; */


const setUsername = (username, dispatch) => {
    dispatch({ type: SET_USERNAME, payload: username });
};

const setAccessToken = (accessToken, dispatch) => {
    dispatch({ type: SET_ACCESS_TOKEN, payload: accessToken });
};

const setUserId = (userId, dispatch) => {
    dispatch({ type: SET_USER_ID, payload: userId });
};
 

//signup actions------------------------------------------------
export const signupEmailChanged = (email) => {
    return {
        type: SIGNUP_EMAIL_CHANGED,
        payload: email
    };
};

export const signupUsernameChanged = (username) => {
    return {
        type: SIGNUP_USERNAME_CHANGED,
        payload: username
    };
};

export const signupPasswordChanged = (password) => {
    return {
        type: SIGNUP_PASSWORD_CHANGED,
        payload: password
    };
};

export const signupConfirmPasswordChanged = (confirmPassword) => {
    return {
        type: SIGNUP_CONFIRM_PASSWORD_CHANGED,
        payload: confirmPassword
    };
};


export const signUpUser = (email, username, password, confirmPass) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });
        fetch(SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
                confirmPass: confirmPass
            })
        }).then(response => {
            console.log(response);
            if (response.ok) {
                return response.json()
                    .then(resJson => {
                        console.log(resJson);
                        if (resJson.success) {
                            dispatch({ type: SIGNUP_SUCCESS });
                            NavigationService.navigate('Signup2');
                        } else {
                            dispatch({ type: SIGNUP_FAILED });
                            Alert.alert(
                                'Signup Failed!',
                                resJson.msg,
                                [
                                    { text: 'Ok' },
                                ],
                            );
                        }
                    });
            } else {
                dispatch({ type: SIGNUP_FAILED });
                Alert.alert(
                    'Signup Failed!',
                    'Something went wrong',
                    [
                        { text: 'Ok' },
                    ],
                );
            }
        }).catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP_FAILED });
            Alert.alert(
                'Signup Failed!',
                'Something went wrong',
                [
                    { text: 'Ok' },
                ],
            );
        });
    };
};


//forgetpassword actions---------------------------------

export const onEmailChangedRESETPASS = (email) => {
    return {
        type: FORGETPASSWORD_EMAIL_CHANGED,
        payload: email
    };
};

export const forgetPasswordEmail=(email)=>{
    return (dispatch) => {
        dispatch({ type: SUBMIT_EMAIL });
        fetch(FORGOTPASSWORD1, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
              
            })
        }).then(response => {
            console.log(response);
            if(response.status==200)
            {
                dispatch({ type: SUBMIT_EMAIL_SUCCESS });
               
                 alert("please verify your email!");
                 console.log(response.json());
                 NavigationService.navigate('ForgotPassword2');
            }
             
        }).catch(err => {
            console.log(err);
            dispatch({ type: SUBMIT_EMAIL_FAIL });
            Alert.alert(
                'Signup Failed!',
                'Something went wrong',
                [
                    { text: 'Ok' },
                ],
            );
        });
    };


}

    

