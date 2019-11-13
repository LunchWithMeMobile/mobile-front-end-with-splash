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
class Likes extends Component {
    constructor(){  
        super();
        this.state={
            isLoading:false,
            dataSource:[],
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        AsyncStorage.getItem('accessToken').then(accessToken => {
            this.props.getLikesList(accessToken);
        });
    }

    renderItem(item) {  
        return(
            <ListItem 
                username={item.username}
                // fullname={item.fullname}
                // occupation={item.email}
                // image={item.image}
                onPress={() => this.onAccesped(item)}
            />
        )
    } 

    onAccesped(user) {
        console.log(user);
        alert("You have accepted a request from "+user.username);
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
                    data={this.props.requests}
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
        //app is  defined in the index file of reducers.
        likesListLoading: state.app.likesListLoading,
        likesList: state.app.likesList,
        requests: state.app.requests
    }
}

export default connect(mapStateToProps, actions)(Likes);
