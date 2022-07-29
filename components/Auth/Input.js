import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {Colors} from '../constants/colors';

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, props.isInvalid && styles.labelInvalid]}>
        {props.label}
      </Text>
      <TextInput
        style={[styles.input, props.isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={props.keyboardType}
        secureTextEntry={props.secure}
        onChangeText={props.onUpdateValue}
        value={props.value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: Colors.black,
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 4,
    fontSize: 16,
    borderBottomWidth: 1,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
