/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from  "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import avatar from '../assests/Images/avatar.jpg';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

export default class ListItem extends React.Component{
 
  
  render(){
    const {username,fullname,occupation, image}=this.props;
    return(
        <View >
   
        <View style={styles.listItem}>
        
          <Image 
            style={styles.pic} 
            source={avatar}
            resizeMode={'cover'}
          />
         
          <View style={styles.info}> 
          <TouchableOpacity >
          <Text style={styles.heading}>{username}</Text>
          <Text style={styles.para}>{fullname}</Text>
          
          <Text style={styles.para}>{occupation}</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.like}>
          <TouchableOpacity style={styles.icon}>
          <View style={styles.icon}><Icon name="gratipay" size={40} color="#c97b63"  /></View>
          </TouchableOpacity>
          </View>
        </View>
     
      </View>
    );

  }

}

ListItem.propTypes ={
username: PropTypes.string,
 fullname: PropTypes.string,
  occupation:PropTypes.string
}
ListItem.defaultProps ={
   username:"userX",
    fullname:'X',
    occupation:"xyz"

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:0,
        backgroundColor:'#CCCED6'
    },
    flatList:{
      width:'100%',
      marginLeft:"4%",
      
    },
    like:{
      width:'20%',
      height:'90%'
  
    },
    icon:{
         marginRight:'6%',
          marginTop:'16%',
         // marginLeft:"4%"
    },
    pic:{
      width:80,
      height:80,
      borderRadius: 40,
      backgroundColor:'#DFE0E5',
      marginTop:'5%',
      borderRadius:200,
      marginLeft:'5%',
      
  
    },
    heading:{
      width:'60%',
      marginLeft:'8%',
      marginTop:'16%',
      //overflow:'hidden',
      //color:'#6a5353',
      color:'#c97b63',
      fontWeight:'bold',
      fontSize:15,
      fontStyle:'normal',
      fontFamily: 'Roboto',
  
  
    },
    info:{
          width:'60%',
          height:'100%',
          marginLeft:'3%'
          
    },
    para:{
        marginLeft:'7%',
       // color:'#857e7e',
          color:'#6a5353',
    },
    listItem:{
                width:'95%',
                height:120,
                backgroundColor:"#ffffff",
                margin:2 ,
                flex:1,
                flexDirection:'row',
                padding:1,
                elevation:2,
                borderRadius:5,
    },
  });
  

  