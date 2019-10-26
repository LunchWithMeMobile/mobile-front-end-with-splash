import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux'; 

import ListItem from '../../../../components/ListItem';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as actions from "../../../../redux/actions";
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class SuperLikes extends Component {


    constructor(){

        super();
        this.state={
            isLoading:false,
            dataSource:[],//useless
        }
        }
        renderItem(item){
           return( <ListItem 
           username={item.username}
            fullname={item.name}
            occupation={item.email}
        />
        )
        }
        fetchData(){
            //cannoty access two items at once by getItem()
            AsyncStorage.getItem('accessToken').then(accessToken => {
                AsyncStorage.getItem('userId').then(userId => {
                    this.props. getSuperLikeList(accessToken, userId);
                    //getLikesList is defined in AuthAction
                });
            });
        }

        componentDidMount(){
            this.fetchData();
        }


        render(){
            //alert(this.props.superLikeList);
            console.log(this.props.SuperLikeListLoading)
                return(
                   
                    <View>

                    <Text>super likes</Text>
                    <FlatList
                        data={this.props.SuperLikeList}//reduce eke thiyena ewa prop ekek widihata access karanna puluwan.
                        renderItem={({item})=>this.renderItem(item)}



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
    
});

const mapStateToProps=state=>{
return {
    SuperLikeListLoading:state.superLikes.superlikesListLoading,
    SuperLikeList:state.superLikes.superLikesList
}
}

export default connect(mapStateToProps,actions)(SuperLikes);
