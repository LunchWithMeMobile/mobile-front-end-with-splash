import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Notifications extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>Notifications</Text>
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

export default Notifications;
