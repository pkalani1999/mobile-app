import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './components/LoginWithAuth.js/Registration';
import LoginScreen from './components/LoginWithAuth.js/LoginScreen';
import Profile from './components/LoginWithAuth.js/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashBoard from './components/LoginWithAuth.js/DashBoard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';


var Tab = createMaterialBottomTabNavigator();
var checkToken = AsyncStorage.getItem('token')
console.log(checkToken.length, "parthToken");

function HomeTabs() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#694fad', paddingBottom: 20 }}
      inactiveColor="#3e2465"
      activeColor="#f0edf6"
    >
      <Tab.Screen name="DashBoard" component={DashBoard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const App = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator name screenOptions={{
        headerShown: false,
      }}>

        {/* { */}
        {/* checkToken?.length ? */}
        {/* <RootStack.Screen
              name="Home"
              component={HomeTabs}
            /> */}
        {/* : */}
        <>
          <RootStack.Screen
            name="Login"
            component={LoginScreen}
          />
          <RootStack.Screen
            name="Registration"
            component={Registration}
          />
          <RootStack.Screen name="DashBoard" component={DashBoard} />
          <RootStack.Screen name="Profile" component={Profile} />
        </>

        {/* } */}

      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App

