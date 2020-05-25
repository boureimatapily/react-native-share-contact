import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'



export default class QrImage extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const {navigation} = this.props

    return (
        <TouchableOpacity onPress={() => { navigation.navigate('MyProfile')}}
         style={styles.image}>
            <Feather name="user" size={30} color="white"  />
         </TouchableOpacity>
    )
  }
}

styles = StyleSheet.create({
    image:{
        marginRight:20
    }
})
