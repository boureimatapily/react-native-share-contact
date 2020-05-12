import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import GetInTouchScreen from './src/screen/GetInTouchScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';


const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Login" component={LoginScreen} 
            options={{
              headerTitle:"Sign In",
              headerTitleAlign:"center",
              headerStyle:{backgroundColor:"red"},
              headerTintColor:"white"
            }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} 
              options={{
                headerTitle:"Register",
                headerTitleAlign:"center",
                headerStyle:{backgroundColor:"red"},
                headerTintColor:"white"
              }}
        />
        <Stack.Screen name="GetInTouch" component={GetInTouchScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
