import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    Button
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class SuperLikes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            startShow: false,
            endDate: new Date(),
            endShow: false,
        }
    }

    setStartTime = (event, date) => {
        date = date || this.state.startDate;
        this.setState({
            startShow: Platform.OS === 'ios' ? true : false,
            startDate: date,
        });
    }

    setEndTime = (event, date) => {
        date = date || this.state.endDate;
        this.setState({
            endShow: Platform.OS === 'ios' ? true : false,
            endDate: date,
        });
    }

    startTimepicker = () => {
        this.setState({
            startShow: true,
        });
    }

    endTimepicker = () => {
        this.setState({
            endShow: true,
        });
    }

    render() {
        const { startDate, startShow, endDate, endShow } = this.state;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.item}>
                        <Text>{moment(startDate).format('llll')}</Text>
                        <Text>{startDate.toISOString()}</Text>
                        <Button onPress={this.startTimepicker} title="Select Start Time!" />
                    </View>
                    <View style={styles.item}>
                        <Text>{moment(endDate).format('LTS')}</Text>
                        <Text>{endDate.toISOString()}</Text>
                        <Button onPress={this.endTimepicker} title="Select End Time!" />
                    </View>
                </View>
                {startShow && <DateTimePicker
                    value={startDate}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={this.setStartTime}
                />
                }
                {endShow && <DateTimePicker
                    value={endDate}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={this.setEndTime}
                />
                }
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
    buttonContainer: {
        flex: 1,
        height: '200rem',
        width: entireScreenWidth,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default SuperLikes;
