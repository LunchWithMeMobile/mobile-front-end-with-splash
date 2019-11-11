import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
 
import {
    REGISTRATION2_FNAME_CHANGED,
    
    REGISTRATION2_GENDER_CHANGED,
    REGISTRATION2_DOB_CHANGED,
    REGISTRATION2_DESCRIPTION_CHANGED,
    REGISTRATION2_PROFESSION_CHANGED,
    SIGNUP2_FAILED,
    SIGNUP2_SUCCESS,
    SIGNUP2_USER,
    REGISTRATION2_INTPROFESSION_CHANGED,

    
} from '../types';

import {
    LOGIN,
    SIGNUP,
    SIGNUP2,
    


}from '../../api/API';

import NavigationService from '../../services/NavigationService';

//registration actions

export const RFullnameChanged=(fname)=>{
        return {

            type:REGISTRATION2_FNAME_CHANGED,
            payload:fname
        };

};

export const InterestedProfessionChanged=(Inprof)=>{
    return {

        type:REGISTRATION2_INTPROFESSION_CHANGED,
        payload:Inprof
    };

};


/* export const RTelephoneChanged=(telephone)=>{
    return {

        type:REGISTRATION2_TELEPHONE_CHANGED,
        payload:telephone
    };

};
 */

export const RGenderChanged=(gender)=>{
    return{
        type:REGISTRATION2_GENDER_CHANGED,
        payload:gender,
    };

};

export const RDOBChanged=(date)=>{
    return {

        type:REGISTRATION2_DOB_CHANGED,
        payload:date,
    };

};

export const RDescriptionChanged=(des)=>{
    return {
        type:REGISTRATION2_DESCRIPTION_CHANGED,
        payload:des,

    }
}

export const RProfessionChanged=(prof)=>{
    return {
        type:REGISTRATION2_PROFESSION_CHANGED,
        payload:prof,

    }
}


export const RDetails = (fullname,gender,dob,description,telephone,profession,email,intProf) => {
    console.log(description+"it came upto here");
    console.log(intProf+"it came upto here");
    return (dispatch) => {
    dispatch({ type: SIGNUP2_USER });
        fetch(SIGNUP2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dob: dob,
                fullname: fullname,
                gender:gender,
                
                self_description: description,
                
                myProf:profession,
                intProf:intProf,
                email:email,
            })
        }).then(response => {
            console.log(response);
            if (response.ok) {
                console.log(response.ok);
                return response.json()
                    .then(resJson => {
                       // console.log(resJson.status);
                        if (response.ok) {
                            dispatch({ type: SIGNUP2_SUCCESS });
                            NavigationService.navigate('PreferenceSelect');
                        } else {
                            dispatch({ type: SIGNUP2_FAILED });
                            console.log("inner else");
                            Alert.alert(
                                'Signup2 Failed!',
                                resJson.msg,
                                [
                                    { text: 'Ok' },
                                ],
                            );
                        }
                    });
            } else {
                dispatch({ type: SIGNUP2_FAILED });
                console.log("outer else");
                Alert.alert(
                    'Signup Failed!',
                    'Something went wrong',
                    [
                        { text: 'Ok' },
                    ],
                );
            }
        }).catch(err => {
            console.log(err);
            dispatch({ type: SIGNUP2_FAILED });
            Alert.alert(
                'Signup Failed!',
                'Something went wrong',
                [
                    { text: 'Ok' },
                ],
            );
        });
    };
};

