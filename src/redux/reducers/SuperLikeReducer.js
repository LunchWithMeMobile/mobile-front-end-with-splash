import {
GET_USER_SUPERLIKES,
GET_USER_SUPERLIKES_SUCCESS,
GET_USER_SUPERLIKES_FAILED,

}  from "../types";

const INITIAL_STATE={
    superlikesListLoading:false,
    superLikesList:[], // no need to give the array a name

}

export default (state=INITIAL_STATE,action)=>{

switch(action.type){

    case GET_USER_SUPERLIKES:
        return{...state,superlikesListLoading:true};

    case GET_USER_SUPERLIKES_SUCCESS:
        return {...state, superlikesListLoading :false,superLikesList:action.payload};
    case GET_USER_SUPERLIKES_FAILED:
        return {...state, superlikesListLoading:false,};
    default:
        return{...state}


}




};