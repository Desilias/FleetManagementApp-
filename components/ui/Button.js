import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../constants/colors';
const Button = props => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={props.onPress}>
      <View>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 100,
    backgroundColor:Colors.black,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
