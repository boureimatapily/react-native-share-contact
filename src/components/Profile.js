import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Entypo, Feather, FontAwesome, EvilIcons} from '@expo/vector-icons'

export class Profile extends Component {
    render() {
        const { image } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.infosContainer}>
                    <View style={styles.profileContainer}>
                        <Image source={image} style={styles.image} />
                        <View>
                            <Text style={styles.name}> {this.props.name} </Text>
                            <Text style={styles.post}> {this.props.post} </Text>
                        </View>
                    </View>
                    <View style={styles.icons}>
                        <Entypo name="twitter-with-circle" size={40}  style={styles.twit} />
                        <Entypo name="linkedin-with-circle" size={40} />
                    </View>
                    <View style={styles.numberContainer}>
                        <Feather name="phone" size={20} />
                        <Text style={styles.number}> {this.props.number} </Text>
                        
                    </View>
                    <View style={styles.emailContainer}>
                        <FontAwesome name="envelope-o" size={20} />
                        <Text style={styles.email}> {this.props.email} </Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <EvilIcons name="location" size={20}/>
                        <Text style={styles.location}> {this.props.location} </Text>
                    </View>



                </View>
            </View>
        )
    }
}
styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20
    },
    numberContainer:{
        flexDirection:"row"
    },
    emailContainer:{
        flexDirection:"row"

    },
    locationContainer:{
        flexDirection:"row"

    },
    icons:{
        flexDirection:"row",
        marginBottom:20
    },
    twit:{
        marginRight:10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 20,
        marginRight: 10
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20


    }
})

export default Profile
