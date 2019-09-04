import React, { Component } from 'react';
import { View, Image, Dimensions, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Entypo';
import NavigationService from '../services/NavigationService';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class HeaderRight extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={onPress.bind(this)}>
                <View style={styles.mainContainerStyle}>
                    <Icon
                        name={'chat'}
                        style={styles.iconStyle}
                        size={EStyleSheet.value('25rem')}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const onPress = () => {
    NavigationService.navigate('ChatStackNavigator');
}

const styles = EStyleSheet.create({
    mainContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: '0rem',
        paddingHorizontal: '15rem'
    },
    iconStyle: {
        justifyContent: 'center',
        color: '#222'
    }

});

export { HeaderRight };
