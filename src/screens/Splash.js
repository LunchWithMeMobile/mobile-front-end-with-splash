import React, { Component } from 'react';
import {
    Dimensions,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-community/async-storage';
import * as actions from '../redux/actions';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = { hasToken: false };
    }

    componentDidMount() {
        AsyncStorage.getItem('accessToken').then((accessToken) => {
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
                });
                this.props.navigation.navigate('App');
            } else {
                this.props.navigation.navigate('Auth');
            }
        });
    }

    render() {
        return (
            <View style={styles.mainContainer}>
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
});

const mapStateToProps = state => {
    return {
        username: state.auth.username,
        password: state.auth.password,
        loading: state.auth.loginLoading
    };
};

export default connect(mapStateToProps, actions)(Splash);

