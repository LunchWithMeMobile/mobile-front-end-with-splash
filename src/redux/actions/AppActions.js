import { 
    GET_USER_LIKES, 
    GET_USER_LIKES_SUCCESS, 
    GET_USER_LIKES_FAILED, 
    GET_NERBY_USERS,
    GET_NERBY_USERS_FAILED,
    GET_NERBY_USERS_SUCCESS,
    START_TIME_PICKED,
    END_TIME_PICKED,
    USER_LIKED,
    USER_LIKED_SUCCESS,
    USER_LIKED_FAILED,
    USER_SELECTED,
    SET_USER_REQUESTS
} from '../types';
import { 
    NEARBY_USERS, LIKE, ALL_USERS 
} from '../../api/API';
import AsyncStorage from '@react-native-community/async-storage';

export const startTimePicked = time => {
    return {
        type: START_TIME_PICKED,
        payload: time
    };
};

export const endTimePicked = time => {
    return {
        type: END_TIME_PICKED,
        payload: time
    };
};

export const getLikesList = (accessToken, userId) => {
    return(dispatch) => {
        dispatch({type: GET_USER_LIKES});
        fetch(ALL_USERS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken, 
            },
        }).then(response => {
            if (response.ok) {
                return response.json()
                .then(resJson => {
                    dispatch({type: GET_USER_LIKES_SUCCESS, payload: resJson.users});
                })
            } else {
                dispatch({type: GET_USER_LIKES_FAILED});
            }
        }).catch(error => {
            dispatch({type: GET_USER_LIKES_FAILED});
        })
    };
};

export const getNearbyUsers = accessToken => {
    return(dispatch) => {
        dispatch({type: GET_NERBY_USERS});
        fetch(NEARBY_USERS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,  
            },
        }).then(response => {
            console.log(response)
            if(response.ok) {
                return response.json()
                .then(resJson => {
                    console.log("tt: ",resJson)
                    dispatch({type: GET_NERBY_USERS_SUCCESS, payload: resJson.users});
                    setUserRequests(resJson.users, dispatch);
                })
            } else {
                dispatch({type: GET_NERBY_USERS_FAILED});
            }
        }).catch(err => {
            console.log(err);
            alert("network error")
            dispatch({type: GET_NERBY_USERS_FAILED});
        });
    };
};

export const like = (userId, username, accessToken) => {
    console.log("userId  "+userId+" userNAme : "+username+" access Token "+accessToken)
    return(dispatch) => {
        dispatch({ type: USER_LIKED });
        fetch(`${LIKE}/${userId}/${username}`, {
            method: 'GET',  
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,  
            },
        }).then(response => {
            console.log(response);
            if(response.ok) {
                dispatch({type: USER_LIKED_SUCCESS});
            } else {
                dispatch({type: USER_LIKED_FAILED});
            }
        }).catch(err => {
            console.log(err);
            dispatch({type: USER_LIKED_FAILED});
        });
    };
};

export const onUserSelected = user => {
    return {
        type: USER_SELECTED,
        payload: user
    };
};

const setUserRequests = (users, dispatch) => {
    AsyncStorage.getItem('userName').then(username => {
        const loggedInUser = users.find(element => {
            return element.username = username;
        });
        dispatch({type: SET_USER_REQUESTS, payload: loggedInUser.requests})
    });
};