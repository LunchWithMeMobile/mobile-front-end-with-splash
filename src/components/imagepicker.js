import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
//import RNFetchBlob from 'rn-fetch-blob';
const options={
  title: 'pic',
  takePhotoButtonTitle: 'Take photo from camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
}
export default class Imagepicker extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarSource: null,
      pic:null
    }
  }
pic=()=>{
  //alert('clicked');

  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('Image Picker Error: ', response.error);
    }

    else {
      let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source,
        pic:response.data
      });
    }
  });
}
/* uploadPic=()=>{
  // alert('ddf');
  RNFetchBlob.fetch('POST', 'https://unentertaining-sect.000webhostapp.com/war/upload.php', {
    Authorization : "Bearer access-token",
    otherHeader : "foo",
    'Content-Type' : 'multipart/form-data',
  }, [
    // element with property `filename` will be transformed into `file` in form data
    { name : 'image', filename : 'avatar.png', data: this.state.pic}
  ]).then((resp) => {
    console.log(resp);
    alert('your image uploaded successfully');
    this.setState({avatarSource:null})
  })
}
 */
  render() {
    return (
     
        

        <TouchableOpacity
        onPress={this.pic}>
          <Text style={styles.btn}>select a profile picture*</Text>
        </TouchableOpacity>
/* 
        <TouchableOpacity onPress={this.uploadPic}>
          <Text>Upload</Text>
        </TouchableOpacity> */


      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn:{
    //backgroundColor: '#DDDDDD',
    color:"#D5AFAF",
    padding: 10,
    fontWeight:"bold",
     fontSize: 20,
   }
});