import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { formData } from './formData';
import FormField from './FormField';

const RegisterForm = () => {
    const [formValues, handleFormValueChange, setFormValues] = formData({
        email: '',
        password: ''
    })

    const [formFieldData, setFormFieldData] = useState("")


    const OnSubmit = () => {
        setFormFieldData(formValues)
        console.warn('yeeh bruh', formFieldData);
    }


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../output-onlinepngtools.png')} />
            <Text style={styles.headerTxt}>Neoverce Solutions</Text>

            <View style={styles.inputView} >
                <FormField
                    label='Email'
                    style={styles.inputText}
                    formKey='email'
                    // placeholder='Your email id'
                    textInputProps={{
                        autoCapitalize: "none"
                    }}
                    handleFormValueChange={handleFormValueChange}
                />
            </View>
            <View style={styles.inputView} >
                <FormField
                    label='Password'
                    // style={styles.inputPass}
                    formKey='password'
                    // placeholder='Your password'
                    textInputProps={{
                        autoCapitalize: "none"
                    }}
                    
                    handleFormValueChange={handleFormValueChange}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={OnSubmit}>
                <Text style={styles.loginText} s>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 70,
        marginBottom: 20,
        justifyContent: "center",
        padding: 15
    },
    header: {
        fontSize: 20,
        paddingTop: 30
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#00ff7f",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 10
    },
    loginText: {
        color: "black"
    },
    headerTxt: {
        fontSize: 24,
        textAlign: 'center',
        // fontWeight: "350",
        paddingBottom: 70,
    },
    logo: {
        // fontWeight: "bold",
        // fontSize: 50,
        // color: "#fb5b5a",
        marginBottom: 15,
        width: 50,
        height: 50,
    },
})

export default RegisterForm;