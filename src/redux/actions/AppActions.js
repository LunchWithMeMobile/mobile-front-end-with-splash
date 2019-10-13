import { GET_USER_LIKES, GET_USER_LIKES_SUCCESS, GET_USER_LIKES_FAILED } from '../types';

import {

} from '../../api/API';

export const getLikesList = (accessToken, userId) => {
    return(dispatch) => {
        dispatch({type: GET_USER_LIKES});
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer '+accessToken, 
            },
        }).then(response => {
            if (response.ok) {
                return response.json()
                .then(resJson => {
                    dispatch({type: GET_USER_LIKES_SUCCESS, payload: resJson});
                })
            } else {
                dispatch({type: GET_USER_LIKES_FAILED});
            }
        }).catch(error => {
            dispatch({type: GET_USER_LIKES_FAILED});
        })
    };
};