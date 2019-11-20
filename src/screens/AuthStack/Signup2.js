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
    Image
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from 'react-native-datepicker';
import RadioForm from 'react-native-simple-radio-button';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import * as actions from '../../redux/actions';
import backgound from '../../assests/Images/back.jpg';
import Imagepicker from '../../components/imagepicker.js'
import NavigationService from '../../services/NavigationService';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

let gender = [
    { label: "female", value: 'female' },
    { label: "male", value: 'male' },
    { label: "other", value: 'other' }
];

const options = {
    title: 'Select Avatar',
    quality: 0.3

};
let fileName;
let fileType;
let uri;

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
            avatarSource: null,
            ImageData:""
        };
    }

    onFullnameChanged(value) {
        this.props.RFullnameChanged(value);
    }
    /* 
        onTelephoneChanged(value) {
            this.props.RTelephoneChanged(value);
        } */

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
    onInterestedProfessionChanged(value) {

        this.props.InterestedProfessionChanged(value);
    }

    pickImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log(response)
            if (!response.didCancel) {
                fileName = response.fileName;
                fileType = response.type;
                uri = response.uri;
                const source = { uri: response.uri };
                 data=response.data;
                 const imgdata={data:response.data}
                console.log(uri);
                this.setState({  
                    avatarSource: source,
                    ImageData:imgdata,

                });
                this.props.onImagePicked(source);
            }
        });
    }

    onSubmitPressed() {
        const { fname, gender, dob, description, profession, email, intProfession, image } = this.props;
        console.log("inside onSubmitPressed ");
        this.validate(fname, gender, dob, description, profession, email, intProfession, image);
    }

    validate(fname, gender, dob, description, profession, email, intProfession, image) {
        if (fname === '' || gender === '' || description === '' || image === null) {
            Alert.alert(
                'Error!',
                'Please fill all the fields',
                [
                    { text: 'Ok' },
                ],
            );
        } else {
            // this.props.submitUserDetails()
            NavigationService.navigate('PreferenceSelect');
        }
    }

    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                   
                    <ImageBackground source={backgound}  style={{ width: '100%', height: '100%' }}>
                        <View style={styles.loginContainer}>
                        <View style={{ padding: 10 ,paddingLeft:20}}>
                            <Text style={styles.txtH}>Create Account</Text>
                            <Text style={styles.txt}>Full Name</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Full Name"
                                value={this.props.fname}

                                onChangeText={text => this.onFullnameChanged(text)}
                                placeholderTextColor="#ddab9c"
                            />
                            {/* <TextInput style={styles.input}
                                        placeholder="email ..."
                                        value={this.props.email}
                                        onChangeText={(email) => this.onEmailChanged(email)}
                                        placeholderTextColor="#ddab9c"
                                    /> */}
                            <Text style={styles.txt}>Gender</Text>
                            <RadioForm
                                radio_props={gender}
                                initial={-1}
                                onPress={(value) => { this.onGenderChanged(value) }}
                                buttonSize={10}
                                selectedButtonColor={'#D5AFAF'}
                                buttonColor={'#fffff'}
                                //labelColor={'#fffffb'}
                                labelStyle={{ fontSize: 15, color: '#fffffb' }}
                            //buttonOuterSize={12}
                            />
                            <Text style={styles.txt}>Date of Birth*</Text>
                            <DatePicker
                                style={{ width: 200 }}
                                date={this.props.dob} //initial date from state
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
                                value={this.props.description}
                            />

                            <Text style={styles.txt}>Select Your Occupation*</Text>
                            <Picker
                                //selectedValue={this.state.profession}
                                style={{ height: 50, width: 250, color: "#D5AFAF" }}
                                selectedValue={this.props.profession}
                                onValueChange={(itemValue) =>
                                    this.onProfessionChanged(itemValue)
                                }>
                                <Picker.Item label="Engineer" value="Engineer" />
                                <Picker.Item label="Doctor" value="Doctor" />
                                <Picker.Item label="Lecturer" value="Lecturer" />
                                <Picker.Item label="Software developer" value="Software developer" />
                                <Picker.Item label="Businessman" value="Businessman" />
                                <Picker.Item label="Lawyer" value="Lawyer" />
                                <Picker.Item label="Sportsman" value="Sportsman" />
                                <Picker.Item label="Musician" value="Musician" />
                            </Picker>
                            <Text style={styles.txt}>Select the prefered Occupation of the partner*</Text>
                            <Picker
                                //selectedValue={this.state.profession}
                                style={{ height: 50, width: 250, color: "#D5AFAF" }}
                                selectedValue={this.props.intProfession}
                                onValueChange={(itemValue) =>
                                    this.onInterestedProfessionChanged(itemValue)
                                }>
                                <Picker.Item label="Engineer" value="Engineer" />
                                <Picker.Item label="Doctor" value="Doctor" />
                                <Picker.Item label="Lecturer" value="Lecturer" />
                                <Picker.Item label="Software developer" value="Software developer" />
                                <Picker.Item label="Businessman" value="Businessman" />
                                <Picker.Item label="Lawyer" value="Lawyer" />
                                <Picker.Item label="Sportsman" value="Sportsman" />
                                <Picker.Item label="Musician" value="Musician" />
                            </Picker>
                            <View style={{ width: '90%', height: 200 }}>
                                <TouchableOpacity
                                    onPress={this.pickImage.bind(this)}>
                                    <Text style={styles.btn}>select a profile picture*</Text>
                                </TouchableOpacity>
                                <Image source={this.state.avatarSource} style={{ width: '80%', height: '75%' }} />
                            </View>
                            <Text style={{ color: 'white', fontSize: 15,marginTop:10 }}>Fill the preference to obtain a  better service</Text>
                            <TouchableOpacity
                                onPress={() => this.onSubmitPressed()}
                                style={styles.signInB}
                            >
                                <Text style={{ color: 'white', fontSize: 15 }}>submit</Text>
                            </TouchableOpacity>
                        </View>
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
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(30,14,4,0.7)",
        alignItems: 'center',
        justifyContent: "center",
        elevation: 3,
        alignSelf: 'center',
    },
    loginContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(30,14,4,0.7)",
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
    input: {
        //borderColor:'#0000dd',
        //backgroundColor:'rgba(240,208,193,0.35)' ,
        height: '40rem',
        width: "100%",
        marginBottom: '30rem',
        marginTop: '10rem',
        color: '#D5AFAF',
        borderRadius: '20rem',
        paddingLeft: '20rem',
        //color: '#ffffff',
        borderColor: '#c97b63',
        borderStyle: 'solid',
        borderWidth: '1.5rem',
    },
    txtH: {
        color: "#fffffb",
        //textAlign:"center",
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 20

    },
    txt: {
        color: "#fffffb",
        //textAlign:"center",
        marginTop: 15,
        //fontWeight: "bold",
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
        gender: state.auth2.gender,
        telephone: state.auth2.telephone,
        dob: state.auth2.dob,
        description: state.auth2.description,
        profession: state.auth2.profession,
        email: state.auth.signupEmail,
        intProfession: state.auth2.intProfession,
        image: state.auth2.image,
        // loading: state.auth.loginLoading
    };
};
export default connect(mapStateToProps, actions)(Signup2);