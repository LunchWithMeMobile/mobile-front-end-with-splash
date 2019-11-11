import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    ImageBackground,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import {
    Button
} from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

import backgound from '../../assests/Images/back.jpg';
import slider1 from '../../assests/Images/slider1.jpeg';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Welcome extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ImageBackground source={backgound} style={{ width: '100%', height: '100%' }}>
                    <StatusBar backgroundColor="#a98274" barStyle="light-content" />
                    <View style={styles.loginContainer}>
                        <ImageBackground source={slider1} style={styles.slider}>
                            <View style={styles.textContainer}>
                                <Text>connect with people...</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.con}>
                            <View >
                                <Text style={styles.text}>Don't have an account?</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Signup2')}
                                    style={[styles.button, { backgroundColor: '#c97b63' }]}
                                >
                                    <Text style={styles.buttonText} >Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.con}>
                            <View >
                                <Text style={styles.text}>Already have an account?</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Login')}
                                    style={[styles.button, { backgroundColor: '#af4448' }]}
                                >
                                    <Text style={styles.buttonText} >Log in</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    textContainer: {
        color: '#000000',
        backgroundColor: '#b39ddb',
        width: '300rem',
        height: '45rem',
        borderRadius: '20rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20rem',
    },
    buttonText: {
        alignSelf: 'center',
        color: '#ffffff',
        fontWeight: "900",
        fontSize: '15rem',
    },
    loginContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(30,14,4,0.7)",
    },
    slider: {
        width: "100%",
        height: '300rem',
    },
    con: {
        flexDirection: 'row',
        marginTop: '80rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        marginLeft: '15rem',
        marginRight: '20rem',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '120rem',
        height: '35rem',
        borderRadius: '17rem',
        elevation: 5,
    },
});

export default Welcome;
