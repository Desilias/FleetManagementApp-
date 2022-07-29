import React from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {useState, useContext} from 'react';
import {Colors} from '../components/constants/colors';
import {AuthContext} from '../store/auth-context';
import {createUser} from '../util/auth';
import AuthContent from '../components/Auth/AuthContent';
import Card from '../components/ui/Card';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import FlatButton from '../components/ui/FlatButton';
const SignupScreen = ({navigation}) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const loginHandler = () => {
    navigation.navigate('Login');
  };

  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.',
      );
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return (
    <>
      <View style={styles.rootScreen}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.text__container}>
          <Text style={styles.text1}>Already have an account?</Text>
          <FlatButton onPress={loginHandler}>LOG IN</FlatButton>
        </View>
        <View style={styles.auth__container}>
          <AuthContent onAuthenticate={signupHandler} />
        </View>
        <Text style={styles.text2}>By continuing you accept our</Text>
        <Text style={styles.text3}>TERMS & CONDITIONS AND PRIVACY POLICY </Text>
      </View>
    </>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  title: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.black,
    marginLeft: 20,
  },
  text1: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 6,
  },
  text2: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 18,
    alignSelf: 'center',
  },
  text__container: {
    flexDirection: 'row',
  },
  auth__container: {},
  text3: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 5,
    alignSelf: 'center',
  },
});
