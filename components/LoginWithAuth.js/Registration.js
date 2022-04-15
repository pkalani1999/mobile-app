import { Text, View, StyleSheet, Button, ScrollView ,Alert} from 'react-native'
import axios from "axios";
import React, { useEffect } from 'react'
import Heading from './Heading'
import Input from './Input'
import FilledButton from './FilledButton'

const Registration = ({ navigation }) => {
    let initialValue = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        userType: "user"
    }

    const [user, setUser] = React.useState(initialValue);

    const onChangeFirstname = (value) => {
        setUser({ ...user, firstName: value });
    };
    const onChangeLastname = (value) => {
        setUser({ ...user, lastName: value });
    };
    const onChangePhoneno = (value) => {
        setUser({ ...user, phone: value });
    };
    const onChangeEmail = (value) => {
        setUser({ ...user, email: value });
    };
    const onChangepassword = (value) => {
        setUser({ ...user, password: value });
    };


    const RegisterData = () => {
        fetch("http://192.168.29.161:4041/api/users/signup", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                email: user.email,
                password: user.password,
                userType: "user"
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                if (responseJson.status !== 200) {
                    Alert.alert(responseJson.message)
                } else if (responseJson.status == 200) {
                    setUser(initialValue)
                    navigation.navigate('Login')
                }
            });
        if (user.initialValue) {
            Alert.alert("plese enter some value")
        }
    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <Heading style={styles.title}>REGISTRATION</Heading>
                {/* <Error error={'Enter Both'}/> */}

                <Input style={styles.input}
                    placeholder="Enter Your FirstName"
                    placeholderTextColor="black"
                    keyboardType={'default'}
                    // value={firstname}
                    onChangeText={(value) => onChangeFirstname(value)} />

                <Input style={styles.input}
                    placeholder="Enter LastName"
                    placeholderTextColor="black"
                    keyboardType={'default'}
                    // value={lastname}
                    onChangeText={(value) => onChangeLastname(value)} />

                <Input style={styles.input}
                    placeholder="Enter Phoneno."
                    placeholderTextColor="black"
                    keyboardType={'numeric'}
                    // value={phoneno}
                    onChangeText={(value) => onChangePhoneno(value)} />


                <Input style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    keyboardType={'email-address'}
                    // value={email}
                    onChangeText={(value) => onChangeEmail(value)} />

                <Input style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="black"
                    // value={password}
                    secureTextEntry
                    onChangeText={(value) => onChangepassword(value)}
                />

                <FilledButton
                    title={'Register'}
                    style={styles.loginButton}
                    onPress={() => {
                        RegisterData()
                    }}
                />
                <Button
                    onPress={() => { navigation.navigate('Login') }}
                    title="Back To Login"
                    color="#841584"
                />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        // paddingTop: "12%",
        // justifyContent: 'center',
        backgroundColor: "white"
    },
    title: {
        marginBottom: "2%",
    },
    input: {
        marginVertical: 5,
        color: "black"
    },
    loginButton: {
        marginVertical: 32,
    },


})
export default Registration