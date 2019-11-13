import React, { Component } from 'react';
import {
    Dimensions,
    View,
    ImageBackground,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CheckBox from 'react-native-checkbox';
import { SkypeIndicator } from 'react-native-indicators'; 
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';
import checked from '../../assests/Images/checkboxChecked.png';
import unchecked from '../../assests/Images/checkboxUnchecked.png';
import backgound from '../../assests/Images/back.jpg';
import { colors } from 'react-native-elements';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class PreferenceSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Food1: false,
            Food2: false,
            Food3: false,
            Food4: false,
            Food5: false,
            Food6: false,
            Hobbies1: false,
            Hobbies2: false,
            Hobbies3: false,
            Hobbies4: false,
            Hobbies5: false,
            Hobbies6: false,
            Hobbies7: false,
            Hobbies8: false,
            Hobbies9: false,
            Drinks1: false,
            Drinks2: false,
            Drinks3: false,
        };
    }

    onSubmitPressed() {
        const { fname, gender, dob, description,profession, intProfession, image, email } = this.props;
        const img = image.uri;
        console.log(img);
        const interests = [];
        if (this.state.Food1) {
            interests.push('Food1');
        }
        if (this.state.Food2) {
            interests.push('Food2');
        } 
        if (this.state.Food3) {
            interests.push('Food3');
        } 
        if (this.state.Food4) {
            interests.push('Food4');
        } 
        if (this.state.Food5) {
            interests.push('Food5');
        }
        if (this.state.Food6) {
            interests.push('Food6');
        }
        if (this.state.Hobbies1) {
            interests.push('Hobbies1')
        }
        if (this.state.Hobbies2) {
            interests.push('Hobbies2')
        }
        if (this.state.Hobbies3) {
            interests.push('Hobbies3')
        }
        if (this.state.Hobbies4) {
            interests.push('Hobbies4')
        }
        if (this.state.Hobbies5) {
            interests.push('Hobbies5')
        }
        if (this.state.Hobbies6) {
            interests.push('Hobbies6')
        }
        if (this.state.Hobbies7) {
            interests.push('Hobbies7')
        }
        if (this.state.Hobbies8) {
            interests.push('Hobbies8')
        }
        if (this.state.Hobbies9) {
            interests.push('Hobbies9')
        }
        if (this.state.Drinks1) {
            interests.push('Drinks1')
        }
        if (this.state.Drinks2) {
            interests.push('Drinks3')
        }
        if (this.state.Drinks3) {
            interests.push('Drinks3')
        }
        this.props.RDetails(fname, gender, dob, description, profession, email, intProfession, img, interests);
    }
 
    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ pddingVertical: 10, alignItems: "center" }}>
                <ImageBackground source={backgound} blurRadius={10} style={{ width: '100%', height: '100%' }}>
                    <StatusBar backgroundColor="#1b0000" barStyle="light-content" />
                    <View style={styles.Container}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Career Interest Areas</Text>
                            <CheckBox
                                label={'Conventional'}
                                checked={this.state.Food1}
                                onChange={(value) => this.setState({ Food1: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Investigative'}
                                checked={this.state.Food2}
                                onChange={(value) => this.setState({ Food2: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Social'}
                                checked={this.state.Food3}
                                onChange={(value) => this.setState({ Food3: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Realistic'}
                                checked={this.state.Food4}
                                onChange={(value) => this.setState({ Food4: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Artistic'}
                                checked={this.state.Food5}
                                onChange={(value) => this.setState({ Food5: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Enterprising'}
                                checked={this.state.Food6}
                                onChange={(value) => this.setState({ Food6: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Hobbies</Text>
                            <CheckBox
                                label={'Reading'}
                                checked={this.state.Hobbies1}
                                onChange={(value) => this.setState({ Hobbies1: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Traveling'}
                                checked={this.state.Hobbies2}
                                onChange={(value) => this.setState({ Hobbies2: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Fishing'}
                                checked={this.state.Hobbies3}
                                onChange={(value) => this.setState({ Hobbies3: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Crafts'}
                                checked={this.state.Hobbies4}
                                onChange={(value) => this.setState({ Hobbies4: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Television'}
                                checked={this.state.Hobbies5}
                                onChange={(value) => this.setState({ Hobbies5: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Bird watching'}
                                checked={this.state.Hobbies6}
                                onChange={(value) => this.setState({ Hobbies6: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Collecting'}
                                checked={this.state.Hobbies7}
                                onChange={(value) => this.setState({ Hobbies7: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Music'}
                                checked={this.state.Hobbies8}
                                onChange={(value) => this.setState({ Hobbies8: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Video Games'}
                                checked={this.state.Hobbies9}
                                onChange={(value) => this.setState({ Hobbies9: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>Types of foods</Text>
                            <CheckBox
                                label={'Drinks1'}
                                checked={this.state.Drinks1}
                                onChange={(value) => this.setState({ Drinks1: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Drinks2'}
                                checked={this.state.Drinks2}
                                onChange={(value) => this.setState({ Drinks2: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                            <CheckBox
                                label={'Drinks3'}
                                checked={this.state.Drinks3}
                                onChange={(value) => this.setState({ Drinks3: !value })}
                                checkboxStyle={{
                                    width: EStyleSheet.value('15rem'),
                                    height: EStyleSheet.value('15rem'),
                                }}
                                containerStyle={{
                                    padding: EStyleSheet.value('5rem')
                                }}
                                checkedImage={checked}
                                uncheckedImage={unchecked}
                            />
                        </View>
                        <View style={styles.section}>
                            {
                                this.props.loading ?
                                <SkypeIndicator color={'white'} size={EStyleSheet.value('40rem')} />
                                :
                                <TouchableOpacity
                                onPress={() => this.onSubmitPressed()}
                                style={styles.signInB}
                                >
                                    <Text style={{ color: 'white', fontSize: 15 }}>Submit</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const styles = EStyleSheet.create({
    Container: {
        backgroundColor: "rgba(40,24,14,0.7)",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '15rem'
    },
    FormContainer1: {
        width: "96%",
        height: "100%",
        flex: 2,
        flexDirection: "row",
        margin: '15rem',
    },
    FormContainer12: {

        width: "65%",
        backgroundColor: "rgba(255,243,224,0.8)",
        flexDirection: "column",
        flex: 2
    },
    section: {
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    title: {
        fontSize: '24rem',
        color: '#fff',
        paddingVertical: '15rem'
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
        alignItems: 'center',
        marginVertical: '8rem'
    },
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
        signupEmail: state.auth.signupEmail,
        loading: state.auth2.loading 
    };
};

export default connect(mapStateToProps, actions)(PreferenceSelect);
