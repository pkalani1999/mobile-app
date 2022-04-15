import React, { useEffect, useState } from 'react';
import axios from "axios";

import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import asyncStorage from '@react-native-async-storage/async-storage';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';

const Profile = ({ route }) => {
  const { paramKey, authId } = route.params;
  const [userInfo, seuserInfo] = React.useState()
  console.log(authId, "iddd");
  console.log(paramKey, "paramKey");

  console.log(userInfo, "user");


  useEffect(async () => {
    // let token = await asyncStorage.getItem('token');
    // console.log('token', token);
    fetch(`http://192.168.29.161:4041/api/users/getAuthUser`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIyOEBnbWFpbC5jb20iLCJfdXNlcklkIjoiNjI1OTU4MTQ3NzEyYmYyZDM0YWZhNTllIiwiaWF0IjoxNjUwMDIzMjM0fQ.SZ2amXyMxe299omP6Op8olIG6PMiN_6w05tCcyVmzKY',
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json'
      },
      // body: 
    })
      .then((response) => response.json())
      .then((res) => {
        seuserInfo(res?.data)
      })
      .catch((error) => console.error(error))
      // .finally(() => setLoading(false));
      .done();
  }, []);



  // useEffect(() => {
  //   fetch({
  //     headers: {
  //       Authorization: paramKey ? `Bearer ${paramKey}` : "",
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: "PUT",
  //     url: `http://192.168.29.161:4040/api/users/updateProfile/${authId}`,
  //     // data: respuestasUSer,
  //   })
  //     .then((response) => {
  //       console.log(response.data.data, "seuserInfo");
  //       // loadUsers();
  //     })
  //     .catch((erro) => {
  //       console.log("error", erro);
  //     });




  // const loadUsers = () => {
  //   var checkToken = AsyncStorage.getItem('token')

  //   console.log(checkToken, "checkToken");
  //   fetch({
  //     method: "GET",
  //     headers: {
  //       Authorization: checkToken ? `Bearer ${checkToken}` : "",
  //     },
  //     url: "http://192.168.29.161:4040/api/users/getAuthUser",
  //   })
  //     .then((response) => {
  //       console.log(response.data, "dadada");
  //       seuserInfo(response.data.data);
  //     })
  //     .catch((erro) => {
  //       console.log("error", erro);
  //     });
  // };

  // loadUsers();
  // }, [])




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image size={100} source={require('./1649587887695.jpg')} />
          <View>
            <View style={{ marginLeft: 20 }}>
              <Title style={styles.title}>{userInfo?.firstName}</Title>
              <Caption style={styles.caption}>@jhon_doe</Caption>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="map-marker-radius" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>Surat, India</Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{userInfo?.phone}</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={20} />
            <Text style={{ color: "#777777", marginLeft: 20 }}>{userInfo?.email}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
export default Profile;