import React from 'react';
import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import Button from '../components/ui/Button';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  processColor,
} from 'react-native';
import {AuthContext} from '../store/auth-context';
import {getAddress, getMapPreview} from '../util/location';
import {Colors} from '../components/constants/colors';
import {Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {BarChart} from 'react-native-charts-wrapper';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

function DashboardScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState('');

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  const logOutHandler = () => {
    authCtx.logout();
  };

  useEffect(() => {
    setFetchedMesssage(token);
  }, [token]);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Live GPS</Text>
        <View style={styles.mapPreview}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
        </View>
        <Text style={styles.title}>Spendings</Text>
        <View style={styles.mapPreview}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
        </View>
        <Text style={styles.title}>Upcoming Deadlines</Text>
        <View style={styles.blocoil}>
          <View style={styles.upcomingContainer}>
            <View>
              <Text>Image</Text>
            </View>
            <View style={styles.oilChangeContainer}>
              <View>
                <Text>Oil Change</Text>
              </View>
              <View>
                <Text>Date</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default DashboardScreen;
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.black,
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 4
  },
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  upcomingContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  oilChangeContainer: {
    flex: 1,
  },
  blocoil: {
    width: '100%',
    height: 200,
    marginVertical: 8,
  },
});
