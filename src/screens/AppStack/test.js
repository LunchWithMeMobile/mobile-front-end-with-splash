import React, { Component } from 'react';
import {
    Dimensions,
    View,
    ImageBackground,
    StatusBar,
    Text,
    TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import backgound from '../../assests/Images/back.jpg';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class test extends Component {
     constructor(props) {
        super(props);
        this.state = {
          
        };
    } 
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <Text>test sreen </Text>
              <Text>
                  
          
        </Text>
                  
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    Container: {
        backgroundColor: "rgba(40,24,14,0.7)",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    FormContainer1: {
        width: "96%",
        height: "100%",
        flex: 2,
        flexDirection: "row",
        margin: '15rem',
    },
    FormContainer11: {
        width: "35%",
        backgroundColor: "rgba(35,33,33,0.9)",
    },
    FormContainer12: {

        width: "65%",
        backgroundColor: "rgba(255,243,224,0.8)",
        flexDirection: "column",
        flex: 2
    },
    FormContainer121: {
        width: "100%",
        height: "10%",
        backgroundColor: "rgba(176,79,72,0.7)",
        elevation: 4,
    },
    FormContainer122: {
        width: "100%",
        height: "90%",
    },
});

export default test;
