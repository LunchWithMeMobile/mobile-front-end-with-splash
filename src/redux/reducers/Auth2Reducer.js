import {
    REGISTRATION2_FNAME_CHANGED,
    REGISTRATION2_GENDER_CHANGED,
    REGISTRATION2_DOB_CHANGED,
    REGISTRATION2_DESCRIPTION_CHANGED,
    REGISTRATION2_PROFESSION_CHANGED,
    SIGNUP2_FAILED,
    SIGNUP2_SUCCESS,
    REGISTRATION2_INTPROFESSION_CHANGED,
    IMAGE_PICKED,
    SIGNUP2_USER,

} from '../types';


const INITIAL_STATE = {
    fname: '',
    gender: '',
    dob: '',
    description: '',
    profession: 'student',
    intProfession: 'student',
    image: null,
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRATION2_FNAME_CHANGED:
            return { ...state, fname: action.payload };
        case REGISTRATION2_GENDER_CHANGED:
            return { ...state, gender: action.payload };
        case REGISTRATION2_DOB_CHANGED:
            return { ...state, dob: action.payload };
        case REGISTRATION2_DESCRIPTION_CHANGED:
            return { ...state, description: action.payload };
        case REGISTRATION2_PROFESSION_CHANGED:
            return { ...state, profession: action.payload };
        case REGISTRATION2_INTPROFESSION_CHANGED:
            return { ...state, intProfession: action.payload };
        case IMAGE_PICKED:
            return { ...state, image: action.payload }
        case SIGNUP2_USER:
            return { ...state, loading: true };
        case SIGNUP2_SUCCESS:
            return { ...state, loading: false };
        case SIGNUP2_FAILED: 
            return { ...state, loading: false } 
        default:
            return state;



    }



}