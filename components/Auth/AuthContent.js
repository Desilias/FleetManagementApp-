import React from 'react';
import {useState} from 'react';
import {Alert, StyleSheet, View, Text,StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import {Colors} from '../constants/colors';

const AuthContent = props => {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const switchAuthModeHandler = () => {
    if (props.isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  };

  const submitHandler = credentials => {
    let {email, confirmEmail, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!props.isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    props.onAuthenticate({email, password});
  };

  return (
    <View>
       <StatusBar backgroundColor={Colors.primary200} barStyle="dark-content" />
      <View style={styles.authContent}>
        <AuthForm
          isLogin={props.isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          <FlatButton onPress={switchAuthModeHandler}>
            {props.isLogin ? 'Create a new user' : 'Log in instead'}
          </FlatButton>
        </View>
      </View>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 30,
    marginHorizontal: 32,
    padding: 16,
   borderRadius: 8,
    backgroundColor:'white',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
