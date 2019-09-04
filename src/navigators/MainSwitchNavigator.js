import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Splash from '../screens/Splash';
import { AuthStackNavigator } from './AuthStackNavigator';
import { AppStackNavigator } from '../navigators/AppStackNavigator';



export const MainSwitchNavigator = createAppContainer(createSwitchNavigator(
    {
        Splash,
        Auth: AuthStackNavigator,
        App: AppStackNavigator
    },
    {
        initialRouteName: 'Splash',
    }
));
