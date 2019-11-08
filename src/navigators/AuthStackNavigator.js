import { createStackNavigator } from 'react-navigation';
import Welcome from '../screens/AuthStack/Welcome';
import Login from '../screens/AuthStack/Login';
import Signup from '../screens/AuthStack/Signup';
import Signup2 from '../screens/AuthStack/Signup2';
import PreferenceSelect from '../screens/AuthStack/PreferenceSelect';
import ForgotPassword from '../screens/AuthStack/ForgotPassword';
import ForgotPassword2 from '../screens/AuthStack/ForgotPassword2';
import ForgotPassword3 from '../screens/AuthStack/ForgotPassword3';


export const AuthStackNavigator = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: Login,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        Signup: {
            screen: Signup,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        Signup2: {
            screen: Signup2,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        PreferenceSelect: {
            screen: PreferenceSelect,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        ForgotPassword: {
            screen: ForgotPassword,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        ForgotPassword3:{
            screen: ForgotPassword3,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }

        } ,
        ForgotPassword2:{
            screen: ForgotPassword2,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }

        }

    
    
    },


    {
        initialRouteName: 'Welcome'
    }
);
