import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    ScrollView,
    PermissionsAndroid,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import EStyleSheet from 'react-native-extended-stylesheet';
import MapView from 'react-native-maps';
import {
    
    MAPTIME
    
}from '../../api/API';
import { connect } from 'react-redux';


import { KEY } from '../../constants/misc';
import Geolocation from '@react-native-community/geolocation';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            latitude: 6.795127399999999,//Initial Longitude
            longitude: 79.90078710000002,//Initial Latitude
            destination: "",
            predictions: [],
            valu1:this.props.navigation.getParam('val1', 'NO-ID'),
            valu2:this.props.navigation.getParam('val2', 'NO-ID')
            
        };

    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                /* console.log(position); */
                //console.log('position->',position);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            error => this.setState({ error: error.message }),
            /* { enableHighAccuracy: true, maximumAge: 2000, timeout: 2000 } */
            { enableHighAccuracy: true},
        );

    }

    sendcoor() {
        AsyncStorage.getItem('email').then(email => {
            this.postdata(email);
        });
    }

    postdata(email){
        const {latitude,longitude,valu1,valu2}=this.state  
        const lat=latitude
        const lon=longitude
        
      console.log(lat,lon,valu1,valu2, email)
      fetch(MAPTIME, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              
              pickupLng: lon,
              pickupLat: lat,
              timeF:valu1,
              timeT:valu2,
              email
          })
      }).then(response => {
          console.log(response);
          if (response.ok) {
            alert("location updated")
            this.props.navigation.navigate('Profiles');
          } else {
             
              alert(
                  'map Failed!'
                  
                 
              );
          }
      }).catch(err => {
          console.log(err);
         
          
          alert(
             
              'network request failed',
              
          );
      });
  
      
       }
    
        async onChangeDestination(destination) {
            //console.log(destination);
            this.setState({ destination });
            //console.log(this.state.latitude)
            //console.log(this.state.longitude)
            const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${KEY}&components=country:lk&types=(cities)&&input=${destination}&location=${this.state.latitude},${this.state.longitude}`;
            try {
                const result = await fetch(apiUrl);
                const json = await result.json();
                //console.log(json);
                this.setState({
                    predictions: json.predictions
                });
            } catch (e) {
                console.log(e);
            }
        }
  
    

    async handleSelectedAddress(placeID) {
        const apiUrl =`https://maps.googleapis.com/maps/api/place/details/json?input=bar&placeid=${placeID}&key=${KEY}`;
        try {
            const result = await fetch(apiUrl);
            const json = await result.json();
            console.log(json.result.formatted_address);
            
            this.setState({
                latitude: json.result.geometry.location.lat,
                
                longitude: json.result.geometry.location.lng,
                destination: json.result.formatted_address,
                predictions: []
                
            });
            
            

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const predictions = this.state.predictions.map(prediction => (
            <TouchableOpacity
                key={prediction.id}
                onPress={() => this.handleSelectedAddress(prediction.place_id)}
            >
                <Text style={styles.suggestions} >{prediction.description}</Text>
            </TouchableOpacity>
        ));
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    showsUserLocation={true}
                    initialRegion={this.state.initialPosition}
                >
                    <MapView.Marker
                        coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}

                    />
                </MapView>
                <TextInput
                    placeholder="Enter place..."
                    style={styles.descriptionInput}
                    value={this.state.destination}
                    onChangeText={destination => this.onChangeDestination(destination)}
                    
                />

                {predictions}
                <TouchableOpacity
                                    onPress={() => this.sendcoor()}
                                   // onPress={() => this.props.naviagtion.navigate('Likes')}
                                    style={[styles.button, { backgroundColor: '#c97b63' }]}
                                >
                                    <Text style={styles.buttonText} >submit</Text>
                                </TouchableOpacity>

            </View>
            

        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    descriptionInput: {
        height: 40,
        borderWidth: 0.5,
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        backgroundColor: "white",

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 35,
        borderRadius: 17,
        elevation: 5,
    },
    suggestions: {
        backgroundColor: "white",
        padding: 5,
        fontSize: 18,
        borderWidth: 0.5,
        marginLeft: 5,
        marginRight: 5
    }

});

export default MapScreen;
