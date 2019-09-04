import { createStackNavigator } from 'react-navigation';
import ChatListScreen from '../screens/AppStack/ChatStack/ChatListScreen';

export const ChatStackNavigator = createStackNavigator(
    {
        ChatListScreen: {
            screen: ChatListScreen,
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
