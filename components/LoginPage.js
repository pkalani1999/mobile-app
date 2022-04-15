// import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
// import React, { useState } from 'react';



// const LoginPage = ({navigation}) => {
//     const [feild, setFeild] = useState({
//         email: "",
//         password: ""
//     })

//     const handleFormValueChange = (key, value) => {
//         setFormValues(
//             {
//                 ...formValues,
//                 [key]: value
//             }
//         );
//     };
//     const onchangeHandler = () => {

//     }
//     return (
//         <React.Fragment>
//             {/* onChange={(event) => props.handleFormValueChange(props.formKey, event.nativeEvent.text)} */}
//             {/* <View style={styles.header}>
//                 <Text style={styles.headerTxt} >Neoverce Solutions</Text>
//             </View> */}
//             <View style={styles.container}>
//                 <Image style={styles.logo} source={require('./output-onlinepngtools.png')} />
//                 <Text style={styles.headerTxt}>Neoverce Solutions</Text>

//                 <View style={styles.inputView} >
//                     <TextInput
//                         style={styles.inputEmail}
//                         placeholder="Email..."
//                         keyboardType="email-address"
//                         placeholderTextColor="#003f5c"
//                         onChangeText={(e) => onchangeHandler(e)}
//                         textContentType="username"
//                         name="email" />

//                 </View>
//                 <View style={styles.inputView}>
//                     <TextInput
//                         secureTextEntry={true}
//                         style={styles.inputPassword}
//                         placeholder="Password..."
//                         placeholderTextColor="#003f5c"
//                         onChangeText={(e) => onchangeHandler(e)}
//                         textContentType="password"
//                         name="password" />

//                 </View>
//                 <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate('Home')}>
//                     <Text style={styles.loginText}>LOGIN</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Text style={styles.signupText}>Signup</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Text style={styles.forgot}>Forgot Password?</Text>
//                 </TouchableOpacity>
//             </View>
//         </React.Fragment>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: '#003f5c',
//         backgroundColor: '#f8f8ff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     logo: {
//         marginBottom: 15,
//         width: 50,
//         height: 50,
//     },
//     inputView: {
//         width: "80%",
//         backgroundColor: "#ffffff",
//         borderRadius: 20,
//         height: 50,
//         marginBottom: 20,
//         justifyContent: "center",
//         padding: 20
//     },
//     inputPassword: {
//         height: 50,
//         color: "black",
//         lineHeight: 23,
//     },
//     inputEmail: {
//         height: 50,
//         color: "black",
//         lineHeight: 23,
        
//     },
//     signupText: {
//         height: 60,
//         color: "white",
//         fontSize: 17
//     },
//     loginBtn: {
//         width: "60%",
//         // backgroundColor: "#00ff7f",
//         backgroundColor: "#800080",
//         borderRadius: 25,
//         height: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 25,
//         marginBottom: 10,  
//     },
//     loginText: {
//         color: "white"
//     },
//     headerTxt: {
//         fontSize: 24,
//         textAlign: 'center',
//         fontWeight: "bold",
//         paddingBottom: 70,
//         color: "black"
//     },
//     forgot: {
//         color: "white",
//         fontSize: 15,
//     }

// });
// export default LoginPage