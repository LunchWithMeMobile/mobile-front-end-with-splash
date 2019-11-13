import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    MAPTIME
}from '../../api/API';
import * as actions from '../../redux/actions';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class TimePickerScreen extends Component {
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
        this.props.startTimePicked(moment(date).format('LTS'));
    }

    setEndTime = (event, date) => {
        date = date || this.state.endDate;
        this.setState({
            endShow: Platform.OS === 'ios' ? true : false,
            endDate: date,
        });

        this.props.endTimePicked(moment(date).format('LTS'));
        console.log(this.state.endDate);
        console.log(this.state.startDate);
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
    
    sendTime(){
       const{endDate,startDate}=this.state;
        this.validate()
    }

    validate() {
       const{endDate,startDate}=this.state;
        if(moment(startDate).isSameOrAfter(endDate)) {
            Alert.alert(
                'Invalid!',
                'Start time should be same or before the end time',
                [
                    { text: 'Ok' },
                ],
            );
        } 
        // else if(moment().isAfter(startDate)) {
        //     Alert.alert(
        //         'Invalid!',
        //         'Start time should be same or after the current time',
        //         [
        //             { text: 'Ok' },
        //         ],
        //     );
        // }
        else {
            //const st=startDate
            //console.log("jagcjahca"+st)
            const tmp2=startDate.toISOString().slice(0,19)
            const tmp=endDate.toISOString().slice(0,19)
            console.log("start time is "+tmp2);
            console.log("end time is "+tmp);
            this.props.navigation.navigate('MapScreen',{val1:tmp,val2:tmp2});
        }
    }

    render() {
        const { startDate, startShow, endDate, endShow } = this.state;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.item}>
                        <Text style={styles.time}>{moment(startDate).format('LTS')}</Text>
                        {/* <Text>{startDate.toISOString()}</Text> */}
                        <TouchableOpacity style={styles.btn} onPress={this.startTimepicker}>
                            <Text style={styles.btnText}>Select Start Time</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.time}>{moment(endDate).format('LTS')}</Text>
                        {/* <Text>{endDate.toISOString()}</Text> */}
                        <TouchableOpacity style={styles.btn} onPress={this.endTimepicker}>
                            <Text style={styles.btnText}>Select End Time</Text>
                        </TouchableOpacity>
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

                  <Text>Your next step is to select the place you want to dine</Text>
                <TouchableOpacity style={[styles.btn, {width: 100, marginVertical: 15}]} onPress={() => this.sendTime()}><Text>Next</Text></TouchableOpacity>
              
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
    },
    btn: {
        backgroundColor: '#c97b63',
        width: 'auto',
        height: '40rem',
        borderRadius: '15rem',
        elevation: 3,
        textAlign: "center",
        marginTop: '10rem',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '8rem'
    },
    btnText: { 
        color: 'white', 
        fontSize: 15 
    },
    time: {
        fontSize: '18rem',
        color: '#222'
    }
});

export default connect(null, actions)(TimePickerScreen);