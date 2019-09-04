import {
    PROFILE_FULLNAME_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER,
    SIGNUP_EMAIL_CHANGED,
    SIGNUP_PASSWORD_CHANGED,
    SIGNUP_USERNAME_CHANGED,
    SIGNUP_CONFIRM_PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from '../types';

import {
    LOGIN
} from '../../api/API';

//
export const ProfileFullNameChanged = (fullname) => {
    return {
        type: PROFILE_FULLNAME_CHANGED,
        payload: fullname
    };
};

/* export const Profile = (password) => {
    return {
        type: LOGIN_PASSWORD_CHANGED,
        payload: password
    };
};

export const loginUser = (username, password) => {
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
                        if (resJson.success) {
                            dispatch({ type: LOGIN_SUCCESS });
                            console.log('ok');
                            console.log(resJson.token);
                            //this.storeData(resJson);
                            //AsyncStorage.setItem('jwt', resJson.token)
                            //AsyncStorage.setItem('token',"Nethmee") 
                            //this.setValue()
                            //const value =  AsyncStorage.getItem('token')
                            this.state.token = resJson.token;
                            alert("value is =" + this.state.token);
                            this.props.navigation.replace('dashboard');
                        } else {
                            dispatch({ type: LOGIN_FAILED });
                            alert(
                                resJson.msg
                            );
                        }
                    })
            } else (response => {
                dispatch({ type: LOGIN_FAILED });
                console.log(response);
                //login errors goes here
            })
        });
    }
}


//signup actions
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
 */