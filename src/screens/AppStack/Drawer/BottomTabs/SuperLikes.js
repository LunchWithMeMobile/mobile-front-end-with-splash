import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import ListItem from './ListItem.js';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class SuperLikes extends Component {


    constructor(){

        super();
        this.state={
            isLoading:false,
            dataSource:[],
        }
    }
    
    componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json())
        .then((responseJson)=>{
          this.setState(
            {
              isLoading:false,
              dataSource:responseJson,
            }
          )
            //console.log(responseJson);
        }).catch((err)=>{
          alert(err);
        })
    
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
        <Text>this is a flatlist</Text>
           <FlatList style={styles.flatList}
           data={this.state.dataSource}
           refreshing={true}
           renderItem={(item,key)=>{return (<ListItem 
                        
                                      username={item.item.username} 
                                      fullname={item.item.username} 
                                      occupation={item.item.address.city} 
           
           
           
                                               />);
           
                                            }}
           keyExtractor={item=>item.id}
           />
             </View>
        );
    }
}

const styles = EStyleSheet.create({
   
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
});

export default SuperLikes;
