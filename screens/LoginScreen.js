import React from 'react';
import {useContext, useState} from 'react';
import {Alert, View, StyleSheet, Text} from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import {Colors} from '../components/constants/colors';
import Card from '../components/ui/Card';
import FlatButton from '../components/ui/FlatButton';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {AuthContext} from '../store/auth-context';
import {login} from '../util/auth';

const LoginScreen = ({navigation}) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signUpHandler = () => {
    navigation.navigate('Signup');
  };

  async function loginHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!',
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <>
      <View style={styles.rootScreen}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.text__container}>
          <Text style={styles.text1}>No account ?</Text>
          <FlatButton onPress={signUpHandler}>SING UP</FlatButton>
        </View>
        <View style={styles.auth__container}>
          <AuthContent isLogin onAuthenticate={loginHandler} />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
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

  text__container: {
    flexDirection: 'row',
  },
  auth__container: {},
});
