import { 
    GET_USER_LIKES, 
    GET_USER_LIKES_SUCCESS, 
    GET_USER_LIKES_FAILED, 
    GET_NERBY_USERS,
    GET_NERBY_USERS_SUCCESS,
    GET_NERBY_USERS_FAILED,
    START_TIME_PICKED,
    END_TIME_PICKED,
    USER_LIKED,
    USER_LIKED_SUCCESS,
    USER_LIKED_FAILED,
    USER_SELECTED,
    SET_USER_REQUESTS} 
    from '../types';

const INITIAL_STATE = {
    likesListLoading: false,
    likesList: [],
    nearByUsers: [],
    loading: false,
    startTime: '',
    endTime: '',
    selectedUser: {},
    requests: [],
}
//action is just a parameter.
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_USER_LIKES:
            return { ...state, likesListLoading: true };
        case GET_USER_LIKES_SUCCESS:
            return { ...state, likesListLoading: false, likesList: action.payload };
        case GET_USER_LIKES_FAILED:
            return { ...state, likesListLoading: false };
        case GET_NERBY_USERS:
            
            return { ...state, loading: true };
        case GET_NERBY_USERS_SUCCESS:
                console.log("aaa: ",{ ...state, loading: false, nearByUsers: action.payload })
            return { ...state, loading: false, nearByUsers: action.payload };
        case GET_NERBY_USERS_FAILED:
            return { ...state, loading: false };
        case START_TIME_PICKED:
            return { ...state, startTime: action.payload };
        case END_TIME_PICKED:
            return {  ...state, endTime: action.payload};
        case USER_LIKED:
            return { ...state };
        case USER_LIKED_SUCCESS:
            return { ...state };
        case USER_LIKED_FAILED:
            return { ...state };
        case USER_SELECTED:
            return { ...state, selectedUser: action.payload };
        case SET_USER_REQUESTS:
            return { ...state, requests: action.payload };
        default:
            return { ...state };
    }
};