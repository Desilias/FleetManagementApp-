import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {Colors} from '../constants/colors';
const LoadingOverlay = props => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary200} barStyle="dark-content" />
      <View style={styles.rootContainer}>
        <Text style={styles.message}>{props.message}</Text>
        <ActivityIndicator size="large" />
      </View>
    </>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
