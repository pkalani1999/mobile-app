import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';




const Heading = ({ children, style, props }) => {
    const { colors } = useTheme();
    return (
        <Text {...props} style={[styles.text, style, { color: colors.text }]}>
            {children}
        </Text>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        // fontWeight: 'bold'
    },
});

export default Heading;