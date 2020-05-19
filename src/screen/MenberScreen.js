import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Profile from '../components/Profile'

export class MenberScreen extends Component {
    constructor(props){
        super(props)
    }
    profile=[
        {
            id:"1",
            name:"Boureima Tapily", 
            post:"Software developer",
            number:"+223 0572718508", 
            email:"boureimatapily1@gmail.com",
            location:"Accra, Gh",
            image:require('../../assets/f1.jpg')

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

export default MenberScreen
