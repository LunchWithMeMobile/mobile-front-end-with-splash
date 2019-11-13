import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DrawerNavigator } from '../navigators/DrawerNavigator';
import { ChatStackNavigator } from '../navigators/ChatStackNavigator';
import MapScreen from '../screens/AppStack/MapScreen';
import TimePickerScreen from '../screens/AppStack/TimePickerScreen';
import ProfileSettings from '../screens/AppStack/Drawer/ProfileSettings';
import test from '../screens/AppStack/test';
import { HeaderRight } from '../components/HeaderRight';

export const AppStackNavigator = createStackNavigator(
    {
        DrawerNavigator: {
            screen: DrawerNavigator,
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    // backgroundColor: '#5457',
                },
                headerRight: (<HeaderRight />),
                // headerLeft: (<HeaderLeft onPress={() => navigation.toggleDrawer()}/>)
            })
        },
        ChatStackNavigator: {
            screen:ChatStackNavigator,
        },
        MapScreen: {
            screen: MapScreen,
        },
        TimePickerScreen:{
            screen:TimePickerScreen,
            navigationOptions:  {
                title: 'Select Times',                 
                headerLeft: null
            }
        },
        test:{
            screen:test,
        },
        ProfileSettings: {
            screen: ProfileSettings,
            navigationOptions:  {
                title: 'Profile',                 
            }
        }
    },
    {
        initialRouteName:'TimePickerScreen',

    }
);
