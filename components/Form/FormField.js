import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormField = (props) => {
  return (
    <View style={styles.formFieldWrapper}>
      <Text style={styles.labelText}>{props.label}</Text>
      
      <TextInput
        // placeholder={props.placeholder}
        style={styles.formFieldText}
        onChange={(event) => props.handleFormValueChange(props.formKey, event.nativeEvent.text)}
        {...props.textInputProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
//   formFieldWrapper: {
//   },
  formFieldText: {
    fontSize:20,
    // borderRadius: 15,
    // borderWidth: 1,
    padding: 10,
    
  },
  labelText: {
    fontSize: 15,
    marginBottom: 0,
    paddingLeft: 10,
    paddingTop: 0
  }
})

export default FormField;