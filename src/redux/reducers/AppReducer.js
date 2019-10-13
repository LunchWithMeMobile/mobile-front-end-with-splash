import { 
    GET_USER_LIKES, 
    GET_USER_LIKES_SUCCESS, 
    GET_USER_LIKES_FAILED } 
    from '../types';

const INITIAL_STATE = {
    likesListLoading: false,
    likesList: [],
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_USER_LIKES:
            return { ...state, likesListLoading: true };
        case GET_USER_LIKES_SUCCESS:
            return { ...state, likesListLoading: false, likesList: action.payload };
        case GET_USER_LIKES_FAILED:
            return { ...state, likesListLoading: false };
        default:
            return { ...state };
    }
};