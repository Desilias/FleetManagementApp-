import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useTheme} from '@react-navigation/native';
import {Colors} from '../components/constants/colors';
import Button from '../components/ui/Button';
const InstructionScreen = ({navigation}) => {
  const goItHandler = () => {
    navigation.navigate('SplashScreen');
  };
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary200} barStyle="dark-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          //resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: 'white',
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Manage Your Fleet
        </Text>
        <Text style={styles.text}>Get detailed reports, stay in touch</Text>
        <Text style={styles.text}>with vehicle users and keep your</Text>
        <Text style={styles.text}>fleet organized</Text>
        <View style={styles.button}>
          <Button onPress={goItHandler}>GO IT!</Button>
        </View>
      </Animatable.View>
    </View>
  );
};
export default InstructionScreen;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.26;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary200,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'sans-serif-medium',
    alignSelf: 'center',
  },
  text: {
    color: 'grey',
    marginTop: 2,
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    alignSelf: 'center',
  },
  button: {
    marginTop: 80,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
