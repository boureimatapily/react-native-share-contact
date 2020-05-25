import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { QRCode } from 'react-native-custom-qr-codes-expo';


export default class QrCodeScreen extends Component {
    constructor(props) {
        super(props)
    }
    profile = [
        {
            id: "1",
            name: "Mimie Anaman",
            post: "Software developer",
            number: "+223 000-88-999",
            email: "mimi@gmail.com",
            location: "Accra, Gh",
            image: require('../../assets/f3.jpg')

        }
    ]
    render() {
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
                    <Image source={this.profile.image} style={styles.image} />
                    <View>
                        <Text style={styles.name}> {this.profile.name} </Text>
                        <Text style={styles.post}> {this.profile.post} </Text>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    }

})