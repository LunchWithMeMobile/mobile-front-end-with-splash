import { createDrawerNavigator } from 'react-navigation';
//import AccountSettings from '../screens/AppStack/Drawer/AccountSettings';
import ProfileSettings from '../screens/AppStack/Drawer/ProfileSettings';
//import PreferenceSelect from '../screens/AuthStack/PreferenceSelect';
import { BottomTabNavigator } from '../navigators/BottomTabNavigator';
import myprofile from '../screens/AppStack/Drawer/myprofile';

export const DrawerNavigator = createDrawerNavigator(
    {
        Home: BottomTabNavigator,
        visitedProfile: ProfileSettings,
        MyProfile:myprofile,
        
        
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