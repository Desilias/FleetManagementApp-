import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = props => {
  return (
    <>
      <LinearGradient
        locations={[0.5, 0.6]}
        colors={['#fccf7d', '#fabb38']}
        style={styles.rootScreen}>
        {props.children}
      </LinearGradient>
    </>
  );
};
export default Card;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
