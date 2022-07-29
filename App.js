import React from 'react';
import {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {StatusBar} from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import AppLoading from 'expo-app-loading';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import {Colors} from './components/constants/colors';
import AuthContextProvider, {AuthContext} from './store/auth-context';
import IconButton from './components/ui/IconButton';
import LoginScreen from './screens/LoginScreen';
import Card from './components/ui/Card';
import SplashScreen from './screens/SplashScreen';
import {StatusBar} from 'react-native';
import InstructionScreen from './screens/InstructionScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FleetScreen from './screens/FleetScreen';
import CalendarScreen from './screens/CalendarScreen';
import SpendingsScreen from './screens/SpendingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Instruction"
      screenOptions={{
        headerShown: false,
        headerStyle: {backgroundColor: Colors.primary100},
        headerTintColor: Colors.black,
        contentStyle: {backgroundColor: Colors.primary200},
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{}} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: 'Register',
        }}
      />
      <Stack.Screen
        name="Instruction"
        component={InstructionScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name="Fleet" component={FleetScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Spendings" component={SpendingsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: ({tintColor}) => (
            <IconButton
              name="logout"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  // if (isTryingLogin) {
  //   return <AppLoading />;
  // }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
