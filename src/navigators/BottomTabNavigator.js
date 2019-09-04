import { createBottomTabNavigator } from 'react-navigation';
import Profiles from '../screens/AppStack/Drawer/BottomTabs/Profiles';
import Likes from '../screens/AppStack/Drawer/BottomTabs/Likes';
import SuperLikes from '../screens/AppStack/Drawer/BottomTabs/SuperLikes';
import Notifications from '../screens/AppStack/Drawer/BottomTabs/Notifications';


export const BottomTabNavigator = createBottomTabNavigator(
    {
        Profiles: Profiles,
        Likes: Likes,
        SuperLikes: SuperLikes,
        Notifications: Notifications,
    }
);