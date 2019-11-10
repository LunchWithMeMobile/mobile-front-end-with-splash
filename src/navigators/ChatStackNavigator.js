import { createStackNavigator } from 'react-navigation';
import ChatListScreen from '../screens/AppStack/ChatStack/ChatListScreen';
import ChatScreen from '../screens/AppStack/ChatStack/ChatScreen';

export const ChatStackNavigator = createStackNavigator(
    {
        ChatListScreen: {
            screen: ChatListScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        ChatScreen: {
            screen: ChatScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'ChatListScreen'
    }
);
