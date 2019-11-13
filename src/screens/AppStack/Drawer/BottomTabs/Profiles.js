import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { SkypeIndicator } from 'react-native-indicators';

import * as actions from '../../../../redux/actions';
import avatar from '../../../../assests/Images/avatar6.jpg';
import NavigationService from '../../../../services/NavigationService';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    first: 'John',
                    last: 'Doe',
                    age: '25'
                },
                {
                    first: 'Jane',
                    last: 'Doe',
                    age: '22'
                },
                {
                    first: 'Adam',
                    last: 'Doe',
                    age: '25'
                },
                {
                    first: 'Alex',
                    last: 'Doe',
                    age: '24'
                },
            ]
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('accessToken').then(accessToken => {
            this.props.getNearbyUsers(accessToken);
        });
    }

    onSwipeLeft(index) {
        AsyncStorage.getItem('accessToken').then(accessToken => {
            this.props.like(this.filterLoggedInUser()[index]._id, this.filterLoggedInUser()[index].username, accessToken);
        });
    }
    onSwipeRight() {
        //console.warn('right')
    }
    superlike(){
        alert("you have super liked ,now you can send a message ");
        this.props.navigation.navigate('ChatListScreen')
        
        //console.log(this.state.data[index].first);
        //console.log(index);
    }

    filterLoggedInUser() {
        const { nearByUsers, username } = this.props;
        return nearByUsers.filter(item => {
            return item.username != username;
        });
    }

    onProfileClicked(user) {
        this.props.onUserSelected(user);
        this.props.navigation.navigate('ProfileSettings');
    }

    render() {
        const { nearByUsers, loading, startTime, endTime } = this.props;
        return (
            <View style={styles.mainContainer}>
                {
                    loading ?
                        <SkypeIndicator color={'white'} size={EStyleSheet.value('40rem')} />
                        :
                        <CardStack
                            style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
                            ref={swiper => { this.swiper = swiper }}
                            verticalSwipe={false}
                            onSwipedLeft={this.onSwipeLeft.bind(this)}
                            onSwipedRight={this.onSwipeRight.bind(this)}
                        >
                            {this.filterLoggedInUser().map((item, index) => (
                                <Card key={item} style={[styles.card]}>
                                    {
                                        item.image === null || '' || ' ' ?
                                            <Image 
                                                resizeMode={'contain'}  
                                                source={avatar}
                                                defaultSource={avatar}
                                                style={styles.imageContainer}
                                            />
                                            :
                                            <Image 
                                                resizeMode={'contain'}
                                                source={{uri: item.image}}
                                                defaultSource={avatar}
                                                style={styles.imageContainer}
                                            />
                                    }
                                    <View style={styles.bottomContainer}>
                                        <View style={styles.row}>
                                            <View style={styles.leftContainer}>
                                                <Text style={[styles.text, {fontSize: EStyleSheet.value('15rem')}]}>{item.username}</Text>
                                            </View>
                                            <View style={styles.rightContainer}>
                                                <TouchableOpacity style={styles.btn}>
                                                    <Text style={styles.btnText}>Superlike</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={styles.row}> 
                                            <View style={styles.leftContainer}>
                                                <Text style={styles.text}>Available from {startTime} to {endTime}</Text>
                                            </View>
                                            <View style={styles.rightContainer}>
                                                <TouchableOpacity style={styles.btn} onPress={() => this.onProfileClicked(item)}>
                                                    <Text style={styles.btnText}>View Profile</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Card>

                            ))}
                        </CardStack>
                }
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#a98274'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 35,
        borderRadius: 17,
        elevation: 5,
        paddingTop:15
    },
    buttonText: {
        alignSelf: 'center',
        color: '#ffffff',
        fontWeight: "900",
        fontSize: '15rem',
    },
    card: {
        alignSelf: 'center',
        width: entireScreenWidth - EStyleSheet.value('32rem'),
        height: '400rem',
        // padding: '10rem',
        borderRadius: '10rem',
        elevation: 2,
        shadowColor: 'rgba(0, 0, 0, 0.04)', 
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 1,
        shadowRadius: '6rem',
        backgroundColor: 'white'
    },
    imageContainer:{
        height: '300rem',
        width: entireScreenWidth - EStyleSheet.value('32rem'),
        alignSelf:'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        height: '100rem',
        width: entireScreenWidth - EStyleSheet.value('32rem'),
        borderBottomLeftRadius: '10rem',
        borderBottomRightRadius: '10rem'
    },
    row: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '15rem'
    },
    leftContainer: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    btn: {
        backgroundColor: '#c97b63',
        width: '100rem',
        height: '40rem',
        borderRadius: '15rem',
        elevation: 3,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '8rem'
    },
    btnText: { 
        color: 'white', 
        fontSize: '13rem'
    },
    text: {
        fontSize: '13rem',
    }
});

const mapStateToProps = state => {
    return { 
        nearByUsers: state.app.nearByUsers,
        loading: state.app.loading,
        startTime: state.app.startTime,
        endTime: state.app.endTime,
        username: state.auth.username
    };
};

export default connect(mapStateToProps, actions)(Profiles);
