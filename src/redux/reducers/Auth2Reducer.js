import {
    REGISTRATION2_FNAME_CHANGED,
    REGISTRATION2_TELEPHONE_CHANGED,
    REGISTRATION2_GENDER_CHANGED,
    REGISTRATION2_DOB_CHANGED,
    REGISTRATION2_DESCRIPTION_CHANGED,
    REGISTRATION2_PROFESSION_CHANGED,
    SIGNUP2_FAILED,
    SIGNUP2_SUCCESS,
    REGISTRATION2_INTPROFESSION_CHANGED,
    
} from '../types';


const  INITIAL_STATE={
    fname:'',
    telephone:'',
    gender:'',
    dob:'',
    description:'',
    profession:'',
    intProfession:'',

}

export default (state=INITIAL_STATE,action)=>{
    console.log(action);
    switch (action.type){

        case  REGISTRATION2_FNAME_CHANGED:
            return {...state, fname:action.payload};
           
        case   REGISTRATION2_TELEPHONE_CHANGED:
            return {...state, telephone:action.payload};
        case REGISTRATION2_GENDER_CHANGED:
            return {... state, gender:action.payload};
        case REGISTRATION2_DOB_CHANGED:
            return {... state,dob:action.payload};
        case REGISTRATION2_DESCRIPTION_CHANGED:
            return {... state,description:action.payload};
        case REGISTRATION2_PROFESSION_CHANGED:
            return {... state,profession:action.payload};
        case REGISTRATION2_INTPROFESSION_CHANGED:
            return {... state,intProfession:action.payload};

        default:
        return state;



    }



}