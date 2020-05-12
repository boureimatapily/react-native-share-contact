import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,  TouchableOpacity } from 'react-native'


export default class GetInTouchScreen extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.conatiner}>
           <Image source={require('../../assets/f3.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
                <Text style={styles.text1} >GET IN TOUCH WITH THE PEOPLE OF COETRAIN</Text>
                <Text style={styles.text2}>Sign or Register with our Codetrain email</Text>
          </View>
          <View style={styles.access}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('Register')}}>
                    <Text style={styles.register}>REGISTER</Text>
              </TouchableOpacity>
                
                <TouchableOpacity  onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={styles.login}>LOGIN</Text>
              </TouchableOpacity>
                
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 conatiner:{},
 image:{
     marginBottom:50,
 },
 text1:{
     fontWeight:"bold",
     fontSize:25,
     marginBottom:10,
     marginLeft:45
 },
 text2:{
     color:"#aaaaaa"
 },
 textContainer:{
     alignItems:"center",
     justifyContent:"center"
 },
 access:{
     marginTop:100,
     flexDirection:"row",
     justifyContent:"space-around"
 },
 register:{
     fontSize:18,
     borderBottomWidth:1,
     borderBottomColor:"red",
     paddingBottom:5
    
 },
 login:{
     fontSize:18,
     borderBottomWidth:1,
     borderBottomColor:"red",
     paddingBottom:5
 },
})
