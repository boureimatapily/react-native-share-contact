import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions';


export default class ScanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null
    }
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  render() {
      const {navigation}= this.props
    return (
        <View style={styles.container}>
          {this.state.hasCameraPermission === null ?
            <Text>Requesting for camera permission</Text> :
            this.state.hasCameraPermission === false ?
              <Text>Camera permission is not granted</Text> :
              <BarCodeScanner
                torchMode="on"
                onBarCodeRead={this._handleBarCodeRead}
                style={styles.scanqr}
              />
          }
          <View style={styles.scanframe}>

          </View>
           <View  style={styles.qrcode}>
                    <Text style={styles.text3}>
                        Want to share your contact ?
                    </Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Scan')}}>
                    <Text style={styles.Scantext}>
                        Send
                    </Text>
                    </TouchableOpacity>

                </View>
        </View>
      );    

}}

styles = StyleSheet.create({
  container: {

  },
  scanframe:{
    borderWidth:1,
    borderColor:"black",
    height:200,
    width:200,
    position:"absolute",
    top:300,
    left:100,
    borderRadius:30,
    

  },
  scanqr:{
    height: 700,
    width: 400,
    marginRight:500
    
  },
  qrcode:{
    flexDirection:"row",
    borderTopWidth:0.5,
    borderBottomColor:"gray",
    marginLeft:10
},
text3:{
       marginVertical:20,
       marginRight:20,
       
},
Scantext:{
    marginVertical:20,
    borderWidth:1,
    borderColor:"red",
    paddingHorizontal:10,
   
}
})
