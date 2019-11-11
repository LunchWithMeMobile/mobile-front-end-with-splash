import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-community/async-storage';
import { List, ListItem} from "react-native-elements";


//import { connect } from 'react-redux';
//import * as actions from '../../../redux/actions/';
import {
    CHAT_LIST
} from '../../../api/API';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class ChatListScreen extends Component {
    constructor(){
        super();
        this.state={
            chatList:[],
            logUser:''
        }
    }

    componentDidMount() {

        this.fetchData();

    }
    fetchData() {
        /*const storedToken = await AsyncStorage.getItem("USER_ID");
        alert(storedToken);*/
        AsyncStorage.getItem('logToken').then(logToken => {
            //alert(accessToken);
            AsyncStorage.getItem('USERNAME').then(USERNAME => {
                fetch(CHAT_LIST, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': logToken
                    },
                    })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({
                            chatList: responseJson.users,
                            logUser:USERNAME
                        });
                        //console.log('response object:',responseJson.users)
                    })
                    .catch((error) => {
                    console.error(error);
                    });
            });
        });
        
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <TouchableOpacity
                key={item._id}
                onPress={() => this.props.navigation.navigate('ChatScreen',{value:item,logUser:this.state.logUser})}
            >
            <ListItem
                title={item.username}
                leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                bottomDivider
                chevron
            />
        </TouchableOpacity>
    )
    
    render () {
        return (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.chatList}
            renderItem={this.renderItem}
          />
        )
      }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    suggestions: {
        backgroundColor: "white",
        padding: 5,
        fontSize: 18,
        borderWidth: 0.5,
        marginLeft: 5,
        marginRight: 5
    }
});

/*const mapStateToProps = state => {
    return {
        chatList: state.chat.chatList,
    }
}*/

//export default connect(mapStateToProps, actions)(ChatListScreen);
export default ChatListScreen;
