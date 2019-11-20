import React, { Component } from 'react';
import {
    Dimensions,
    View,
    ImageBackground,
    StatusBar,
    Image,

} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from '../redux/actions';
import backgound from '../assests/Images/back.jpg';
import logo from '../assests/Images/Logo.png';
import AppTitle from '../assests/Images/AppTitle.png';
import { DotIndicator } from 'react-native-indicators';


const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = { hasToken: false };
    }

    componentDidMount() {
        setTimeout(() => {

            AsyncStorage.getItem('accessToken').then((accessToken) => {
                console.log("this is splash ");
                // console.log(accessToken);
                this.setState({ hasToken: accessToken !== null });  //hasToken is true if accessToken is available
                return accessToken;
            }).then((accessToken) => {
                if (this.state.hasToken) {
                    const keys = ['userName', 'userId'];
                    AsyncStorage.multiGet(keys).then((result) => {
                        const userName = result[0][1];
                        const userId = result[1][1];
                        this.props.setUserDetails(accessToken, userId, userName);
                        console.log("welcome to the splash Screeen");
                    });
                    this.props.navigation.navigate('App');
                } else {
                    this.props.navigation.navigate('Auth');
                }
            });





        }, 6000)

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <StatusBar backgroundColor="#a98274" barStyle="light-content" />
                <ImageBackground source={backgound} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.loginContainer}>
                        <View style={{marginTop:70,flex:1,width:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Image source={logo} style={{ width: '35%', height: '35%',resizeMode:'center' }} />
                        <Image source={AppTitle} style={{ resizeMode:'center', width:'70%' }} />
                        </View>
                       
                        <DotIndicator color={'#a98274'} size={EStyleSheet.value('10rem')} />
                    
                    </View>

                   
                </ImageBackground>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(30,14,4,0.7)",
        flex:1,
        alignItems:'center',



    },
});

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        password: state.auth.password,
        loading: state.auth.loginLoading
    };
};

export default connect(mapStateToProps, actions)(Splash);