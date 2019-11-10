import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
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

    onSwipeLeft() {
        //console.warn('left');
        alert("liked"); //<Text>liked</Text>
    }
    onSwipeRight() {
        //console.warn('right')
    }
    superlike(){
        alert("you have super liked ,now you can send a message ");
        //console.log(this.state.data[index].first);
        //console.log(index);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <CardStack
                    style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}
                    ref={swiper => { this.swiper = swiper }}
                    verticalSwipe={false}
                    onSwipedLeft={this.onSwipeLeft.bind(this)}
                    onSwipedRight={this.onSwipeRight.bind(this)}
                >
                    {this.state.data.map((item, index) => (
                        <Card key={item} style={[styles.card]}>
                            <Text style={styles.label}>{item.first}</Text>
                            {/* <Text style={styles.label}>{index}</Text> */}
                            <Text style={styles.label}>{item.last}</Text>
                            <Text style={styles.label}>{item.age}</Text>
                            <TouchableOpacity
                                    onPress={()=>this.superlike()}
                                    style={[styles.button, { backgroundColor: '#c97b63' }]}
                                >
                                    <Text style={styles.buttonText} >Superlike</Text>
                                </TouchableOpacity>
                        </Card>

                    ))}
                </CardStack>
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
    },
    card: {
        alignSelf: 'center',
        width: entireScreenWidth - EStyleSheet.value('32rem'),
        height: entireScreenWidth - EStyleSheet.value('60rem'),
        padding: '10rem',
        borderRadius: '10rem',
        elevation: 2,
        shadowColor: 'rgba(0, 0, 0, 0.04)',
        shadowOffset: { width: 3, height: 0 },
        shadowOpacity: 1,
        shadowRadius: '6rem',
        backgroundColor: 'white'
    }
});

export default Profiles;
