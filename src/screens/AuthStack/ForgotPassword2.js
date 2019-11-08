import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    TextInput,
    Alert
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SkypeIndicator } from 'react-native-indicators';
import backgound from '../../assests/Images/back.jpg';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class ForgotPassword2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
           verificationCode: '',
           loading:false,
           
        }
    }

   

    onSubmitPressed() {
       
             this.props.navigation.navigate('ForgotPassword3');
        
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <StatusBar backgroundColor="#a98274" barStyle="light-content" />
                <ImageBackground source={backgound} blurRadius={4} style={{ width: '100%', height: '100%' }}>
                    <View style={{ backgroundColor: 'rgba(30,14,4,0.3)', width: '100%', height: '100%', flex: 1 }}>
                        <View style={styles.container1}>
                            <ImageBackground source={backgound} style={{ width: '100%', height: '100%' }}>
                                <View style={styles.container}>
                                    <Text style={styles.heading}>Enter Verification Code</Text>

                                    <Text style={styles.instructions}>Enter the verification code that is sent to your email....</Text>
                                   {/*  <TextInput style={styles.input}
                                        placeholder="email ..."
                                        value={this.state.email}
                                        onChangeText={(text) => this.setState({ email: text })}
                                        placeholderTextColor="#ddab9c"
                                    /> */}
                                     <TextInput style={styles.input}
                                        placeholder="  verification code ..."
                                        secureTextEntry={true}
                                        placeholderTextColor="#ddab9c"
                                        value={this.state.newPassword}
                                        onChangeText={(text) => this.setState({ verificationCode: text })}
                                    />
                                   {
                                       this.state.loading?

                                         <SkypeIndicator color={'white'} size={EStyleSheet.value('40rem')} />
                                         :
                                        <TouchableOpacity
                                        onPress={() => this.onSubmitPressed()}
                                        style={styles.button}
                                    >
                                        <Text style={styles.buttonText}>Submit</Text>
                                    </TouchableOpacity>

                                   }
                                   
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container1: {
        width: '90%',
        height: '90%',
        //backgroundColor:"rgba(30,14,4,0.7)",
        alignItems: 'center',
        justifyContent: "center",
        elevation: 10,
        alignSelf: 'center',
        marginTop: '10%',
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: "600",
        fontSize: '16rem',
    },
    instructions:{
        color:'#ffffff',
    },
    button: {
        backgroundColor: '#c97b63',
        width: '120rem',
        height: '35rem',
        marginTop: '30rem',
        borderRadius: '200rem',
        justifyContent: 'center'
    },
    input: {
        //borderColor:'#0000dd',
        //backgroundColor:'rgba(240,208,193,0.35)' ,
        height: '40rem',
        width: "80%",
        marginBottom: '30rem',
        marginTop: '10rem',
        color: '#000000',
        borderRadius: '20rem',
        paddingLeft: '20rem',
        color: '#ffffff',
        borderColor: '#c97b63',
        borderStyle: 'solid',
        borderWidth: '1.5rem',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(30,14,4,0.7)",
        alignItems: 'center',
        justifyContent: "center",
        elevation: 3,
        alignSelf: 'center',
    },
    heading: {
        color: '#fffef9',
        fontSize: '20rem',
        marginBottom: '10rem',
    },
    txt: {
        color: '#fffef9',
        fontSize: '70rem',
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        //smarginTop: 50,
        justifyContent: 'center',
    },
});

export default ForgotPassword2;

// TODO
// connect to the backend