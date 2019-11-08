import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    TextInput,
    Picker,
    Alert,
    AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from 'react-native-datepicker';
import RadioForm from 'react-native-simple-radio-button';
import moment from 'moment';
import * as actions from '../../redux/actions';
import backgound from '../../assests/Images/back.jpg';
import Imagepicker from '../../components/imagepicker.js'

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

let gender = [
    { label: "female", value: 'female' },
    { label: "male", value: 'male' },
    { label: "other", value: 'other' }
];

class Signup2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
           // dateOfBirth: moment().format('DD-MM-YYYY'),
            fullname: '',
            //gender: '',
           // message: '',
           // telephone: '',
          //  profession: '',
        };
    }

    onFullnameChanged(value) {
        this.props.RFullnameChanged(value);
    }

    onTelephoneChanged(value) {
        this.props.RTelephoneChanged(value);
    }

    onDOBChanged(value) {
        this.props.RDOBChanged(value);
    }

    onGenderChanged(value) {
        this.props.RGenderChanged(value);
    }
    onDescriptionChanged(value) {
        this.props.RDescriptionChanged(value);
    }
    onProfessionChanged(value) {
        this.props.RProfessionChanged(value);
    }
    onInterestedProfessionChanged(value){

        this.props.InterestedProfessionChanged(value);
    }

    onSubmitPressed() {
        
        
        const {fname,gender,dob,description,telephone,profession,email,intProfession}=this.props
        this.validate(fname,gender,dob,description,telephone,profession,email,intProfession);

        // this.props.RDetails(fname,gender,dob,description,telephone,profession)
       // this.props.navigation.navigate('PreferenceSelect');
    }
   
    validate(fname,gender,dob,description,telephone,profession,email,intProfession) {
        //const { fname, gender, description, telephone, profession } = this.props; 
        console.log("hiii");
        //const { fname, gender, description, telephone, profession } = this.state;
        console.log(fname, gender, dob,description, telephone, profession,intProfession);
        if (fname === '' || gender === '' || description === '' || telephone === '' || profession === '',intProfession==='') {
            Alert.alert(
                'Error!',
                'Please fill all the fields',
                [
                    { text: 'Ok' },
                ],
            );
        } else {
            // this.props.submitUserDetails()
            this.props.RDetails(fname,gender,dob,description,telephone,profession,email,intProfession)
            
        }
    }

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <ImageBackground source={backgound} blurRadius={10} style={{ width: '100%', height: '100%' }}>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.txtH}>Create Account</Text>
                            <Text style={styles.txt}>Full Name*</Text>
                            <TextInput
                                style={styles.txt2}
                                placeholder="Enter Full Name"
                                value={this.state.fname}
   
                                onChangeText={text => this.onFullnameChanged(text)}
                                placeholderTextColor="#D5AFAF"
                            />
                            <Text style={styles.txt}>Gender*</Text>
                            <RadioForm
                                radio_props={gender}
                                initial={-1}
                                onPress={(value) => {this.onGenderChanged(value) }}
                                buttonSize={12}
                                selectedButtonColor={'black'}
                                buttonColor={'grey'}
                                //labelColor={'#fffffb'}
                                labelStyle={{ fontSize: 15, color: '#fffffb', fontWeight: "bold" }}
                            //buttonOuterSize={12}
                            />
                            <Text style={styles.txt}>Date of Birth*</Text>
                            <DatePicker
                                style={{ width: 200 }}
                                date={this.state.dob} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-01-1900"
                                maxDate="01-01-2500"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                        //color:'#fffffb'
                                    },
                                    dateText: {
                                        fontSize: 14,
                                        color: '#D5AFAF'
                                    }
                                }}
                                onDateChange={(date) => { this.onDOBChanged(date) }}
                            />
                            <Text style={styles.txt}>Description about yourself*</Text>
                            <TextInput style={styles.txt2}
                                placeholder="Self Description"
                                //secureTextEntry={true}
                                onChangeText={text => this.onDescriptionChanged(text)}
                                placeholderTextColor="#D5AFAF"
                            />
                            <Text style={styles.txt}>Mobile Number* </Text>
                            <TextInput style={styles.txt2}
                                //style={styles.input}
                                placeholder="Mobile Number"
                                //secureTextEntry={true}
                                value={this.state.telephone}
                                onChangeText={text => this.onTelephoneChanged(text) }
                                placeholderTextColor="#D5AFAF"
                            />
                            <Text style={styles.txt}>Select Your Occupation*</Text>
                            <Picker
                                //selectedValue={this.state.profession}
                                style={{ height: 50, width: 150, color: "#D5AFAF" }}
                                selectedValue={this.state.profession}
                                onValueChange={(itemValue) =>
                                    this.onProfessionChanged(itemValue)
                                }>
                                <Picker.Item label="student" value="student" />
                                <Picker.Item label="software Developer" value="softwareDeveloper" />
                                <Picker.Item label="Doctor" value="doctor" />
                                <Picker.Item label="Professor" value="professor" />
                                <Picker.Item label="Other" value="other" />
                            </Picker>
                            <Text style={styles.txt}>Select the prefered Occupation of the partner*</Text>
                            <Picker
                                //selectedValue={this.state.profession}
                                style={{ height: 50, width: 150, color: "#D5AFAF" }}
                                selectedValue={this.state.profession}
                                onValueChange={(itemValue) =>
                                    this.onInterestedProfessionChanged(itemValue)
                                }>
                                <Picker.Item label="student" value="student" />
                                <Picker.Item label="software Developer" value="softwareDeveloper" />
                                <Picker.Item label="Doctor" value="doctor" />
                                <Picker.Item label="Professor" value="professor" />
                                <Picker.Item label="Other" value="other" />
                            </Picker>
                            <Imagepicker/>
                            <Text>Fill the preference to obtain a  better service</Text>
                            <TouchableOpacity
                                onPress={() => this.onSubmitPressed()}
                                style={styles.signInB}
                            >
                                <Text style={{ color: 'white', fontSize: 15 }}>submit</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:'rgb(230, 204, 179)',
        backgroundColor: '#C89696',
        width: "100%",
        height: "100%",
        //borderWidth: 3,
        //borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInB: {
        backgroundColor: '#c97b63',
        width: '120rem',
        height: '40rem',
        borderRadius: '15rem',
        elevation: 3,
        textAlign: "center",
        marginTop: '10rem',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtH: {
        color: "#fffffb",
        //textAlign:"center",
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 25

    },
    txt: {
        color: "#fffffb",
        //textAlign:"center",
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 15

    },
    txtt: {
        color: "#fffffb",
        //textAlign:"center",
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 20

    },
    txt2: {
        color: "#fffffb",
        //textAlign:"center",
        //marginTop:15,
        fontWeight: "bold",
        fontSize: 15

    },
    input: {
        borderColor: '#fffffb',
        //backgroundColor:'rgba(240,208,193,0.5)' ,
        height: 40,
        width: 150,
        marginBottom: 10,
        marginTop: 10,
        color: '#fffffb',
        //borderRadius:20,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    btn: {
        //backgroundColor: '#DDDDDD',
        color: "#D5AFAF",
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
    }
});
const mapStateToProps = state => {
    return {
        fname: state.auth2.fname,
        gender:state.auth2.gender,
       telephone: state.auth2.telephone,
       dob: state.auth2.dob,
       description: state.auth2.description,
        profession:state.auth2.profession,
        email:state.auth.signupEmail,
        intProfession:state.auth2.intProfession,
       // loading: state.auth.loginLoading
    };
};
export default connect(mapStateToProps, actions)(Signup2);