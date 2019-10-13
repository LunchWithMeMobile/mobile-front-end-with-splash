import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    FlatList,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions';
import ListItem from '../../../../components/ListItem';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
/*const ListData=[
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
]*/
class Likes extends Component {
    constructor(){
        super();
        this.state={
            isLoading:false,
            dataSource:[],
        }
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users').then(()=>response.json())
        // .then((responseJson)=>{
        //     this.setState({
        //         isLoading:false,
        //         dataSource:responseJson,
        //     })
        // })
        this.fetchData();
    }

    fetchData() {
        AsyncStorage.getItem('accessToken').then(accessToken => {
            AsyncStorage.getItem('userId').then(userId => {
                this.props.getLikesList(accessToken, userId);
            });
        });
    }

    renderItem(item) {
        console.log(item);
        return(
            <ListItem 
                username={item.username}
                fullname={item.name}
                occupation={item.email}
            />
        )
    } 

    renderEmptyList() {
        return(
            <View>
                <Text>List is empty</Text>
            </View>
        )
    }

    render() { 
        console.log(this.props.likesListLoading)
        return (
            <View style={styles.mainContainer}>
            {
                this.props.likesListLoading ?
                <ActivityIndicator size="large" color="#0000ff" animating={true} />
                :
                <FlatList
                    data={this.props.likesList}
                    renderItem={({item})=> this.renderItem(item)}
                   // ListEmptyComponent={() => renderEmptyList()}
                />
            }
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

const mapStateToProps = state => {
    return {
        likesListLoading: state.app.likesListLoading,
        likesList: state.app.likesList,
    }
}

export default connect(mapStateToProps, actions)(Likes);
