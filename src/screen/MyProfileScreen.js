import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Profile from '../components/Profile'

export class MyProfileScreen extends Component {
    constructor(props){
        super(props)
    }
    profile=[
        {
            id:"1",
            name:"Mimie Anaman", 
            post:"Software developer",
            number:"+223 000-88-999", 
            email:"mimi@gmail.com",
            location:"Accra, Gh",
            image:require('../../assets/f3.jpg')

        }
    ]
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.profile}
            renderItem={({item})=>{
                return <Profile 
                             name={item.name}
                             post={item.post}
                             number={item.number}
                             email={item.email}
                             location={item.location}
                             image={item.image}
                             />
            }}
            keyExtractor={item=>item.id}
        />
      </View>
    )
  }
}

styles= StyleSheet.create({

})

export default MyProfileScreen
