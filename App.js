import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import GetInTouchScreen from './src/screen/GetInTouchScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';
import MenberScreen from './src/screen/MenberScreen';
import MyProfileScreen from './src/screen/MyProfileScreen';
import QrCodeScreen from './src/screen/QrCodeScreen';
import QrImage from './src/components/QrImage';
import { navigationRef } from './src/components/RootNavigation';
import ScanScreen from './src/screen/ScanScreen';


const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer ref={navigationRef}> 
      <Stack.Navigator initialRouteName="Scan" >
        <Stack.Screen name="Login" component={LoginScreen} 
            options={{
              headerTitle:"Sign In",
              headerTitleAlign:"center",
              headerStyle:{backgroundColor:"red"},
              headerTintColor:"white"
            }}
        />
        <Stack.Screen name="Scan" component={ScanScreen} 
            options={{
             header:null
            }}
        />
         <Stack.Screen name="Menber" component={MenberScreen}
            options={{
              headerTitle:"Menber Profile",
              headerTitleAlign:"center",
              headerStyle:{backgroundColor:"red"},
              headerTintColor:"white"
            }}
          />
           <Stack.Screen name="MyProfile" component={MyProfileScreen}
            options={{
              headerTitle:"My Profile",
              headerTitleAlign:"center",
              headerStyle:{backgroundColor:"red"},
              headerTintColor:"white"
            }}
          />
            <Stack.Screen name="QrCode" component={QrCodeScreen}
            options={{
              headerTitle:"Codetrain QrCode",
              headerTitleAlign:"center",
              headerStyle:{backgroundColor:"red"},
              headerTintColor:"white",
              headerRight:()=>(<QrImage />)
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
        <Stack.Screen name="GetInTouch" component={GetInTouchScreen}
            options={{
              headerTitle:null,
              headerStyle:{height:60}
            }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen}
             options={{
              headerTitle:null,
              headerStyle:{height:0}
            }}
        />
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
