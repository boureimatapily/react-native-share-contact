import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class QrCodeScreen extends Component {
    constructor(props) {
        super(props)
    }
   
    render() {
        const {navigation} = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.text1}>
                    Exchange Contact Information
               </Text>
                <Text style={styles.text2}>
                    Scan this Qr bellow to share your Contact
                </Text>
                <View style={styles.qrplace}>
                    <QRCode codeStyle='square' />
                </View>
                <View style={styles.profileContainer}>
                    <Image source={require('../../assets/f3.jpg')} style={styles.image} />
                    <View>
                        <Text style={styles.name}> Mimie Anaman </Text>
                        <Text style={styles.post}> Software developer </Text>
                    </View>

                </View>
                <View  style={styles.qrcode}>
                    <Text style={styles.text3}>
                        Want to add a new connection ?
                    </Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Scan')}}>
                    <Text style={styles.Scantext}>
                        Scan QR
                    </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:80
    },
    profileContainer: {
        flexDirection: "row",
        marginVertical:50,
        marginRight:100
    },
    image:{
        width:50,
        height:50,
        borderRadius:20,
        marginRight:20
    },
    name:{
        fontWeight:"bold"
    },
    text1:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:20
    },
    text2:{
        marginBottom:20,
    },
    qrcode:{
        flexDirection:"row",
        borderTopWidth:0.5,
        borderBottomColor:"gray"
    },
    text3:{
           marginVertical:20,
           marginRight:20
    },
    Scantext:{
        marginVertical:20,
        borderWidth:1,
        borderColor:"red",
        paddingHorizontal:10
    }

})