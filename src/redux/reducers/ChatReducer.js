import {
    CHAT_LIST
} from '../types';

const INITIAL_STATE = {
    chatList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHAT_LIST:
            return{
                ...state,
                chatList:action.data
            }
        default:
            return state;
    }
};
