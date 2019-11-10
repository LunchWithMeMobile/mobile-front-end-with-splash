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
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    
    MAPTIME
    
}from '../../api/API';

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
    }

    setEndTime = (event, date) => {
        date = date || this.state.endDate;
        this.setState({
            endShow: Platform.OS === 'ios' ? true : false,
            endDate: date,
        });

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
       const tmp2=startDate.toISOString().slice(0,19)
        const tmp=endDate.toISOString().slice(0,19)
        
        console.log("time is "+tmp2);
        console.log("time is "+tmp);
        
        /* fetch(MAPTIME, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
                starttime: tmp2,
                finishtime: tmp,
                email:'m@gmail.com'
            })
        }).then(response => {
            console.log(response);
            if (response.ok) {
                return response.json()
                    .then(resJson => {
                        console.log(resJson);
                        if (resJson.success) {
                            alert("time updated successfully ");
                            this.props.navigation.navigate('MapScreen')
                        } else {
                            
                           alert("failed update");
                        }
                    });
            } else {
               
                alert(
                    'map Failed!'
                    
                   
                );
            }
        }).catch(err => {
            console.log(err);
            //NavigationService.navigate('Signup2');
            
            alert(
               
                'request eke awulak',
                
            );
        });
    
         */

 this.props.navigation.navigate('MapScreen');
    }

    render() {
        const { startDate, startShow, endDate, endShow } = this.state;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.item}>
                        <Text>{moment(startDate).format('LTS')}</Text>
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

                  <Text>Your next step is to select the place you want to dine</Text>
                <TouchableOpacity onPress={() => this.sendTime()}><Text>Next</Text></TouchableOpacity>
              
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

export default TimePickerScreen;