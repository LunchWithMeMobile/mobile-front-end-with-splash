import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Picker,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
//import RadioForm from 'react-native-simple-radio-button';

import profile1 from '../../../assests/Images/profiles1.jpg';
import unlock2 from '../../../assests/Images/unlock2.png';
import cam2 from '../../../assests/Images/cam2.png';
import pencil from '../../../assests/Images/pencil.png';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class ProfileSettings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            DOB: moment().format('DD-MM-YYYY'),
            EditDOB:false,
            fullName: 'xxxxxxxxxxx xxxxxxxxx',
            EditFullName:false,
            Address:'xxxxxx',
            EditAddress:false,
            Description:'xxxxxxx',
            EditDescription:false,
            
            Telephone: 'xxxxxx',
            EditTelephone:false,
            profession: '',
        }
    }

    onFullnameChanged(value){
      this.props.ProfileFullNameChanged(value);

    }

    render() {
        return (
            <View style={styles.MainContainer}>
      
            <View style={styles.ovalBack}>
            <ImageBackground source={profile1} style={{width: '100%', height:'100%',borderBottomEndRadius:0,borderBottomStartRadius:0}}>
              <View  style={styles.ovalBack2}>
              <View style={{flexDirection:'row',position:'relative',alignItems:'center',marginTop:'12%'}}>
              <TouchableOpacity style={styles.ovalEdit1}
                      //onPress={() => this.props.navigation.navigate('Details')}
      
              >
                <Image  source={unlock2} style={{alignSelf:'center',marginTop:13}}/>
               
              </TouchableOpacity>
              <View><View style={styles.ovalPro}><Image source={profile1} style={{width: '100%', height:'100%',borderRadius:900,overflow:'hidden',}}/></View></View>
              <TouchableOpacity style={styles.ovalEdit2 } onPress={this.onPress}><Image source={cam2} style={{alignSelf:'center',marginTop:13}}/></TouchableOpacity>
              </View>
              
              </View>
              </ImageBackground>
             
              
            </View>
           
              
            
            <View style={styles.heading}>
            <Text style={styles.headingText}>Jane Doe</Text>
            <Text style={styles.bio}>"bla bla bla"</Text>
            
            </View>
            
            <ScrollView>
            <View style={styles.body}>
   
   <View style={styles.cardP}>
  
     <Text styles={styles.bio}>Personal Details</Text>
     <View>
       <Text>Full Name:</Text>
       <View style={{flexDirection:'row'}}> 
       <View>
       <TextInput
          value={this.state.fullName}
          editable={this.state.EditFullName}
          onChangeText={text => this.onFullnameChanged(text)}
          //onChangeText={(fullName)=>this.setState({fullName})}

       />
       </View>
       <View>
         <TouchableOpacity
         onPress={()=>this.setState({EditFullName:!this.state.EditFullName})}
        >
           <Image source={pencil} style={styles.pencilIcon}

           />
         </TouchableOpacity>
       </View>
       </View> 
       
       <Text>Date of Birth:</Text>
       <View style={{flexDirection:'row'}}> 
       <View>

         <DatePicker
   style={{width: 200}}
  date= {this.state.DOB}//initial date from state
   mode="date" //The enum of date, datetime and time
   placeholder="select date"
   format="DD-MM-YYYY"
   minDate="01-01-1990"
   maxDate="01-01-2019"
   confirmBtnText="Confirm"
   cancelBtnText="Cancel"
   customStyles={{
     dateIcon: {
       position: 'absolute',
       left: 0,
       top: 4,
       marginLeft: 0
     },
     dateInput: {
       marginLeft: 36
     }
   }}
   onDateChange={(date) => {this.setState({date: date})}}
 />
 </View>
       <View>
         <TouchableOpacity
         onPress={()=>this.setState({EditDOB:!this.state.EditDOB})}
        >
           <Image source={pencil} style={styles.pencilIcon}

           />
         </TouchableOpacity>
       </View>
       </View>
       
       

       <Text>Address:</Text>
      <View style={{flexDirection:'row'}}> 
       <View> 
      <TextInput
         value={this.state.Address}
          editable={this.state.EditAddress}
          onChangeText={(Address)=>this.setState({Address})}
      />
      </View>
      <View>
         <TouchableOpacity
         onPress={()=>this.setState({EditAddress:!this.state.EditAddress})}

        >
           <Image source={pencil} style={styles.pencilIcon}

           />
         </TouchableOpacity>
       </View>
       </View> 
       <Text>Telephone number:</Text> 
      <View style={{flexDirection:'row'}}> 
       <View> 
      <TextInput
        value={this.state.Telephone}
        editable={this.state.EditTelephone}
        onChangeText={(Telephone)=>this.setState({Telephone})}
      />
      </View>
      <View>
         <TouchableOpacity
         onPress={()=>this.setState({EditTelephone:!this.state.EditTelephone})}
        >
           <Image source={pencil} style={styles.pencilIcon}

           />
         </TouchableOpacity>
       </View>
       </View> 
       <Text>Email:</Text> 
      <View style={{flexDirection:'row'}}> 
       <View> 
      <TextInput
         value={this.state.Email}
         editable={this.state.EditEmail}
        onChangeText={(Email)=>this.setState({Email})}
      />
      </View>
      <View>
         <TouchableOpacity
         onPress={()=>this.setState({EditEmail:!this.state.EditEmail})}
        >
           <Image source={pencil} style={styles.pencilIcon}

           /> 
         </TouchableOpacity>
       </View>
       </View>
   

      <Text>Occupation:</Text> 
      <Picker
                                selectedValue={this.state.job}
                                style={{ height: 50, width: 150, color: "#D5AFAF" }}
                                selectedValue={this.state.profession}
                                onValueChange={(itemValue) =>
                                    this.setState({ profession: itemValue })
                                }>
                                <Picker.Item label="student" value="student" />
                                <Picker.Item label="software Developer" value="softwareDeveloper" />
                                <Picker.Item label="Doctor" value="doctor" />
                                <Picker.Item label="Professor" value="professor" />
                                <Picker.Item label="Other" value="other" />
                            </Picker>
        
       <Text>Description about the job:</Text>
       <View style={{flexDirection:'row'}}>
       <View>
       <TextInput
         multiline={true}
         numberOfLines={3}
         editable={false}
         onChangeText={(txt)=>this.setState({Description:txt})}
         value={this.state.Description}
       />
       </View>
         <View>
         <TouchableOpacity
         onPress={()=>this.setState({EditDescription:!this.state.EditDescription})}
        >
           <Image source={pencil} style={styles.pencilIconD}

           />
         </TouchableOpacity>



       </View>
       </View>
        
       <TouchableOpacity
                                        style={styles.buttonSocialMd}
                                        onPress={this.onPress}
                                    >
                                        <Text style={styles.buttonText} >Save Changes</Text>
                                    </TouchableOpacity>
      
     </View>
    
   </View>
   
            </View>
            </ScrollView>
            
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
   
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
      pencilIcon:{
        marginTop:15,
        marginLeft:150,
      },
      pencilIconD:{
        marginTop:15,
        marginLeft:150,
      },
      card1:{
        elevation:12,
        width:'100%',
        height:'50%'
    
      },
      buttonSocialMd: {
        width: '95rem',
        height: '40rem',
        backgroundColor: '#c97b63',
        borderRadius: '10rem',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(255,255,255, .4)',
        shadowOffset: { height: 1, width: 1 },
    },
      cardP:{
        width:'90%',
        backgroundColor:'#ffffff',
        borderColor:'#efdcd5',
        borderStyle:'solid',
        marginTop:'5%',
        //height:500,
        elevation:13,
        padding:'5%',
    
      },
      body:{
        width:'100%',
        backgroundColor:'#ffffe4',
        alignItems:'center',
       // justifyContent:'center',
       height:'1020rem'
      },
      bio:{
          fontSize:15,
          fontWeight:'700',
      },
      heading:{
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        color:'#000',
        marginTop:90,
        width:'100%',
        height:'100rem',
        borderBottomColor:'rgba(100,100,100,0.4)',
        borderBottomWidth:1,
        paddingBottom:20,
        //backgroundColor:'#efdcd5',
      },
      headingText:{
        color:"#111111",
        fontSize:20,
        fontWeight:'bold'
      },
      ovalBack:{
          width:'100%',
          height:'160rem',
          backgroundColor:'#222222',
          //borderBottomStartRadius:200,
          //borderBottomEndRadius:200,
          marginTop:0,
          //justifyContent:'center',  
          //alignItems:'center',
          elevation:4,
    
      },
      ovalBack2:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.6)',
        //borderBottomStartRadius:170,
        //borderBottomEndRadius:170,
        marginTop:0,
        justifyContent:'center',
        alignItems:'center',
        elevation:3,
        overflow:'visible',
    
    },
      ovalPro:{
        width:170,
        height:170,
        borderRadius:200,
        backgroundColor:'#FF355E',
        marginTop:70,
        overflow:'visible',
        elevation:7,
      },
      ovalEdit1:{
        width:60,
        height:60,
        borderRadius:200,
        backgroundColor:'#FF355E',
        marginTop:70,
       // overflow:'visible',
        elevation:10,
        marginLeft:25,
        marginRight:25,
    
      },
      ovalEdit2:{
        width:60,
        height:60,
        borderRadius:200,
        backgroundColor:'#FF355E',
        marginTop:70,
        //overflow:'visible',
        elevation:10,
        marginRight:0,
        marginLeft:25,
    
      },
});

export default ProfileSettings;
