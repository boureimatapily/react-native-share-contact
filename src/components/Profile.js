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
                        <EvilIcons name="location" size={25}/>
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
    number:{ marginLeft:5},
    email:{marginLeft:5},
    location:{marginLeft:5},
    numberContainer:{
        flexDirection:"row",
        marginBottom:15
    },
    emailContainer:{
        flexDirection:"row",
        marginBottom:15

    },
    locationContainer:{
        flexDirection:"row",
        marginBottom:10

    },
    icons:{
        flexDirection:"row",
        marginBottom:25
    },
    twit:{
        marginRight:10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 10
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    }
})

export default Profile
