import {GET_USER_SUPERLIKES, GET_USER_SUPERLIKES_FAILED, GET_USER_SUPERLIKES_SUCCESS}
        from '../types';

import {  } from "../../api/API";

export const getSuperLikeList =(accessToken,userId)=>{

return(dispatch)=>{
    dispatch({type:GET_USER_SUPERLIKES});
    //console.log("inside")
    fetch('https://jsonplaceholder.typicode.com/users',{

    method:'GET',
    headers:{
        'Content-Type':'application/json', 

    },

    }).then(response=>{
        if(response.ok){
            return response.json()
            .then(resjson=>{
                dispatch({type:GET_USER_SUPERLIKES_SUCCESS,payload:resjson});
            })  
        }else{
            dispatch({type:GET_USER_SUPERLIKES_FAILED});
        }
    }).catch(error=>{
        dispatch({type:GET_USER_SUPERLIKES_FAILED});
        console.log(error);
    })

};



};