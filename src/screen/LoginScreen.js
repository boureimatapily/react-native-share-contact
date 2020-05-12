import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'

export default class LoginScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                    <Image source={require('../../assets/f1.jpg')} style={styles.image} />
                    <View style={styles.mainContent}>
                <View style={styles.authContainer}>
                    <Text style={styles.authLabel}> Email</Text>
                    <TextInput placeholder="contact@codetraingh.com" placeholderTextColor="#aaaaaa"
                     style={styles.input} textAlign="right" />
                </View>
                <View style={styles.authPwdContainer}>
                    <Text style={styles.authLabel}>Password</Text>
                    <TextInput placeholder="Password" placeholderTextColor="#aaaaaa" style={styles.input}
                        secureTextEntry={true} textAlign="right" />
                </View>

                <TouchableOpacity style={styles.ButtonContainer}>
                    <Text style={styles.ButtonText}>SIGN IN</Text>
                </TouchableOpacity>

                <View style={styles.forgotContainer}>
                    <Text style={styles.forgotText}>Forgot? </Text>
                    <TouchableOpacity>
                    <Text style={styles.reset}>Reset Password</Text>
                    </TouchableOpacity>
                    
                </View>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
        container:{
           
        },
        mainContent:{
            marginHorizontal:20
        },
        image:{
            marginBottom:50,
            height:250
        },
        authContainer:{
            flexDirection:"row",
            justifyContent:"space-between",
            borderBottomWidth:0.3,
            borderBottomColor:"#aaaaaa",
            paddingBottom:20,
            marginTop:10
        },
        authPwdContainer:{
            flexDirection:"row",
            justifyContent:"space-between",
            paddingBottom:5,
            marginTop:10
        },
        authLabel:{
            fontSize:18,
            fontWeight:"bold",
            color:"gray"
        },
        ButtonContainer:{
            backgroundColor:"red",
            justifyContent:"center",
            alignItems:"center",
            height:70,
            borderRadius:5,
            marginTop:50
        },
        ButtonText:{
            color:"white",
            fontWeight:"bold",
            fontSize:20
        },
        forgotContainer:{
            flexDirection:"row",
            marginTop:40
        },
        forgotText:{
            marginRight:10,
            fontSize:15
        },
        reset:{
            borderBottomColor:"red",
            borderBottomWidth:1,
            paddingBottom:5,
            fontSize:15
        }
})