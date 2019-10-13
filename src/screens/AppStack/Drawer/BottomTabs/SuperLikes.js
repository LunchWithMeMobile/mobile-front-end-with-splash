import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import ListItem from '../../../../components/ListItem';
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


        render(){
                return(
                    <View>

                    <Text>super likes</Text>

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
