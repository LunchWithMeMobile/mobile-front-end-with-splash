import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    Alert,
    Text,
} from 'react-native';
import AnimatedHideView from 'react-native-animated-hide-view';
import AsyncStorage from '@react-native-community/async-storage';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Entypo';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationService from '../services/NavigationService';
//import { mdiCalendarClock } from '@mdi/js';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class HeaderRight extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogoutBtnVisible: false
        };
    }

    componentDidUpdate() {
        // LayoutAnimation.easeInEaseOut();
    }

    onMapPress() {
        NavigationService.navigate('MapScreen');
    }
    onTimeSlotPress() {
        NavigationService.navigate('TimePickerScreen');
    }

    onChatPress() {
        NavigationService.navigate('ChatStackNavigator');
    }

    onMenuPress() {
        this.setState.isLogoutBtnVisible = this.setState({
            isLogoutBtnVisible: !this.state.isLogoutBtnVisible
        });
    }

    renderLogoutBtn() {
        if (this.state.isLogoutBtnVisible) {
            return (
                <TouchableOpacity
                    style={styles.logoutBtn}
                    onPress={() => this.showLogoutAlert()}
                >
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            );
        }
    }

    showLogoutAlert() {
        this.setState({ isLogoutBtnVisible: false });
        Alert.alert(
            'Logout',
            'Are you sure?',
            [
                { text: 'Cancel' },
                {
                    text: 'OK',
                    onPress: () => {
                        AsyncStorage.clear().then(() => NavigationService.navigate('Auth'));
                    }
                },
            ],
        );
    }

    render() {
        return (
            <View style={styles.mainContainerStyle}>
                <TouchableOpacity style={styles.touchable} onPress={() => this.onTimeSlotPress()}>
                    <Icon
                        name={'time-slot'}
                        style={styles.iconStyle}
                        size={EStyleSheet.value('25rem')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={() => this.onMapPress()}>
                    <Icon
                        name={'location'}
                        style={styles.iconStyle}
                        size={EStyleSheet.value('25rem')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={() => this.onChatPress()}>
                    <Icon
                        name={'chat'}
                        style={styles.iconStyle}
                        size={EStyleSheet.value('25rem')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={() => this.onMenuPress()}>
                    <Icon
                        style={{ marginRight: EStyleSheet.value('0rem'), color: '#222' }}
                        name={'dots-three-vertical'}
                        size={EStyleSheet.value('25rem')}
                    />
                </TouchableOpacity>
                {this.renderLogoutBtn()}
            </View>
        );
    }
}


const styles = EStyleSheet.create({
    mainContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingRight: '10rem'
    },
    iconStyle: {
        justifyContent: 'center',
        color: '#222'
    },
    touchable: {
        paddingHorizontal: '8rem'
    },
    logoutBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    logoutText: {
        color: '#222',
        fontSize: EStyleSheet.value('16rem'),
        fontWeight: '900'
    }
});

export { HeaderRight };
