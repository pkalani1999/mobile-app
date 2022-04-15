import { View, Text, StyleSheet } from 'react-native'
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';  
// import Icon from 'react-native-vector-icons/Ionicons';  
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FilledButton from './FilledButton';
import TextButton from './TextButton'

const DashBoard = ({ navigation }) => {

  const getLocalStorage = () => {
    AsyncStorage.removeItem('token');
    navigation.navigate('Login')
  }
  // useEffect(() => {
  //   getLocalStorage()
  // }, [])

  return (
    <View>
      <Text styles={styles.Title}>DashBoard</Text>
      {/* <FilledButton
        title={'Logout'}
        // style={styles.loginButton}
        onPress={() => getLocalStorage()}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  // Title:{
  //     backgroundColor:"black",
  //     color: '#777777',
  // }

})
export default DashBoard