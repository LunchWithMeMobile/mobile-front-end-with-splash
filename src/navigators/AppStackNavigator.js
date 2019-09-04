import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DrawerNavigator } from '../navigators/DrawerNavigator';
import { ChatStackNavigator } from '../navigators/ChatStackNavigator';
import { HeaderRight } from '../components/HeaderRight';

export const AppStackNavigator = createStackNavigator(
    {
        DrawerNavigator: {
            screen: DrawerNavigator,
            navigationOptions: () => ({
                headerStyle: {
                    // backgroundColor: '#5457',
                },
                headerRight: (<HeaderRight />)
            })
        },
        ChatStackNavigator: {
            screen: ChatStackNavigator,
        }
    },
    {
        initialRouteName: 'DrawerNavigator',

    }
);
