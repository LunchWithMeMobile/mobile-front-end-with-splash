import {GET_CHAT_USER} from '../types';

import {
    CHAT_LIST
} from '../../api/API';

export const getUsersList = (accessToken, userId) => {
    console.log(accessToken);
    return(dispatch) => {
        dispatch({type: GET_CHAT_USER});
        fetch(CHAT_LIST, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+accessToken,
            },
        }).then(response => {
            console.log(response);
            if (response.success) {
               return(dispatch(getToDosSuccess(response.json())))
                
            } else {
                
            }
        }).catch(error => {
            
        })
    };
};

function getToDosSuccess(data) {

    return {
        type: CHAT_LIST,
        data
    }
}