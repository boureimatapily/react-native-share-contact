import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as RootNavigation from '../components/RootNavigation';

export default class QrImage extends Component {
  constructor(props) {
    super(props)
    }

  render() {
   
  return (
      <TouchableOpacity onPress={() => { RootNavigation.navigate('MyProfile')}}
       style={styles.image}>
          <Feather name="user" size={30} color="white"  />
       </TouchableOpacity>
  )

}
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
