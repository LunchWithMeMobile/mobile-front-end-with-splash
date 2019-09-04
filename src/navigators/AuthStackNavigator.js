import { createStackNavigator } from 'react-navigation';
import Welcome from '../screens/AuthStack/Welcome';
import Login from '../screens/AuthStack/Login';
import Signup from '../screens/AuthStack/Signup';
import Signup2 from '../screens/AuthStack/Signup2';
import PreferenceSelect from '../screens/AuthStack/PreferenceSelect';
import ForgotPassword from '../screens/AuthStack/ForgotPassword';

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
        }
    },
    {
        initialRouteName: 'Welcome'
    }
);
