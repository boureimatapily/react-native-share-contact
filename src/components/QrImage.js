import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions';


export default class QrImage extends Component {
  constructor(props) {
    super(props)
    state = {
      hasCameraPermission:null
    }
  }

  async componentWillMount() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });

  }

  render() {
    const {navigation} = this.props
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {

      return <Text>Requesting for camera permission</Text>;

    } else if (hasCameraPermission === false) {

      return <Text>No access to camera</Text>;

    } else {

      return (

        <View style={styles.container}>

          <BarCodeScanner

            onBarCodeRead={this._handleBarCodeRead}

            style={{ height: 200, width: 200 }}

          />

        </View>

      );

    }

  }

  _handleBarCodeRead = ({ type, data }) => {

    alert(`Bar code type : ${type} and data : ${data} `);

  }




  // return (
  //     <TouchableOpacity onPress={() => { navigation.navigate('MyProfile')}}
  //      style={styles.image}>
  //         <Feather name="user" size={30} color="white"  />
  //      </TouchableOpacity>
  // )

}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
