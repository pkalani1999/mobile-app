import { Text, View, StyleSheet, BackHandler, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import Heading from './Heading'
import Input from './Input'
import FilledButton from './FilledButton'
import axios from "axios";
import TextButton from './TextButton'


const LoginScreen = ({ navigation }) => {

    // useEffect(() => {
    //     // debugger
    //     const getAsy = () => {
    //         var p = AsyncStorage.getItem('token')
    //         console.log(p, "p");
    //     }
    //     getAsy()

    // }, [])

    let initialVal = {
        email: '', password: ''
    }
    const [auth, setAuth] = React.useState(initialVal);
    // const [id, setId] = React.useState("");
    const [tokens, getToken] = React.useState();
    // console.log(tokens, "tokens");

    const onChangeEmail = (value) => {
        setAuth({ ...auth, email: value });
    };
    const onChangePassword = (value) => {
        setAuth({ ...auth, password: value });
    };

    const setStringValue = async (value,id) => {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            Alert.alert("undefine")
        }
        console.log('Done.')

        if (value?.length) {

            // console.log("vivek", id);
            navigation.navigate('Profile', {
                paramKey: value,
                authId: id
            })
        }
        getToken(value)
    }

    // console.log(id, "id");
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to go back?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, [auth]);


    const OnLogin = () => {
        if (auth.email && auth.password) {
            fetch('http://192.168.29.161:4040/api/auth/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: auth.email,
                    password: auth.password
                })
            })
                .then((response) => response.json())
                .then((res) => {
                    var authToken = res?.data?.token
                    var id = res.data?.userdata?.id
                    setStringValue(authToken,id)
                    // getAsy(authToken)
                    // setId(id)

                })
                .done();
        } else Alert.alert('Please Enter Email And Password')
    }
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>Login</Heading>
            {/* <Error error={'Enter Both'}/> */}
            <Input style={styles.input}
                placeholder="Email"
                placeholderTextColor="black"
                keyboardType={'email-address'}
                onChangeText={(value) => onChangeEmail(value)} />
            <Input style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry
                onChangeText={(value) => onChangePassword(value)} />
            <FilledButton
                title={'Login'}
                style={styles.loginButton}
                onPress={() => OnLogin()}
            />
            <TextButton title={'Create One'} onPress={() => { navigation.navigate('Registration') }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 120,
        // justifyContent: 'center',
        backgroundColor: "white"
    },
    title: {
        marginBottom: 48,
    },
    input: {
        marginVertical: 8,
        color: "black"
    },
    loginButton: {
        marginVertical: 32,
    },


})
export default LoginScreen