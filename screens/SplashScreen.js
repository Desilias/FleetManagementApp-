import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import FlatButton from '../components/ui/FlatButton';
import {Colors} from '../components/constants/colors';

const SplashScreen = ({navigation}) => {
  const signupHandler = () => {
    navigation.navigate('Signup');
  };
  const loginHandler = () => {
    navigation.navigate('Login');
  };
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary100}
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      <Card>
        <View style={styles.container}>
          <View style={styles.blockTitle}>
            <Text style={styles.text1}>fleet management app</Text>
            <Text style={styles.text2}>Fleet Management</Text>
            <Text style={styles.text2}>Made Easy</Text>
            <Text style={styles.text3}>
              Created with fleet for fleet managers
            </Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.button_container}>
            <View style={styles.button_container1}>
              <Button onPress={signupHandler}>SIGN UP FOR FREE</Button>
            </View>
            <View style={styles.button_container2}>
              <FlatButton onPress={loginHandler}>I HAVE AN ACCOUNT</FlatButton>
            </View>
          </View>
        </View>
      </Card>
    </>
  );
};
export default SplashScreen;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.26;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
  },
  text1: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 28,
    padding: 15,
    fontFamily: 'sans-serif-medium',
  },
  text2: {
    color: Colors.black,
    fontSize: 26,
  },
  text3: {
    fontSize: 17,
  },
  button_container1: {
    padding: 10,
  },
});
