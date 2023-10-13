import React, {useState, useEffect} from 'react';
import Home from './screens/Home';
import Datails from './screens/Datails';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homepadge" component={Home} />
        <Stack.Screen name="datailspage" component={Datails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
