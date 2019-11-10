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
import CheckBox from 'react-native-checkbox';
import checked from '../../assests/Images/checkboxChecked.png';

import unchecked from '../../assests/Images/checkboxUnchecked.png';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
//var interests = [] ;
class PreferenceSelect1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            interests:[],
            var:'',
        };
        
    }
    
    /* onChecked(value) {
        this.setState({ isChecked: value });
        if(this.state.isChecked)
        console.log("option1");
    } */

    interestPush(value){
        this.setState({var:value});
        console.log(this.state.var);
        this.setState({interests:this.state.var});
        console.log(this.state.interests);

    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ImageBackground source={backgound} blurRadius={10} style={{ width: '100%', height: '100%' }}>
                <StatusBar backgroundColor="#1b0000" barStyle="light-content" />
                <View style={styles.Container}>
                    <ImageBackground source={backgound} style={{ width: '100%', height: '100%' }}>
                        <View style={styles.FormContainer1}>
                            
                            <View style={styles.FormContainer12}>
                                
                                <View style={styles.FormContainer122}>
                                <View style={styles.check}>
                                    <TouchableOpacity
                                    onPress={() =>{this.interestPush("food1")
                                    //console.log(interests);
                                } }
                                    >
                                       <Text>interest 1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                     onPress={() =>{this.interestPush("food2")
                                     //console.log(interests);
                                 } }
                                    >
                                       <Text>interest 2</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                         onPress={() =>{this.interestPush("food3")
                                         //console.log(interests);
                                     } }>
                                       <Text>interest 3</Text>
                                    </TouchableOpacity>
                           

                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ImageBackground>
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

export default PreferenceSelect1;
