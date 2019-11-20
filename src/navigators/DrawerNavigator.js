import { createDrawerNavigator } from 'react-navigation';
//import AccountSettings from '../screens/AppStack/Drawer/AccountSettings';
import ProfileSettings from '../screens/AppStack/Drawer/ProfileSettings';
//import PreferenceSelect from '../screens/AuthStack/PreferenceSelect';
import { BottomTabNavigator } from '../navigators/BottomTabNavigator';

export const DrawerNavigator = createDrawerNavigator(
    {
        Home: BottomTabNavigator,
        MyProfile: ProfileSettings,
        
        
    },
    {
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: 'rgba(0,0,0,0.8)',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#c97b63',
        },
    }
);