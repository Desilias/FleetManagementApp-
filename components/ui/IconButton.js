import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
//import {Ionicons} from '@expo/vector-icons';

const IconButton = props => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={props.onPress}>
      {/* <Ionicons name={props.icon} color={props.color} size={props.size} /> */}
      <Icon name={props.name} color={props.color} size={props.size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
