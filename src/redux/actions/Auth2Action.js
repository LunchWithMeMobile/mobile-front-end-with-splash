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
    IMAGE_PICKED,
    
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

export const onImagePicked = image => {
    return {
        type: IMAGE_PICKED,
        payload: image
    };
};


// export const RDetails = (fullname,gender,dob,description,telephone,profession,email,intProf) => {
//     console.log(description+"it came upto here");
//     console.log(intProf+"it came upto here");
//     return (dispatch) => {
//     dispatch({ type: SIGNUP2_USER });
//         fetch(SIGNUP2, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 dob: dob,
//                 fullname: fullname,
//                 gender:gender,
                
//                 self_description: description,
                
//                 myProf:profession,
//                 intProf:intProf,
//                 email:email,
//             })
//         }).then(response => {
//             console.log(response);
//             if (response.ok) {
//                 console.log(response.ok);
//                 return response.json()
//                     .then(resJson => {
//                        // console.log(resJson.status);
//                         if (response.ok) {
//                             dispatch({ type: SIGNUP2_SUCCESS });
//                             alert("sign up 2 success!!");
//                             NavigationService.navigate('PreferenceSelect');
//                         } else {
//                             dispatch({ type: SIGNUP2_FAILED });
//                             console.log("inner else");
//                             Alert.alert(
//                                 'Signup2 Failed!',
//                                 resJson.msg,
//                                 [
//                                     { text: 'Ok' },
//                                 ],
//                             );
//                         }
//                     });
//             } else {
//                 dispatch({ type: SIGNUP2_FAILED });
//                 console.log("outer else");
//                 Alert.alert(
//                     'Signup Failed!',
//                     'Something went wrong',
//                     [
//                         { text: 'Ok' },
//                     ],
//                 );
//             }
//         }).catch(err => {
//             console.log(err);
//             dispatch({ type: SIGNUP2_FAILED });
//             Alert.alert(
//                 'Signup Failed!',
//                 'Something went wrong',
//                 [
//                     { text: 'Ok' },
//                 ],
//             );
//         });
//     };
// };

export const RDetails = (fullname, gender, dob, description, profession, email, intProf, image, interests) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP2_USER });
        fetch(SIGNUP2, {   
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: fullname,
                gender: gender,
                date_of_birth: dob,  
                message: description,  
                interest: interests,
                myProf: profession,
                intProf: intProf,
                image: image,
                email: email,
            })
        }).then(response => {
            console.log(response);
            if (response.ok) {
                return response.json()
                    .then(resJson => {
                        console.log(resJson);
                        if (response.ok) {
                            dispatch({ type: SIGNUP2_SUCCESS });
                            NavigationService.navigate('Login');
                        } else {
                            dispatch({ type: SIGNUP2_FAILED });
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

