import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './Views/HomeView';
import SearchView from './Views/SearchView';

import React, { useState, useEffect } from 'react';


const Stack = createNativeStackNavigator();


export default function App() {
 

    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen name="Search" 
        component={SearchView} 
        options={{title: 'Search', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  
}
