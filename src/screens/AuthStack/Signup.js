import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    ImageBackground,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SkypeIndicator } from 'react-native-indicators';

import backgound from '../../assests/Images/back.jpg';
import { REG_EMAIL_ADDRESS } from '../../config/Constants';
import * as actions from '../../redux/actions';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Signup extends Component {

    constructor(props) {
        super(props);
    }

    onSignupPressed() {
        const { email, username, password, confirmPassword } = this.props;
        this.validate(email, username, password, confirmPassword);
        // this.props.navigation.navigate('Signup2');
    }

    validate(email, username, password, confirmPassword) {
        if (email === '' || username === '' || password === '' || confirmPassword === '') {
            Alert.alert(
                'Signup Failed!',
                'Please fill all the fields',
                [
                    { text: 'Ok' },
                ],
            );
        } else if (password !== confirmPassword) {
            Alert.alert(
                'Signup Failed!',
                'Passwords does not match',
                [
                    { text: 'Ok' },
                ],
            );
        } else if (!this.validateEmail(email)) {
            Alert.alert(
                'Signup Failed!',
                'Invalid email',
                [
                    { text: 'Ok' },
                ],
            );
        } else {
            this.props.signUpUser(email, username, password, confirmPassword);
        }
    }

    validateEmail(text) {
        return REG_EMAIL_ADDRESS.test(text);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ImageBackground source={backgound} style={{ width: '100%', height: '100%' }}>
                    <StatusBar backgroundColor="#a98274" barStyle="light-content" />
                    <View style={styles.loginContainer}>
                        <View style={styles.signupContainer}>
                            <Text style={styles.para}>Sign Up</Text>
                            <Text style={styles.para2}>Please fill in this form to create an account.</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Email"
                                value={this.props.email}
                                onChangeText={text => this.props.signupEmailChanged(text)}
                                placeholderTextColor="#efebe9"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Username"
                                value={this.props.username}
                                onChangeText={text => this.props.signupUsernameChanged(text)}
                                placeholderTextColor="#efebe9"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                                secureTextEntry={true}
                                value={this.props.password}
                                onChangeText={text => this.props.signupPasswordChanged(text)}
                                placeholderTextColor="#efebe9"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password again"
                                secureTextEntry={true}
                                value={this.props.confirmPassword}
                                onChangeText={text => this.props.signupConfirmPasswordChanged(text)}
                                placeholderTextColor="#efebe9"
                            />
                            <View style={styles.condition}>
                                <Text style={{ color: '#fffffb' }}>By creating an account you're agreeing to our</Text>
                                <TouchableOpacity
                                    onPress={this.toggleModal1}
                                >
                                    <Text style={{ color: '#ffccbc', marginBottom: 7, textDecorationLine: "underline", fontStyle: "italic" }}> terms and Conditions.</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                this.props.loading ?
                                    <SkypeIndicator color={'white'} size={EStyleSheet.value('40rem')} />
                                    :
                                    <TouchableOpacity
                                        onPress={() => this.onSignupPressed()}
                                        style={styles.signInB}
                                    >
                                        <Text style={styles.signInBText}>Sign Up</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View style={styles.newAccount}>
                        <Text style={{ color: '#fffffb' }}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={{ color: '#ffccbc', marginLeft: 6, marginBottom: 7 }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: '20rem',
    },
    img: {
        width: '50rem',
        height: '100rem',
    },
    signupContainer: {
        width: "90%",
        height: "92%",
        marginTop: "6%",
        marginLeft: "4%",
        backgroundColor: 'rgba(38,14,4,0.5)',
        paddingLeft: '40rem',
        paddingRight: '40rem',
        alignItems: 'center',
        borderRadius: '15rem',
        paddingTop: "6%"
    },
    signInB: {
        backgroundColor: '#c97b63',
        width: '120rem',
        height: '40rem',
        borderRadius: '15rem',
        elevation: 3,
        textAlign: "center",
        marginTop: '10rem'
    },
    signInBText: {
        color: "#ffffff",
        textAlign: "center",
        marginTop: '10rem',
        fontWeight: "bold"
    },
    input: {
        borderColor: '#0000dd',
        backgroundColor: 'rgba(240,208,193,0.5)',
        height: '40rem',
        width: '300rem',
        marginBottom: '30rem',
        marginTop: '10rem',
        color: '#000000',
        borderRadius: '20rem',
        fontWeight: 'bold',
        paddingLeft: '20rem',
    },
    welcome: {
        fontSize: '25rem',
        textAlign: 'center',
        marginBottom: '20rem',
        fontStyle: 'italic'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: '5rem',
    },
    para: {
        fontSize: '25rem',
        marginBottom: '10rem',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        color: "#ffffff"
    },
    para2: {
        fontSize: '15rem',
        paddingLeft: '20rem',
        fontWeight: 'bold',
        color: "#ffffff"
    },
    para3: {
        fontSize: '15rem',
        paddingLeft: '50rem',
        marginLeft: '20rem',
        fontWeight: 'bold',
        color: "#ffffff"
    },
    para5: {
        fontSize: '15rem',
        paddingLeft: '50rem',
        marginLeft: '20rem',
        fontWeight: 'bold',
        color: "#ffffff"
    },
    condition: {
        flexDirection: "column",
    },
    para4: {
        fontSize: '15rem',
        //paddingLeft:20,margin
        fontWeight: 'bold',
        fontStyle: "italic",
        color: "#efdcd5",
        marginLeft: 0,
    },
    newAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => {
    return {
        email: state.auth.signupEmail,
        username: state.auth.signupUsername,
        password: state.auth.signupPassword,
        confirmPassword: state.auth.signupConfirmPassword,
        loading: state.auth.signupLoading
    };
};

export default connect(mapStateToProps, actions)(Signup);

//TODO
//connect to the backend