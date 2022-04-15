import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-ionicons';
import { useTheme } from '@react-navigation/native';

const IconButton = ({ name, style, onPress }) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Icon name={name} color={colors.primary} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 20,
        // borderRadius: 8,
    }
})
export default IconButton;