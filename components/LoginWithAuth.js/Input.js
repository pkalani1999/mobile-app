import { Text, View, StyleSheet, TextInput } from 'react-native';
import React from 'react'

const Input = ({ style, ...props }) => {
    return (
        <TextInput {...props} style={[style, styles.input]}  />
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 20,
        borderRadius: 8,
        // marginVertical:20
    }
});

export default Input