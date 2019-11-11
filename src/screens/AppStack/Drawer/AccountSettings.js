import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    StyleSheet
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SwitchToggle from 'react-native-switch-toggle';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //switchOn1: false,
          switchOn0: false,
          switchOn1: false,
          switchOn2: false,
          switchOn3: false,
          switchOn4: false,
          switchOn5: false,
          switchOn6: false,
          switchOnAll:false,
          //switchOn4: false
        };
      }
      onPressAll = () => {
        this.setState({ switchOnAll: !this.state.switchOnAll });
        this.setState({ switchOn1:! this.state.switchOnAll });
        this.setState({ switchOn2: !this.state.switchOnAll });
        this.setState({ switchOn3: !this.state.switchOnAll });
        this.setState({ switchOn4: !this.state.switchOnAll });
        this.setState({ switchOn5: !this.state.switchOnAll });
        this.setState({ switchOn6: !this.state.switchOnAll });
      }
      
      onPress0 = () => {
        this.setState({ switchOn0: !this.state.switchOn0 });
      }
      onPress1 = () => {
        this.setState({ switchOn1: !this.state.switchOn1 });
      }
      onPress2 = () => {
        this.setState({ switchOn2: !this.state.switchOn2 });
      }
      onPress3 = () => {
        this.setState({ switchOn3: !this.state.switchOn3 });
      }
      onPress4 = () => {
        this.setState({ switchOn4: !this.state.switchOn4 });
      }
      onPress5 = () => {
        this.setState({ switchOn5: !this.state.switchOn5 });
      }
      onPress6 = () => {
        this.setState({ switchOn6: !this.state.switchOn6 });
      }
    
    render() {
        return (
            <View style={styles.MainContainer}>
          <View style={styles1.contentBox}>
          <Text style={styles1.heading}>Hide Details</Text>
          
          <View style={{flexDirection:'row'}}>
          <View style={{padding:10}}>
          <Text style={{marginTop:18}}>Birthday     </Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'45%',marginRight:10}}>
              <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 60,
            height: 25,
            borderRadius: 12,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 25,
            height: 25,
            borderRadius: 16,
            backgroundColor: 'white', // rgb(102,134,205)
            elevation:4,
          }}
          switchOn={this.state.switchOn1}
          onPress={this.onPress1}
          circleColorOff='white'
          backgroundColorOn='#ffe0b2'
          circleColorOn='#ff7043'
          duration={500}
        />
        </View>
        </View>
        
              

                         
              
              
              <View style={{flexDirection:'row'}}>
          <View style={{padding:10}}>
          <Text style={{marginTop:18}}>Gender                  </Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'35%',marginRight:10}}>
              <SwitchToggle
          containerStyle={{
            marginTop: 16,
            width: 60,
            height: 25,
            borderRadius: 12,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          circleStyle={{
            width: 25,
            height: 25,
            borderRadius: 16,
            backgroundColor: 'white', // rgb(102,134,205)
            elevation:4,
          }}
          switchOn={this.state.switchOn4}
          onPress={this.onPress4}
          circleColorOff='white'
          backgroundColorOn='#ffe0b2'
          circleColorOn='#ff7043'
          duration={500}
        />
        </View>
        </View>
        



              
              <View style={{flexDirection:'row'}}>
                <View style={{padding:10}}>
                <Text style={{marginTop:18,color:'#e2664c',fontSize:18,fontWeight:'bold'}}>Trun on All </Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',marginLeft:'45%',marginRight:10}}>
                    <SwitchToggle
                containerStyle={{
                  marginTop: 16,
                  width: 70,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: '#ccc',
                  padding: 5,
                }}
                circleStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 18,
                  backgroundColor: 'white', // rgb(102,134,205)
                  elevation:4,
                }}
                switchOn={this.state.switchOnAll}
                onPress={this.onPressAll}
                circleColorOff='white'
                backgroundColorOn='#ffe0b2'
                circleColorOn='#e2664c'
                duration={500}
              />
              </View>
              </View>
       
       
        </View>
        
      </View>
        );
    }
}
const styles1=StyleSheet.create({
    mainContainer:{
          flex:1,
          backgroundColor:'#e6ded4',
    },
    contentBox:{
      width:'90%',
      margin:'10%',
      height:'70%',
      backgroundColor:'#feeff4',
      elevation:10,
      padding:'3%',
      marginTop:'8%',
      marginBottom:'8%'
    
    
    },
    contentBox1:{
      width:'80%',
      margin:'10%',
      height:'20%',
      backgroundColor:'#feeff4',
      elevation:10,
      padding:'3%'
    
    },
    heading:{
      color:'#353535',
      fontWeight:'bold',
      fontSize:17,
      marginTop:'3%'
    
    }
    
    
    });
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      marginTop: 50,
      justifyContent: 'center',
    },
  });
export default AccountSettings;
