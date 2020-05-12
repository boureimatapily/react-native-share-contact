import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import{Feather} from '@expo/vector-icons'


export default class RegisterScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.image}>
                     <Feather name="user" size={50}  />
                     <Text>ADD PROFILE PHOTO</Text>
                </TouchableOpacity>
               
                <View style={styles.mainContent}>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Full Name</Text>
                        <TextInput placeholder="Boureima TAPILY" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Email</Text>
                        <TextInput placeholder="(+233) 0572718508" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Phone Number</Text>
                        <TextInput placeholder="Director of Marketing" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Role</Text>
                        <TextInput placeholder="contact@codetraingh.com" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> Twitter</Text>
                        <TextInput placeholder="@boureima" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>
                    <View style={styles.authContainer}>
                        <Text style={styles.authLabel}> LinkedIn</Text>
                        <TextInput placeholder="/Boureima" placeholderTextColor="#aaaaaa"
                            style={styles.input} textAlign="right" />
                    </View>


                    <TouchableOpacity style={styles.ButtonContainer}>
                        <Text style={styles.ButtonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    mainContent: {
        marginHorizontal: 20
    },
    image: {
        marginBottom: 50,
        height: 120,
        justifyContent:"center",
        alignItems:"center"
    },
    authContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.3,
        borderBottomColor: "#aaaaaa",
        paddingBottom: 20,
        marginTop: 10
    },
    authPwdContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 5,
        marginTop: 10
    },
    authLabel: {
        fontSize: 18,
        fontWeight: "bold",
        color: "gray"
    },
    ButtonContainer: {
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        borderRadius: 5,
        marginTop: 50
    },
    ButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

})
