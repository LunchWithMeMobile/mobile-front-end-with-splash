import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    Button
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
//import io from "socket.io-client";
import io from 'socket.io-client/dist/socket.io';
import { GiftedChat } from 'react-native-gifted-chat';
import AsyncStorage from '@react-native-community/async-storage';


import {
    BASEURL,MESSAGE
} from '../../../api/API';




class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
          user_name: null,
          personId:this.props.navigation.getParam('value', 'NO-ID')//click user's data
        };
        this.onReceivedMessage = this.onReceivedMessage.bind(this);
        this.onSend = this.onSend.bind(this);
        this._storeMessages = this._storeMessages.bind(this);

        this.socket = io(BASEURL,{
            path: '/chat',
            reconnection: true,
            reconnectionDelay: 500,
            jsonp: false,
            reconnectionAttempts: Infinity,
            transports: ['websocket']
         });
        this.socket.on('message', this.onReceivedMessage);

    }
    componentDidMount() {
      this.socket.on('error', (error) => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      });

      AsyncStorage.getItem('USERNAME').then(name => {
        this.setState({
            user_name: name
        });
      });
  
      this.socket.on("connect", () => {
        this.sendUser(this.state.user_name);
        console.log("connected to the chat server");
        
      });

      this.getConversation(this.state.user_name,this.state.personId.username);
    }
    sendUser(username){
        this.socket.emit("username", {username: username});
    }
    disconnect() {
        this.socket.disconnect();
    }
//name==username name2==chatwith
    getConversation(name1, name2){
        let url = MESSAGE;
        if (name2 != "chat-room") {
          let route = "/" + name1 + "/" + name2;
          url += route;
        }
        AsyncStorage.getItem('logToken').then(logToken => {
            //alert(accessToken);
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': logToken
                },
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log('response object:',responseJson.conversation);
                    //this.onReceivedMessage(responseJson.conversation);
                })
                .catch((error) => {
                  console.error(error);
                });
        });
    }
    onReceivedMessage(messages) {
        this._storeMessages(messages);
    }
    //
    onSend(messages=[]) {
        //alert(messages[0].text);
        let message = {
          text: messages[0].text,
          from: messages[0].user.username,
          created: new Date(messages[0].createdAt),
          conversationId: '5da9f6da13f0623f801cee7a',
          inChatRoom:"chat-room"
          
        };
        this.socket.emit("message", {message: message, to: this.state.personId.username});
        this._storeMessages(messages);
    }
    _storeMessages(messages) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
    }

    render() {
        var user = { username: this.state.user_name};
        return (
        <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend}
            user={user}
        />
            
          );
    }
      
}

export default ChatScreen;
