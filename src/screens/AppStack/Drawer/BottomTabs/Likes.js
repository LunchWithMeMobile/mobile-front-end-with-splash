import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FlatList } from 'react-native-gesture-handler';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
const ListData=[
    {
        id:'1',
        name:"Niroshan",
        imgUrl:"dwdffwefwffef",
        description:'sfffffwefw ewfefwfw fwffef '

    },
    {
        id:'2',
        name:"Chandima",
        imgUrl:"dwdffwefwffef",
        description:'sfffffwefw ewfefwfw fwffef '


    },
    {
        id:'3',
        name:"Udara",
        imgUrl:"dwdffwefwffef",
        description:'sfffffwefw ewfefwfw fwffef '

    },
    {
        id:'4',
        name:"Yasuri",
        imgUrl:"dwdffwefwffef",
        description:'sfffffwefw ewfefwfw fwffef '

    },
    {
        id:'5',
        name:"Nethmee",
        imgUrl:"dwdffwefwffef",
        description:'sfffffwefw ewfefwfw fwffef '

    }
]
class Likes extends Component {
    constructor(){

        super();
        this.state={
            isLoading:false,
            dataSource:[],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(()=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
                dataSource:responseJson,
            })
        })

    }
    render() {
        return (
            <View style={styles.mainContainer}>
               <FlatList
               data={dataSource}
               renderItem={(item,key)=>{
                   console.log(`${key}`);
                   console.log(`Liked profile\n ${JSON.stringify(item)}`);
                   

                   
                   
               }}
               >


               </FlatList>
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
});

export default Likes;
