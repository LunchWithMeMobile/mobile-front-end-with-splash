import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
    StatusBar,
    TextInput,
    Alert,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SkypeIndicator } from 'react-native-indicators';
import CheckBox from 'react-native-checkbox';

import checked from '../../assests/Images/checkboxChecked.png';
import unchecked from '../../assests/Images/checkboxUnchecked.png';
import backgound from '../../assests/Images/back.jpg';
import { REG_EMAIL_ADDRESS } from '../../config/Constants';
import * as actions from '../../redux/actions';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    onUsernameChanged(value) {
        this.props.loginUsernameChanged(value);
    }

    onPasswordChanged(value) {
        this.props.loginPasswordChanged(value);
    }

    onChecked(value) {
        this.setState({ isChecked: value });
    }

    onLoginPressed = () => {
        const { username, password } = this.props;
        this.validate(username, password);
    }

    validate(username, password) {
        if (username === '' || password === '') {
            Alert.alert(
                'Login Failed!',
                'Please fill all the fields',
                [
                    { text: 'Ok' },
                ],
            );
        } else {
            this.props.loginUser(username, password, this.state.isChecked);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ImageBackground source={backgound} style={{ width: '100%', height: '100%' }}>
                    <StatusBar backgroundColor="#a98274" barStyle="light-content" />
                    <KeyboardAvoidingView behaviour="padding" enabled>
                        <View style={styles.loginContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="User Name ..."
                                value={this.props.username}
                                onChangeText={text => this.onUsernameChanged(text)}
                                placeholderTextColor="#efebe9"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password ..."
                                secureTextEntry={true}
                                placeholderTextColor="#efebe9"
                                value={this.props.password}
                                onChangeText={text => this.onPasswordChanged(text)}
                            />
                            <View style={styles.check}>
                                <CheckBox
                                    label={'Remember me'}
                                    checked={this.state.isCheckedrue}
                                    onChange={(value) => this.onChecked(value)}
                                    checkboxStyle={{
                                        width: EStyleSheet.value('15rem'),
                                        height: EStyleSheet.value('15rem'),
                                    }}
                                    checkedImage={checked}
                                    uncheckedImage={unchecked}
                                />
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                                >
                                    <Text style={{ color: 'rgba(240,208,193,0.9)', marginLeft: 40, fontStyle: 'italic' }}>Forgot Password</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                this.props.loading ?
                                    <SkypeIndicator color={'white'} size={EStyleSheet.value('40rem')} />
                                    :
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => this.onLoginPressed()}
                                    >
                                        <Text style={styles.buttonText} >Log in</Text>
                                    </TouchableOpacity>
                            }
                            <Text style={{ color: "#ffffff", marginTop: 40, }}>or Log in with</Text>
                            <View style={styles.apiLogIn}>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={[styles.buttonSocialMd, { backgroundColor: '#3b5998', }]}
                                        onPress={_ => this._fbAuth()}>
                                        <Text style={styles.buttonText} >facebook</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        style={[styles.buttonSocialMd, { backgroundColor: '#0e76a8', }]}
                                        onPress={this.onPress}
                                    >
                                        <Text style={styles.buttonText} >LinkedIN</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.newAccount}>
                            <Text style={{ color: '#fffffb' }}>Don't have an account?</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Signup')}
                            >
                                <Text style={{ color: '#ffccbc', marginLeft: EStyleSheet.value('6rem'), marginBottom: EStyleSheet.value('7rem') }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaaaaa',
    },
    newAccount: {
        flexDirection: 'row',
        marginTop: '5rem',

        justifyContent: 'center',
    },
    apiLogIn: {
        flexDirection: 'row',
        marginTop: '30rem',
    },
    buttonContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center'

    },
    buttonSocialMd: {
        width: '95rem',
        height: '45rem',
        backgroundColor: '#3b5998',
        borderRadius: '10rem',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(255,255,255, .4)',
        shadowOffset: { height: 1, width: 1 },
    },
    cBox: {
        borderColor: '#ffffff',
    },
    check: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '300rem',
        paddingLeft: '10rem'

    },
    button: {
        backgroundColor: '#c97b63',
        width: '120rem',
        height: '35rem',
        marginTop: '30rem',
        borderRadius: '16rem',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: "900",
        fontSize: '12rem',
    },

    loginContainer: {
        width: "90%",
        height: "90%",
        backgroundColor: "rgba(30,14,4,0.7)",
        paddingLeft: '40rem',
        paddingRight: '30rem',
        alignItems: 'center',
        justifyContent: "center",
        paddingTop: '40rem',
        borderColor: '#c8b7b5',
        marginLeft: "5%",
        marginTop: "8%",
        borderRadius: '15rem'
    },
    input: {
        borderColor: '#0000dd',
        backgroundColor: 'rgba(240,208,193,0.35)',
        height: '40rem',
        width: "96%",
        marginBottom: '30rem',
        marginTop: '10rem',
        color: '#000000',
        borderRadius: '20rem',
        paddingLeft: '20rem',
        color: '#ffffff',
    },
    welcome: {
        fontSize: '20rem',
        textAlign: 'center',
        marginTop: '20rem',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: '5rem',
    },
});

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        password: state.auth.password,
        loading: state.auth.loginLoading
    };
};

export default connect(mapStateToProps, actions)(Login);
// TODO
// connect to the backend