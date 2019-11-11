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
            DOB:'17-11-1997',//moment().format('DD-MM-YYYY'),
            //EditDOB:false,
            fullName: 'Yasuri Ratnayake',
            username:'yasuriiii',
            //EditFullName:false,
            Address:'Kandy',
            //EditAddress:false,
            Description:'mora',
            //EditDescription:false,
            
           // Telephone: '',
           // EditTelephone:false,
            profession: 'Student',
            Email:'yasuriratnayake@gmail.com'
        }
    }

  /*   onFullnameChanged(value){
      this.props.ProfileFullNameChanged(value);

    } */

    render() {
        return (
            <View style={styles.MainContainer}>
      
          <View style={styles.ovalBack}>
            <ImageBackground source={profile1} style={{width: '100%', height:'100%',borderBottomEndRadius:0,borderBottomStartRadius:0}}>
              <View  style={styles.ovalBack2}>
              <View style={{flexDirection:'row',position:'relative',alignItems:'center',marginTop:'12%'}}>
              
               
             
              <View><View style={styles.ovalPro}><Image source={profile1} style={{width: '100%', height:'100%',borderRadius:900,overflow:'hidden',}}/></View></View>
              
              </View>
              
              </View>
              </ImageBackground>
             
              
            </View> 
           
              
            
            <View style={styles.heading}>
             <Text style={styles.headingText}>{this.state.username}</Text>
            
            </View>
             
            <ScrollView>
            <View style={styles.body}>
   
   <View style={styles.cardP}>
  
     <Text styles={styles.bio}>Personal Details</Text>
     <View>
       <Text>Full Name:</Text>
       <View style={{flexDirection:'row'}}> 
       <View>
       <Text>
          {this.state.fullName}
         {/*  //editable={this.state.EditFullName}
          //onChangeText={text => this.onFullnameChanged(text)}
          //onChangeText={(fullName)=>this.setState({fullName})} */}

          </Text>
       </View>
    
       </View> 
       
       <Text>Date of Birth:</Text>
       <View style={{flexDirection:'row'}}> 
       <View>

         
 </View>
      
       </View>
       
       

       <Text>Address:</Text>
      <View style={{flexDirection:'row'}}> 
       <View> 
      <Text>
         {this.state.Address}
         {/*  //editable={this.state.EditAddress}
          //onChangeText={(Address)=>this.setState({Address})} */}
          </Text>
      </View>
      
       </View> 
      
       
       <Text>Email:</Text> 
      <View style={{flexDirection:'row'}}> 
       <View> 
      <Text>
         {this.state.Email}
        {/*  //editable={this.state.EditEmail}
        //onChangeText={(Email)=>this.setState({Email})} */}
        </Text>
      </View>
      
       </View>
   

      <Text>profession:</Text> 
      <View style={{flexDirection:'row'}}> 
       <View> 
      <Text>
         {this.state.profession}
        {/*  //editable={this.state.EditEmail}
        //onChangeText={(Email)=>this.setState({Email})} */}
        </Text>
      </View>
      
       </View>
   
       
        
       
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
       height:'1100rem'
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
        height:'70rem',
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
