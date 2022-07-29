import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Colors} from '../constants/colors';

const FlatButton = props => {
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

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color:Colors.black,
    fontSize:16
  },
});
